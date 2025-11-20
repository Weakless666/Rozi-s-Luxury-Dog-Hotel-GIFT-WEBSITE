import { sql } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import { z } from 'zod'

const bookingSchema = z.object({
  dogName: z.string().min(1, 'Името на кучето е задължително'),
  ownerName: z.string().min(1, 'Вашето име е задължително'),
  phone: z.string().min(1, 'Телефонът е задължителен'),
  email: z.string().email('Моля въведете валиден имейл'),
  checkInDate: z.string().min(1, 'Датата на настаняване е задължителна'),
  checkOutDate: z.string().min(1, 'Датата на напускане е задължителна'),
  dogWeight: z.string().optional(),
  specialNotes: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = bookingSchema.parse(body)

    // Insert into database
    const result = await sql`
      INSERT INTO bookings (
        dog_name, owner_name, phone, email, 
        check_in_date, check_out_date, dog_weight, special_notes
      )
      VALUES (
        ${validatedData.dogName},
        ${validatedData.ownerName},
        ${validatedData.phone},
        ${validatedData.email},
        ${validatedData.checkInDate},
        ${validatedData.checkOutDate},
        ${validatedData.dogWeight || null},
        ${validatedData.specialNotes || null}
      )
      RETURNING id
    `

    // Send confirmation email to the owner
    await sendEmail({
      to: validatedData.email,
      subject: 'Резервация получена - Rozi\'s Luxury Dog Hotel',
      html: `
        <h2>Здравейте, ${validatedData.ownerName}!</h2>
        <p>Благодарим за резервацията за ${validatedData.dogName}.</p>
        <p><strong>Детайли на резервацията:</strong></p>
        <ul>
          <li>Име на кучето: ${validatedData.dogName}</li>
          <li>Настаняване: ${validatedData.checkInDate}</li>
          <li>Напускане: ${validatedData.checkOutDate}</li>
          <li>Телефон: ${validatedData.phone}</li>
        </ul>
        <p>Ще се свържем с вас скоро за потвърждение на резервацията.</p>
        <p>С уважение,<br>Екипът на Rozi's Luxury Dog Hotel</p>
        <p>Телефон: +359 882 739 396</p>
      `,
    })

    // Send notification to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@rozi-dog-hotel.eu',
      subject: 'Нова резервация - ' + validatedData.dogName,
      html: `
        <h2>Нова резервация</h2>
        <p><strong>Клиент:</strong> ${validatedData.ownerName}</p>
        <p><strong>Куче:</strong> ${validatedData.dogName}</p>
        <p><strong>Телефон:</strong> ${validatedData.phone}</p>
        <p><strong>Имейл:</strong> ${validatedData.email}</p>
        <p><strong>Настаняване:</strong> ${validatedData.checkInDate}</p>
        <p><strong>Напускане:</strong> ${validatedData.checkOutDate}</p>
        ${validatedData.dogWeight ? `<p><strong>Тегло:</strong> ${validatedData.dogWeight}</p>` : ''}
        ${validatedData.specialNotes ? `<p><strong>Бележки:</strong> ${validatedData.specialNotes}</p>` : ''}
      `,
    })

    return NextResponse.json({ 
      success: true, 
      id: result[0].id,
      message: 'Резервацията е изпратена успешно!' 
    })
  } catch (error: any) {
    console.error('Booking error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Грешка при изпращане на резервацията' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const bookings = await sql`
      SELECT * FROM bookings 
      ORDER BY created_at DESC
    `
    
    return NextResponse.json({ success: true, data: bookings })
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { success: false, error: 'Грешка при зареждане на резервациите' },
      { status: 500 }
    )
  }
}

