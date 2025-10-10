import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      to,
      subject,
      bookingData,
      type // 'confirmation', 'status_update', 'cancellation'
    } = req.body

    if (!to || !subject) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    // Generate email content based on type
    let htmlContent = ''
    let textContent = ''

    switch (type) {
      case 'confirmation':
        htmlContent = generateConfirmationEmail(bookingData)
        textContent = generateConfirmationEmailText(bookingData)
        break
      case 'status_update':
        htmlContent = generateStatusUpdateEmail(bookingData)
        textContent = generateStatusUpdateEmailText(bookingData)
        break
      case 'cancellation':
        htmlContent = generateCancellationEmail(bookingData)
        textContent = generateCancellationEmailText(bookingData)
        break
      default:
        htmlContent = generateDefaultEmail(bookingData)
        textContent = generateDefaultEmailText(bookingData)
    }

    // Send email
    const info = await transporter.sendMail({
      from: `"Rozi's Luxury Dog Hotel" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: textContent,
      html: htmlContent
    })

    res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully'
    })

  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Failed to send email' })
  }
}

// Email template functions
function generateConfirmationEmail(bookingData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Потвърждение на резервация</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #FFC0CB, #8B5FBF); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .booking-details { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .highlight { color: #8B5FBF; font-weight: bold; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🐕 Rozi's Luxury Dog Hotel</h1>
          <h2>Потвърждение на резервация</h2>
        </div>
        <div class="content">
          <p>Здравейте <span class="highlight">${bookingData.ownerName}</span>,</p>
          
          <p>Благодарим ви за резервацията! Вашата резервация е получена и ще бъде обработена в рамките на 2 часа.</p>
          
          <div class="booking-details">
            <h3>Детайли на резервацията:</h3>
            <p><strong>Номер на резервация:</strong> #RDH-${bookingData.id}</p>
            <p><strong>Куче:</strong> ${bookingData.dogName}</p>
            <p><strong>Период:</strong> ${bookingData.checkIn} - ${bookingData.checkOut}</p>
            <p><strong>Брой дни:</strong> ${bookingData.numberOfDays}</p>
            <p><strong>Обща сума:</strong> ${bookingData.totalPrice}лв</p>
            <p><strong>Статус:</strong> Чака потвърждение</p>
          </div>
          
          <p>Ще се свържем с вас скоро за потвърждение на резервацията.</p>
          
          <p>С най-добри пожелания,<br>
          Екипът на Rozi's Luxury Dog Hotel</p>
        </div>
        <div class="footer">
          <p>Сапарева баня, България | +359 888 123 456 | info@rozis-dog-hotel.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateConfirmationEmailText(bookingData: any) {
  return `
Rozi's Luxury Dog Hotel - Потвърждение на резервация

Здравейте ${bookingData.ownerName},

Благодарим ви за резервацията! Вашата резервация е получена и ще бъде обработена в рамките на 2 часа.

Детайли на резервацията:
- Номер на резервация: #RDH-${bookingData.id}
- Куче: ${bookingData.dogName}
- Период: ${bookingData.checkIn} - ${bookingData.checkOut}
- Брой дни: ${bookingData.numberOfDays}
- Обща сума: ${bookingData.totalPrice}лв
- Статус: Чака потвърждение

Ще се свържем с вас скоро за потвърждение на резервацията.

С най-добри пожелания,
Екипът на Rozi's Luxury Dog Hotel

Сапарева баня, България | +359 888 123 456 | info@rozis-dog-hotel.com
  `
}

function generateStatusUpdateEmail(bookingData: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Обновление на статус</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #FFC0CB, #8B5FBF); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .status-confirmed { background: #d4edda; color: #155724; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .status-cancelled { background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🐕 Rozi's Luxury Dog Hotel</h1>
          <h2>Обновление на статус</h2>
        </div>
        <div class="content">
          <p>Здравейте ${bookingData.ownerName},</p>
          
          <div class="status-${bookingData.status}">
            <h3>Статус на резервацията: ${bookingData.status === 'confirmed' ? 'ПОТВЪРДЕНА' : 'ОТКАЗАНА'}</h3>
          </div>
          
          <p>Вашата резервация #RDH-${bookingData.id} е ${bookingData.status === 'confirmed' ? 'потвърдена' : 'отказана'}.</p>
          
          ${bookingData.status === 'confirmed' ? 
            '<p>Можете да пристигнете на датата на настаняване. Ще се свържем с вас за допълнителни детайли.</p>' :
            '<p>Ако имате въпроси относно отмяната, моля свържете се с нас.</p>'
          }
          
          <p>С най-добри пожелания,<br>
          Екипът на Rozi\'s Luxury Dog Hotel</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateStatusUpdateEmailText(bookingData: any) {
  return `
Rozi's Luxury Dog Hotel - Обновление на статус

Здравейте ${bookingData.ownerName},

Статус на резервацията: ${bookingData.status === 'confirmed' ? 'ПОТВЪРДЕНА' : 'ОТКАЗАНА'}

Вашата резервация #RDH-${bookingData.id} е ${bookingData.status === 'confirmed' ? 'потвърдена' : 'отказана'}.

${bookingData.status === 'confirmed' ? 
  'Можете да пристигнете на датата на настаняване. Ще се свържем с вас за допълнителни детайли.' :
  'Ако имате въпроси относно отмяната, моля свържете се с нас.'
}

С най-добри пожелания,
Екипът на Rozi's Luxury Dog Hotel
  `
}

function generateCancellationEmail(bookingData: any) {
  return generateStatusUpdateEmail({ ...bookingData, status: 'cancelled' })
}

function generateCancellationEmailText(bookingData: any) {
  return generateStatusUpdateEmailText({ ...bookingData, status: 'cancelled' })
}

function generateDefaultEmail(bookingData: any) {
  return generateConfirmationEmail(bookingData)
}

function generateDefaultEmailText(bookingData: any) {
  return generateConfirmationEmailText(bookingData)
}
