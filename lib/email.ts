import nodemailer from 'nodemailer'

// Create transporter with your email configuration
export const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })
}

export const sendEmail = async (options: {
  to: string | string[]
  subject: string
  html: string
  from?: string
}) => {
  const transporter = createTransporter()
  
  const mailOptions = {
    from: options.from || process.env.SMTP_FROM || 'Rozi\'s Luxury Dog Hotel <noreply@rozi-dog-hotel.eu>',
    to: typeof options.to === 'string' ? options.to : options.to.join(', '),
    subject: options.subject,
    html: options.html,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error }
  }
}

