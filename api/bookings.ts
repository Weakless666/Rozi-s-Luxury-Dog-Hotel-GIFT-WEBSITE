import { neon } from '@neondatabase/serverless'
import { ApiRequest, ApiResponse } from './types'

export default async function handler(req: ApiRequest, res: ApiResponse) {
  const { method } = req

  try {
    // Connect to NeonDB
    const databaseUrl = process.env.database_url || process.env.DATABASE_URL
    if (!databaseUrl) {
      console.error('No database URL found in environment variables')
      return res.status(500).json({ error: 'Database configuration missing' })
    }
    const sql = neon(databaseUrl)

    // Initialize database table
    await sql`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        owner_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        dog_name VARCHAR(255),
        dog_breed VARCHAR(255),
        dog_age VARCHAR(50),
        check_in DATE,
        check_out DATE,
        services JSONB DEFAULT '[]',
        special_requests TEXT,
        total_price DECIMAL(10,2) NOT NULL,
        number_of_days INTEGER NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `

    switch (method) {
      case 'GET':
        // Get all bookings
        const bookings = await sql`
          SELECT * FROM bookings 
          ORDER BY created_at DESC
        `
        res.status(200).json(bookings)
        break

      case 'POST':
        // Create new booking
        const {
          ownerName,
          email,
          phone,
          dogName,
          dogBreed,
          dogAge,
          checkIn,
          checkOut,
          services,
          specialRequests,
          totalPrice,
          numberOfDays
        } = req.body

        // Validate required fields
        if (!ownerName || !email || !phone || !checkIn || !checkOut || !totalPrice) {
          return res.status(400).json({ error: 'Missing required fields' })
        }

        const [booking] = await sql`
          INSERT INTO bookings (
            owner_name, email, phone, dog_name, dog_breed, dog_age,
            check_in, check_out, services, special_requests,
            total_price, number_of_days, status
          ) VALUES (
            ${ownerName}, ${email}, ${phone}, ${dogName}, ${dogBreed}, ${dogAge},
            ${checkIn}, ${checkOut}, ${JSON.stringify(services || [])}, ${specialRequests},
            ${totalPrice}, ${numberOfDays}, 'pending'
          )
          RETURNING *
        `

        res.status(201).json({
          success: true,
          booking,
          message: 'Резервацията е създадена успешно!'
        })
        break

      case 'PATCH':
        // Update booking status
        const { id, status } = req.body

        if (!id || !status) {
          return res.status(400).json({ error: 'Missing id or status' })
        }

        const [updatedBooking] = await sql`
          UPDATE bookings 
          SET status = ${status}, updated_at = CURRENT_TIMESTAMP
          WHERE id = ${id}
          RETURNING *
        `

        if (!updatedBooking) {
          return res.status(404).json({ error: 'Booking not found' })
        }

        res.status(200).json({
          success: true,
          booking: updatedBooking,
          message: 'Статусът е обновен успешно!'
        })
        break

      case 'DELETE':
        // Delete booking
        const { id: deleteId } = req.body

        if (!deleteId) {
          return res.status(400).json({ error: 'Missing booking id' })
        }

        const [deletedBooking] = await sql`
          DELETE FROM bookings 
          WHERE id = ${deleteId}
          RETURNING *
        `

        if (!deletedBooking) {
          return res.status(404).json({ error: 'Booking not found' })
        }

        res.status(200).json({
          success: true,
          message: 'Резервацията е изтрита успешно!'
        })
        break

      default:
        if (res.setHeader) {
          res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE'])
        }
        res.status(405).json({ error: `Method ${method} not allowed` })
    }

  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Database error occurred' })
  }
}