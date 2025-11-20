import { sql } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import { z } from 'zod'

const inquirySchema = z.object({
  name: z.string().min(1, 'Името е задължително'),
  email: z.string().email('Моля въведете валиден имейл'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Съобщението трябва да е поне 10 символа'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const validatedData = inquirySchema.parse(body)

    // Insert into database
    const result = await sql`
      INSERT INTO inquiries (name, email, phone, message)
      VALUES (
        ${validatedData.name},
        ${validatedData.email},
        ${validatedData.phone || null},
        ${validatedData.message}
      )
      RETURNING id
    `

    // Send notification email
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'info@rozi-dog-hotel.eu',
      subject: 'Нова заявка - ' + validatedData.name,
      html: `
        <h2>Нова заявка от контактната форма</h2>
        <p><strong>Име:</strong> ${validatedData.name}</p>
        <p><strong>Имейл:</strong> ${validatedData.email}</p>
        ${validatedData.phone ? `<p><strong>Телефон:</strong> ${validatedData.phone}</p>` : ''}
        <p><strong>Съобщение:</strong></p>
        <p>${validatedData.message}</p>
      `,
    })

    return NextResponse.json({ 
      success: true, 
      id: result[0].id,
      message: 'Заявката е изпратена успешно!' 
    })
  } catch (error: any) {
    console.error('Inquiry error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: error.issues[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Грешка при изпращане на заявката' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const inquiries = await sql`
      SELECT * FROM inquiries 
      ORDER BY created_at DESC
    `
    
    return NextResponse.json({ success: true, data: inquiries })
  } catch (error) {
    console.error('Error fetching inquiries:', error)
    return NextResponse.json(
      { success: false, error: 'Грешка при зареждане на заявките' },
      { status: 500 }
    )
  }
}

