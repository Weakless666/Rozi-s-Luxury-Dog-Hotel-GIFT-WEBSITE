import { ApiRequest, ApiResponse } from './types'

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

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

    // This is a placeholder for the actual upload functionality
    // In production, you would:
    // 1. Save images to file system or cloud storage
    // 2. Insert dog data into database
    // 3. Send notification emails

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
}
