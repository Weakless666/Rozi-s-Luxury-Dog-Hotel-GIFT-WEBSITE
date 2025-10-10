import { neon } from '@neondatabase/serverless'
import { ApiRequest, ApiResponse } from './types'

export default async function handler(req: ApiRequest, res: ApiResponse) {
  const { method } = req

  try {
    const sql = neon(process.env.database_url!)
    
    if (!sql) {
      return res.status(500).json({ error: 'Database connection failed' })
    }

    switch (method) {
      case 'GET':
        // Get all dogs for adoption
        const dogs = await sql`
          SELECT * FROM adopt_dogs 
          WHERE is_adopted = false 
          ORDER BY date_added DESC
        `
        res.status(200).json(dogs)
        break

      case 'POST':
        // Add new dog for adoption
        const {
          name,
          breed,
          age,
          gender,
          size,
          description,
          medicalInfo,
          personality,
          images,
          contactInfo
        } = req.body

        const result = await sql`
          INSERT INTO adopt_dogs (
            name, breed, age, gender, size, description, medical_info, 
            personality, images, contact_info, date_added, is_adopted
          ) VALUES (
            ${name}, ${breed}, ${age}, ${gender}, ${size}, ${description}, 
            ${medicalInfo}, ${JSON.stringify(personality)}, ${JSON.stringify(images)}, 
            ${JSON.stringify(contactInfo)}, NOW(), false
          ) RETURNING *
        `

        res.status(201).json({ 
          success: true, 
          message: 'Кученцето е добавено успешно за осиновяване!',
          dog: result[0]
        })
        break

      case 'PUT':
        // Update dog status (mark as adopted)
        const { dogId, isAdopted } = req.body
        
        await sql`
          UPDATE adopt_dogs 
          SET is_adopted = ${isAdopted}, adopted_date = ${isAdopted ? 'NOW()' : null}
          WHERE id = ${dogId}
        `

        res.status(200).json({ 
          success: true, 
          message: isAdopted ? 'Кученцето е осиновено!' : 'Статусът е обновен!'
        })
        break

      case 'DELETE':
        // Remove dog from adoption list
        const { id } = req.body
        
        await sql`
          DELETE FROM adopt_dogs 
          WHERE id = ${id}
        `

        res.status(200).json({ 
          success: true, 
          message: 'Кученцето е премахнато от списъка за осиновяване!'
        })
        break

      default:
        if (res.setHeader) {
          res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        }
        res.status(405).json({ error: `Method ${method} not allowed` })
    }

  } catch (error) {
    console.error('Adopt API error:', error)
    res.status(500).json({ error: 'Database error occurred' })
  }
}
