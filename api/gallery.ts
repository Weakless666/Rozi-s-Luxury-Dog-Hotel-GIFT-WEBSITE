import fs from 'fs'
import path from 'path'
import { ApiRequest, ApiResponse } from './types'

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const imageDir = './public/images'
    
    if (!fs.existsSync(imageDir)) {
      return res.status(200).json([])
    }

    const files = fs.readdirSync(imageDir)
    const images = []

    for (const file of files) {
      // Skip non-image files
      if (!/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) continue

      // Extract category and number from filename
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
          id: Date.now() + parseInt(number), // Unique ID
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

    // Sort by filename
    images.sort((a, b) => a.fileName.localeCompare(b.fileName))

    res.status(200).json(images)

  } catch (error) {
    console.error('Gallery error:', error)
    res.status(500).json({ error: 'Грешка при зареждане на галерията' })
  }
}
