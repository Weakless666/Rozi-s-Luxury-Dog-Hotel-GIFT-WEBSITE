import { ApiRequest, ApiResponse } from './types'

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // This is a placeholder for file upload functionality
    // In production, you would use multer or formidable with proper file handling
    res.status(200).json({ 
      success: true, 
      message: 'File upload endpoint ready',
      note: 'Use Express server for actual file uploads'
    })

  } catch (error) {
    console.error('Upload error:', error)
    res.status(500).json({ error: 'Грешка при качване на файловете' })
  }
}
