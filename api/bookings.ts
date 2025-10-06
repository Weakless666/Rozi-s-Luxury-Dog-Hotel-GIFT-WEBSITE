import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { pool, ensureSchema } from '../src/server/db'

const required = (v?: string) => (v && v.trim().length > 0)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await ensureSchema()

    if (req.method === 'POST') {
      const {
        ownerName,
        email,
        phone,
        dogName,
        dogBreed,
        dogAge,
        checkIn,
        checkOut,
        services = [],
        total = 0,
      } = req.body || {}

      if (!required(ownerName) || !required(email) || !required(phone)) {
        return res.status(400).json({ error: 'Missing required fields' })
      }

      const insert = await pool.query(
        `INSERT INTO bookings (
          owner_name,email,phone,dog_name,dog_breed,dog_age,check_in,check_out,services,total
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id, created_at`,
        [ownerName, email, phone, dogName, dogBreed, dogAge, checkIn, checkOut, JSON.stringify(services), total]
      )
      const id = insert.rows[0].id as number

      // Email notifications
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.NOTIFY_TO) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: false,
          auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        })

        const subject = `Нова резервация #${id} - Rozi's Luxury Dog Hotel`
        const text = `Нова резервация:\n\nКлиент: ${ownerName}\nИмейл: ${email}\nТелефон: ${phone}\nКуче: ${dogName || '-'} (${dogBreed || '-'}, ${dogAge || '-'})\nПериод: ${checkIn} - ${checkOut}\nУслуги: ${services.join(', ') || '-'}\nОбщо: ${total} лв\n\nid: ${id}`

        await transporter.sendMail({
          from: process.env.FROM_EMAIL || process.env.SMTP_USER,
          to: process.env.NOTIFY_TO,
          subject,
          text,
        })

        if (process.env.SEND_CLIENT_EMAIL === 'true') {
          await transporter.sendMail({
            from: process.env.FROM_EMAIL || process.env.SMTP_USER,
            to: email,
            subject: 'Потвърждение за заявка – Rozi\'s Luxury Dog Hotel',
            text: `Благодарим за заявката! Номер: #${id}. Ще се свържем с вас за потвърждение.`,
          })
        }
      }

      return res.status(201).json({ id })
    }

    if (req.method === 'GET') {
      const result = await pool.query('SELECT * FROM bookings ORDER BY created_at DESC LIMIT 200')
      return res.status(200).json(result.rows)
    }

    if (req.method === 'PATCH') {
      const { id, status } = req.body || {}
      if (!id || !status) return res.status(400).json({ error: 'Missing id/status' })
      await pool.query('UPDATE bookings SET status=$1 WHERE id=$2', [status, id])
      return res.status(200).json({ ok: true })
    }

    return res.status(405).json({ error: 'Method Not Allowed' })
  } catch (e: any) {
    console.error(e)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}


