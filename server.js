import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'
import { neon } from '@neondatabase/serverless'
import nodemailer from 'nodemailer'
import formidable from 'formidable'

const app = express()
const PORT = 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// API Routes
app.post('/api/bookings', async (req, res) => {
  try {
    const sql = neon(process.env.database_url!)
    
    if (!sql) {
      return res.status(500).json({ error: 'Database connection failed' })
    }

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

    // Insert booking into database
    const result = await sql`
      INSERT INTO bookings (
        owner_name, email, phone, dog_name, dog_breed, dog_age,
        check_in, check_out, services, special_requests, total_price, number_of_days,
        status, created_at
      ) VALUES (
        ${ownerName}, ${email}, ${phone}, ${dogName}, ${dogBreed}, ${dogAge},
        ${checkIn}, ${checkOut}, ${JSON.stringify(services)}, ${specialRequests}, 
        ${totalPrice}, ${numberOfDays}, 'pending', NOW()
      ) RETURNING *
    `

    res.status(200).json({ 
      success: true, 
      message: 'Резервацията е изпратена успешно!',
      booking: result[0]
    })

  } catch (error) {
    console.error('Booking error:', error)
    res.status(500).json({ error: 'Грешка при създаване на резервацията' })
  }
})

app.get('/api/gallery', async (req, res) => {
  try {
    const imageDir = './public/images'
    
    if (!fs.existsSync(imageDir)) {
      return res.status(200).json([])
    }

    const files = fs.readdirSync(imageDir)
    const images = []

    for (const file of files) {
      if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) continue

      const match = file.match(/^([a-z]+)(\d+)\./)
      if (match) {
        const [, categoryPrefix, number] = match
        const category = categoryPrefix === 'dog' ? 'dogs' :
                        categoryPrefix === 'room' ? 'rooms' :
                        categoryPrefix === 'grooming' ? 'grooming' :
                        categoryPrefix === 'activity' ? 'activities' :
                        categoryPrefix === 'food' ? 'food' :
                        categoryPrefix === 'special' ? 'special-moments' : 'other'

        images.push({
          id: Date.now() + parseInt(number),
          title: `${categoryPrefix}${number}`,
          description: `Uploaded image`,
          category: category,
          type: 'image',
          likes: 0,
          date: fs.statSync(path.join(imageDir, file)).mtime.toISOString().split('T')[0],
          imageUrl: `/images/${file}`,
          fileName: file
        })
      }
    }

    images.sort((a, b) => a.fileName.localeCompare(b.fileName))
    res.status(200).json(images)

  } catch (error) {
    console.error('Gallery error:', error)
    res.status(500).json({ error: 'Грешка при зареждане на галерията' })
  }
})

app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, bookingData, type } = req.body

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    let htmlContent = ''
    if (type === 'confirmation' && bookingData) {
      htmlContent = `
        <h2>Потвърждение на резервация</h2>
        <p>Здравейте ${bookingData.owner_name},</p>
        <p>Вашата резервация е потвърдена успешно!</p>
        <h3>Детайли на резервацията:</h3>
        <ul>
          <li>Куче: ${bookingData.dog_name}</li>
          <li>Период: ${bookingData.check_in} - ${bookingData.check_out}</li>
          <li>Обща цена: ${bookingData.total_price}лв</li>
        </ul>
        <p>Ще се свържем с вас скоро за допълнителни детайли.</p>
        <p>С уважение,<br>Екипът на Rozi's Luxury Dog Hotel</p>
      `
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: htmlContent
    })

    res.status(200).json({ success: true, message: 'Имейлът е изпратен успешно!' })

  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ error: 'Грешка при изпращане на имейла' })
  }
})

// Adopt endpoints
app.get('/api/adopt', async (req, res) => {
  try {
    const sql = neon(process.env.database_url!)
    
    if (!sql) {
      return res.status(500).json({ error: 'Database connection failed' })
    }

    const dogs = await sql`
      SELECT * FROM adopt_dogs 
      WHERE is_adopted = false 
      ORDER BY date_added DESC
    `
    res.status(200).json(dogs)

  } catch (error) {
    console.error('Adopt GET error:', error)
    res.status(500).json({ error: 'Грешка при зареждане на кучетата' })
  }
})

app.post('/api/adopt', async (req, res) => {
  try {
    const sql = neon(process.env.database_url!)
    
    if (!sql) {
      return res.status(500).json({ error: 'Database connection failed' })
    }

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

  } catch (error) {
    console.error('Adopt POST error:', error)
    res.status(500).json({ error: 'Грешка при добавяне на кученцето' })
  }
})

app.post('/api/adopt-upload', async (req, res) => {
  try {
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

    // Validate required fields
    if (!name || !breed || !age || !gender || !size || !description) {
      return res.status(400).json({ 
        error: 'Липсват задължителни полета',
        required: ['name', 'breed', 'age', 'gender', 'size', 'description']
      })
    }

    const dogData = {
      id: Date.now(),
      name,
      breed,
      age,
      gender,
      size,
      description,
      medicalInfo: medicalInfo || 'Информацията ще бъде добавена',
      personality: personality || ['Дружелюбен'],
      images: images || ['/images/dog1.jpg'],
      contactInfo: contactInfo || {
        phone: '+359 888 123 456',
        email: 'adopt@rozis-dog-hotel.com',
        location: 'Сапарева баня'
      },
      dateAdded: new Date().toISOString().split('T')[0],
      isAdopted: false
    }

    res.status(200).json({ 
      success: true, 
      message: 'Кученцето е добавено успешно за осиновяване!',
      dog: dogData,
      note: 'Функционалността за качване на снимки ще бъде добавена скоро'
    })

  } catch (error) {
    console.error('Adopt upload error:', error)
    res.status(500).json({ error: 'Грешка при добавяне на кученцето' })
  }
})

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`)
})
