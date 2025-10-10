import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs'
import path from 'path'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const form = formidable({
      uploadDir: './public/images',
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
    })

    const [fields, files] = await form.parse(req)
    
    const uploadedFiles = Array.isArray(files.file) ? files.file : [files.file]
    const categories = Array.isArray(fields.category) ? fields.category : [fields.category]
    const titles = Array.isArray(fields.title) ? fields.title : [fields.title]

    const results = []

    for (let i = 0; i < uploadedFiles.length; i++) {
      const file = uploadedFiles[i]
      const category = categories[i] || 'dogs'
      const title = titles[i] || file.originalFilename?.split('.')[0] || 'untitled'

      if (!file) continue

      // Generate unique filename based on category
      const extension = path.extname(file.originalFilename || '')
      const categoryPrefix = category === 'dogs' ? 'dog' : 
                            category === 'rooms' ? 'room' :
                            category === 'grooming' ? 'grooming' :
                            category === 'activities' ? 'activity' :
                            category === 'food' ? 'food' :
                            category === 'special-moments' ? 'special' : 'image'
      
      // Count existing files in category to get next number
      const imageDir = './public/images'
      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true })
      }
      
      const existingFiles = fs.readdirSync(imageDir).filter(f => f.startsWith(categoryPrefix))
      const nextNumber = existingFiles.length + 1
      
      const newFileName = `${categoryPrefix}${nextNumber}${extension}`
      const newPath = path.join(imageDir, newFileName)

      // Rename the uploaded file
      fs.renameSync(file.filepath, newPath)

      results.push({
        id: Date.now() + i,
        title: title,
        description: `Ново добавена снимка`,
        category: category,
        type: 'image',
        likes: 0,
        date: new Date().toISOString().split('T')[0],
        imageUrl: `/images/${newFileName}`,
        fileName: newFileName
      })
    }

    res.status(200).json({ 
      success: true, 
      message: `${results.length} файла са качени успешно`,
      files: results 
    })

  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Грешка при качване на файловете' })
  }
}
