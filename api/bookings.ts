import { NextApiRequest, NextApiResponse } from 'next'
import { Pool } from 'pg'

// Create connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

// Initialize database table
async function initDatabase() {
  try {
    const client = await pool.connect()
    
    // Create bookings table
    await client.query(`
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
    `)
    
    // Create index for better performance
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(email);
      CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
      CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at);
    `)
    
    client.release()
  } catch (error) {
    console.error('Database initialization error:', error)
  }
}

// Initialize database on first load
initDatabase()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  try {
    const client = await pool.connect()

    switch (method) {
      case 'GET':
        // Get all bookings
        const result = await client.query(`
          SELECT * FROM bookings 
          ORDER BY created_at DESC
        `)
        res.status(200).json(result.rows)
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

        const insertResult = await client.query(`
          INSERT INTO bookings (
            owner_name, email, phone, dog_name, dog_breed, dog_age,
            check_in, check_out, services, special_requests,
            total_price, number_of_days, status
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
          RETURNING *
        `, [
          ownerName, email, phone, dogName, dogBreed, dogAge,
          checkIn, checkOut, JSON.stringify(services || []), specialRequests,
          totalPrice, numberOfDays, 'pending'
        ])

        res.status(201).json({
          success: true,
          booking: insertResult.rows[0],
          message: 'Резервацията е създадена успешно!'
        })
        break

      case 'PATCH':
        // Update booking status
        const { id, status } = req.body

        if (!id || !status) {
          return res.status(400).json({ error: 'Missing id or status' })
        }

        const updateResult = await client.query(`
          UPDATE bookings 
          SET status = $1, updated_at = CURRENT_TIMESTAMP
          WHERE id = $2
          RETURNING *
        `, [status, id])

        if (updateResult.rows.length === 0) {
          return res.status(404).json({ error: 'Booking not found' })
        }

        res.status(200).json({
          success: true,
          booking: updateResult.rows[0],
          message: 'Статусът е обновен успешно!'
        })
        break

      case 'DELETE':
        // Delete booking
        const { id: deleteId } = req.body

        if (!deleteId) {
          return res.status(400).json({ error: 'Missing booking id' })
        }

        const deleteResult = await client.query(`
          DELETE FROM bookings 
          WHERE id = $1
          RETURNING *
        `, [deleteId])

        if (deleteResult.rows.length === 0) {
          return res.status(404).json({ error: 'Booking not found' })
        }

        res.status(200).json({
          success: true,
          message: 'Резервацията е изтрита успешно!'
        })
        break

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'DELETE'])
        res.status(405).json({ error: `Method ${method} not allowed` })
    }

    client.release()
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Database error occurred' })
  }
}