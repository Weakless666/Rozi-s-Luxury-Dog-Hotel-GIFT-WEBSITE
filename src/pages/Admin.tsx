import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Upload, X } from 'lucide-react'

type Booking = {
  id: number
  owner_name: string
  email: string
  phone: string
  dog_name: string | null
  dog_breed: string | null
  dog_age: string | null
  check_in: string | null
  check_out: string | null
  services: any
  total: number
  status: string
  created_at: string
}

type UploadedFile = {
  file: File
  preview: string
  category: string
  title: string
}

export default function Admin() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'bookings' | 'gallery' | 'analytics' | 'calendar' | 'customers'>('bookings')
  
  // Gallery management states
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set())
  const [isEditMode, setIsEditMode] = useState(false)
  
  // Gallery upload states
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({})

  const fetchBookings = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/bookings')
      const data = await res.json()
      setBookings(data)
    } catch (e: any) {
      setError('Грешка при зареждане на резервации')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: number, status: string) => {
    await fetch('/api/bookings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    await fetchBookings()
  }

  // Gallery upload functions
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    )
    
    handleFiles(files)
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
  }

  const handleFiles = (files: File[]) => {
    const newFiles: UploadedFile[] = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      category: 'dogs', // default category
      title: file.name.replace(/\.[^/.]+$/, '') // remove extension
    }))
    
    setUploadedFiles(prev => [...prev, ...newFiles])
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => {
      const newFiles = [...prev]
      URL.revokeObjectURL(newFiles[index].preview)
      newFiles.splice(index, 1)
      return newFiles
    })
  }

  const updateFileInfo = (index: number, field: 'category' | 'title', value: string) => {
    setUploadedFiles(prev => prev.map((file, i) => 
      i === index ? { ...file, [field]: value } : file
    ))
  }

  const uploadFiles = async () => {
    if (uploadedFiles.length === 0) return
    
    setUploading(true)
    
    try {
      const formData = new FormData()
      
      // Add all files and their metadata
      uploadedFiles.forEach((fileData) => {
        formData.append('file', fileData.file)
        formData.append('category', fileData.category)
        formData.append('title', fileData.title)
      })
      
      // Simulate upload progress
      for (let progress = 0; progress <= 100; progress += 10) {
        uploadedFiles.forEach(fileData => {
          setUploadProgress(prev => ({ ...prev, [fileData.file.name]: progress }))
        })
        await new Promise(resolve => setTimeout(resolve, 50))
      }
      
      // Upload to server
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) {
        throw new Error('Upload failed')
      }
      
      const result = await response.json()
      
      // Clear uploaded files after successful upload
      uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview))
      setUploadedFiles([])
      setUploadProgress({})
      
      // Reload gallery images to show new uploads
      loadGalleryImages()
      
      alert(`Снимките са качени успешно на сървъра!\n\n${result.message}\n\nСега всички посетители ще могат да ги видят в галерията!`)
      
    } catch (error) {
      console.error('Upload error:', error)
      alert('Грешка при качване на снимките. Опитай отново.')
    } finally {
      setUploading(false)
    }
  }

  // Gallery management functions
  const loadGalleryImages = async () => {
    const staticImages = [
      // DOGS - Кучета
      { id: 1, title: 'Щастлив момент с Боби', category: 'dogs', imageUrl: '/images/dog1.png' },
      { id: 2, title: 'Щастлив момент с Макс', category: 'dogs', imageUrl: '/images/dog2.png' },
      { id: 3, title: 'Игри с топка', category: 'dogs', imageUrl: '/images/dog3.png' },
      { id: 4, title: 'Релакс след игра', category: 'dogs', imageUrl: '/images/dog4.png' },
      { id: 5, title: 'Щастливи кучета заедно', category: 'dogs', imageUrl: '/images/dog5.png' },
      { id: 6, title: 'Игри в градината', category: 'dogs', imageUrl: '/images/dog6.png' },
      { id: 7, title: 'Весели моменти', category: 'dogs', imageUrl: '/images/dog7.png' },
      { id: 8, title: 'Игри с играчки', category: 'dogs', imageUrl: '/images/dog8.png' },
      { id: 9, title: 'Релакс в двора', category: 'dogs', imageUrl: '/images/dog9.png' },
      { id: 10, title: 'Активни игри', category: 'dogs', imageUrl: '/images/dog10.png' },
      { id: 11, title: 'Щастливи моменти', category: 'dogs', imageUrl: '/images/dog11.png' },
      { id: 12, title: 'Игри в стаята', category: 'dogs', imageUrl: '/images/dog12.png' },
      { id: 13, title: 'Специални моменти', category: 'dogs', imageUrl: '/images/dog13.png' },
      
      // ROOMS - Стаи
      { id: 14, title: 'Луксозна стая', category: 'rooms', imageUrl: '/images/room1.png' },
      { id: 15, title: 'Релакс в стаята', category: 'rooms', imageUrl: '/images/room2.png' },
      
      // ACTIVITIES - Дейности
      { id: 23, title: 'Игри в двора', category: 'activities', imageUrl: '/images/activity1.png' },
      { id: 24, title: 'Тренировка', category: 'activities', imageUrl: '/images/activity2.png' },
      { id: 25, title: 'Социализация', category: 'activities', imageUrl: '/images/activity3.png' },
      { id: 26, title: 'Активни игри', category: 'activities', imageUrl: '/images/activity4.png' },
      { id: 27, title: 'Игри с играчки', category: 'activities', imageUrl: '/images/activity5.png' },
      { id: 28, title: 'Релакс в двора', category: 'activities', imageUrl: '/images/activity6.png' },
      { id: 29, title: 'Весели моменти', category: 'activities', imageUrl: '/images/activity7.png' },
      { id: 30, title: 'Игри в градината', category: 'activities', imageUrl: '/images/activity8.png' },
      { id: 31, title: 'Активни упражнения', category: 'activities', imageUrl: '/images/activity9.png' },
      { id: 32, title: 'Игри в стаята', category: 'activities', imageUrl: '/images/activity10.png' },
      { id: 33, title: 'Специални моменти', category: 'activities', imageUrl: '/images/activity11.png' },
      { id: 34, title: 'Щастливи игри', category: 'activities', imageUrl: '/images/activity12.png' },
    ]
    
    // Try to load uploaded images from server
    try {
      const response = await fetch('/api/gallery')
      if (response.ok) {
        const serverImages = await response.json()
        setGalleryImages([...staticImages, ...serverImages])
      } else {
        // Fallback to localStorage
        const uploadedImages = JSON.parse(localStorage.getItem('galleryImages') || '[]')
        setGalleryImages([...staticImages, ...uploadedImages])
      }
    } catch (error) {
      // Fallback to localStorage
      const uploadedImages = JSON.parse(localStorage.getItem('galleryImages') || '[]')
      setGalleryImages([...staticImages, ...uploadedImages])
    }
  }

  const toggleImageSelection = (imageId: number) => {
    const newSelected = new Set(selectedImages)
    if (newSelected.has(imageId)) {
      newSelected.delete(imageId)
    } else {
      newSelected.add(imageId)
    }
    setSelectedImages(newSelected)
  }

  const deleteSelectedImages = () => {
    if (selectedImages.size === 0) return
    
    const newImages = galleryImages.filter(img => !selectedImages.has(img.id))
    setGalleryImages(newImages)
    
    // Update localStorage for uploaded images
    const uploadedImages = JSON.parse(localStorage.getItem('galleryImages') || '[]')
    const filteredUploaded = uploadedImages.filter((img: any) => !selectedImages.has(img.id))
    localStorage.setItem('galleryImages', JSON.stringify(filteredUploaded))
    
    setSelectedImages(new Set())
    setIsEditMode(false)
    alert(`${selectedImages.size} снимки са изтрити!`)
  }

  const moveSelectedImages = (newCategory: string) => {
    if (selectedImages.size === 0) return
    
    const newImages = galleryImages.map(img => 
      selectedImages.has(img.id) ? { ...img, category: newCategory } : img
    )
    setGalleryImages(newImages)
    
    // Update localStorage for uploaded images
    const uploadedImages = JSON.parse(localStorage.getItem('galleryImages') || '[]')
    const updatedUploaded = uploadedImages.map((img: any) => 
      selectedImages.has(img.id) ? { ...img, category: newCategory } : img
    )
    localStorage.setItem('galleryImages', JSON.stringify(updatedUploaded))
    
    setSelectedImages(new Set())
    setIsEditMode(false)
    alert(`${selectedImages.size} снимки са преместени в категория "${newCategory}"!`)
  }

  useEffect(() => {
    fetchBookings()
    loadGalleryImages()
  }, [])

  useEffect(() => {
    // Cleanup preview URLs when component unmounts
    return () => {
      uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview))
    }
  }, [uploadedFiles])

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-3xl font-elegant font-semibold mb-6">Админ панел</h1>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'bookings'
                ? 'bg-soft-pink text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            📋 Резервации
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'gallery'
                ? 'bg-soft-pink text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🖼️ Галерия
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'analytics'
                ? 'bg-soft-pink text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            📊 Аналитика
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'calendar'
                ? 'bg-soft-pink text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            📅 Календар
          </button>
          <button
            onClick={() => setActiveTab('customers')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'customers'
                ? 'bg-soft-pink text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            👥 Клиенти
          </button>
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div>
            {loading && <p>Зареждане...</p>}
            {error && <p className="text-red-600">{error}</p>}
            <div className="overflow-x-auto bg-white/90 backdrop-blur-sm rounded-xl shadow">
              <table className="min-w-full text-sm">
                <thead className="bg-soft-pink/20">
                  <tr>
                    <th className="p-3 text-left">#</th>
                    <th className="p-3 text-left">Клиент</th>
                    <th className="p-3 text-left">Контакт</th>
                    <th className="p-3 text-left">Период</th>
                    <th className="p-3 text-left">Сума</th>
                    <th className="p-3 text-left">Статус</th>
                    <th className="p-3 text-left">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(b => (
                    <tr key={b.id} className="border-t">
                      <td className="p-3">{b.id}</td>
                      <td className="p-3">{b.owner_name}<div className="text-gray-500">{b.dog_name || '-'} ({b.dog_breed || '-'})</div></td>
                      <td className="p-3">{b.email}<div className="text-gray-500">{b.phone}</div></td>
                      <td className="p-3">{b.check_in || '-'} — {b.check_out || '-'}</td>
                      <td className="p-3">{b.total} лв</td>
                      <td className="p-3">{b.status}</td>
                      <td className="p-3 space-x-2">
                        <button className="px-3 py-1 rounded bg-green-600 text-white" onClick={() => updateStatus(b.id, 'confirmed')}>Потвърди</button>
                        <button className="px-3 py-1 rounded bg-yellow-600 text-white" onClick={() => updateStatus(b.id, 'pending')}>Чака</button>
                        <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => updateStatus(b.id, 'cancelled')}>Откажи</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            {/* Gallery Management Header */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-elegant font-semibold">Управление на галерията</h2>
                <div className="flex space-x-2">
                  {!isEditMode ? (
                    <button
                      onClick={() => setIsEditMode(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      ✏️ Редактирай
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsEditMode(false)
                          setSelectedImages(new Set())
                        }}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        ✖️ Отказ
                      </button>
                      {selectedImages.size > 0 && (
                        <>
                          <button
                            onClick={deleteSelectedImages}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                          >
                            🗑️ Изтрий ({selectedImages.size})
                          </button>
                          <select
                            onChange={(e) => moveSelectedImages(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-lg"
                            defaultValue=""
                          >
                            <option value="" disabled>Премести в...</option>
                            <option value="dogs">🐕 Кучета</option>
                            <option value="rooms">🏠 Стаи</option>
                            <option value="grooming">✂️ Груминг</option>
                            <option value="activities">🎾 Дейности</option>
                            <option value="food">🍽️ Хранене</option>
                            <option value="special-moments">🎉 Специални моменти</option>
                          </select>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
              
              {isEditMode && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-yellow-800">
                    <strong>Режим редактиране:</strong> Кликни на снимките за да ги избереш, след което можеш да ги изтриеш или преместиш в друга категория.
                  </p>
                </div>
              )}
            </div>

            {/* Gallery Grid */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Всички снимки ({galleryImages.length})</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className={`relative group cursor-pointer rounded-lg overflow-hidden ${
                      isEditMode ? 'cursor-pointer' : ''
                    } ${
                      selectedImages.has(image.id) ? 'ring-4 ring-blue-500' : ''
                    }`}
                    onClick={() => isEditMode && toggleImageSelection(image.id)}
                  >
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-24 object-cover"
                    />
                    
                    {/* Selection indicator */}
                    {isEditMode && (
                      <div className="absolute top-2 right-2">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedImages.has(image.id)
                            ? 'bg-blue-500 border-blue-500'
                            : 'bg-white border-gray-300'
                        }`}>
                          {selectedImages.has(image.id) && (
                            <span className="text-white text-xs">✓</span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Category badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs p-1 text-center">
                      {image.category === 'dogs' ? '🐕' :
                       image.category === 'rooms' ? '🏠' :
                       image.category === 'grooming' ? '✂️' :
                       image.category === 'activities' ? '🎾' :
                       image.category === 'food' ? '🍽️' :
                       image.category === 'special-moments' ? '🎉' : '📷'}
                    </div>
                    
                    {/* Title overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end">
                      <p className="text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {image.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <h2 className="text-2xl font-elegant font-semibold mb-4">Качване на снимки</h2>
              
              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-500 text-xl">ℹ️</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">Как работи качването:</h4>
                    <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                      <li><strong>Снимай директно:</strong> Кликни "📸 Снимай кучето" за директно снимане</li>
                      <li><strong>Или довлачи:</strong> Довлачи снимки от галерията или избери файлове</li>
                      <li>Редактирай заглавията и категориите</li>
                      <li>Кликни "Качи на сървъра"</li>
                      <li>Снимките се запазват на Vercel и се виждат от всички!</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              {/* Camera and Drag & Drop Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Camera Section */}
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-green-500 text-4xl mb-4">📷</div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Снимай директно</h3>
                  <p className="text-sm text-green-700 mb-4">
                    Снимай кучето с камерата и го качи веднага
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileInput}
                    className="hidden"
                    id="camera-input"
                  />
                  <label
                    htmlFor="camera-input"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium cursor-pointer inline-block transition-colors"
                  >
                    📸 Снимай кучето
                  </label>
                </div>

                {/* Drag & Drop Section */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors ${
                    isDragOver
                      ? 'border-soft-pink bg-soft-pink/10'
                      : 'border-gray-300 hover:border-soft-pink/50'
                  }`}
                >
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Довлачи файлове</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Довлачи снимки от галерията или избери файлове
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-input"
                  />
                  <label
                    htmlFor="file-input"
                    className="btn-primary cursor-pointer inline-block text-sm"
                  >
                    Избери снимки
                  </label>
                </div>
              </div>

              {/* Uploaded Files Preview */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Снимки за качване ({uploadedFiles.length})</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {uploadedFiles.map((fileData, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            src={fileData.preview}
                            alt={fileData.title}
                            className="w-full h-32 object-cover"
                          />
                          <button
                            onClick={() => removeFile(index)}
                            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="p-3 space-y-2">
                          <input
                            type="text"
                            value={fileData.title}
                            onChange={(e) => updateFileInfo(index, 'title', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                            placeholder="Заглавие на снимката"
                          />
                          
                          <select
                            value={fileData.category}
                            onChange={(e) => updateFileInfo(index, 'category', e.target.value)}
                            className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                          >
                            <option value="dogs">🐕 Кучета</option>
                            <option value="rooms">🏠 Стаи</option>
                            <option value="grooming">✂️ Груминг</option>
                            <option value="activities">🎾 Дейности</option>
                            <option value="food">🍽️ Хранене</option>
                            <option value="special-moments">🎉 Специални моменти</option>
                          </select>
                          
                          {uploadProgress[fileData.file.name] !== undefined && (
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-soft-pink h-2 rounded-full transition-all duration-300"
                                style={{ width: `${uploadProgress[fileData.file.name]}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-end space-x-4">
                    <button
                      onClick={() => {
                        uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview))
                        setUploadedFiles([])
                      }}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Изчисти всички
                    </button>
                    <button
                      onClick={uploadFiles}
                      disabled={uploading || uploadedFiles.length === 0}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {uploading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Качва се...</span>
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4" />
                          <span>Качи на сървъра</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Общо резервации</p>
                    <p className="text-3xl font-bold text-luxury-purple">{bookings.length}</p>
                  </div>
                  <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📋</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Потвърдени</p>
                    <p className="text-3xl font-bold text-green-600">
                      {bookings.filter(b => b.status === 'confirmed').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Чакащи</p>
                    <p className="text-3xl font-bold text-yellow-600">
                      {bookings.filter(b => b.status === 'pending').length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⏳</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Общ приход</p>
                    <p className="text-3xl font-bold text-premium-gold">
                      {bookings.reduce((sum, b) => sum + b.total, 0)}лв
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-premium-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Последна активност</h3>
              <div className="space-y-3">
                {bookings.slice(0, 5).map(booking => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{booking.owner_name}</p>
                      <p className="text-sm text-gray-600">{booking.dog_name} • {booking.total}лв</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {booking.status === 'confirmed' ? 'Потвърдена' :
                         booking.status === 'pending' ? 'Чакаща' : 'Отказана'}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(booking.created_at).toLocaleDateString('bg-BG')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Revenue Chart Placeholder */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Месечен приход</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">📈 Графика ще се покаже тук</p>
              </div>
            </div>
          </div>
        )}

        {/* Calendar Tab */}
        {activeTab === 'calendar' && (
          <div className="space-y-6">
            {/* Calendar Header */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Календар на резервациите</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">📅 Месец</button>
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">📋 Седмица</button>
                  <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">📝 Ден</button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map(day => (
                  <div key={day} className="p-2 text-center font-semibold text-gray-600 bg-gray-100 rounded">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const day = i + 1
                  const hasBooking = bookings.some(b => {
                    const checkIn = new Date(b.check_in || '')
                    return checkIn.getDate() === day
                  })
                  
                  return (
                    <div
                      key={i}
                      className={`p-2 h-16 border rounded-lg cursor-pointer hover:bg-gray-50 ${
                        hasBooking ? 'bg-soft-pink/20 border-soft-pink' : 'bg-white border-gray-200'
                      }`}
                    >
                      <div className="text-sm font-medium">{day <= 31 ? day : ''}</div>
                      {hasBooking && (
                        <div className="text-xs text-soft-pink mt-1">●</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Предстоящи резервации</h3>
              <div className="space-y-3">
                {bookings
                  .filter(b => b.status === 'confirmed')
                  .slice(0, 5)
                  .map(booking => (
                    <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{booking.owner_name}</p>
                        <p className="text-sm text-gray-600">{booking.dog_name} • {booking.check_in} - {booking.check_out}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-luxury-purple">{booking.total}лв</p>
                        <p className="text-xs text-gray-500">
                          {Math.ceil((new Date(booking.check_out || '').getTime() - new Date(booking.check_in || '').getTime()) / (1000 * 60 * 60 * 24))} дни
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === 'customers' && (
          <div className="space-y-6">
            {/* Customer Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Общо клиенти</p>
                    <p className="text-3xl font-bold text-luxury-purple">
                      {new Set(bookings.map(b => b.email)).size}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👥</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Върнали се клиенти</p>
                    <p className="text-3xl font-bold text-green-600">
                      {bookings.filter((booking, index, self) => 
                        self.findIndex(b => b.email === booking.email) !== index
                      ).length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔄</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Средна стойност</p>
                    <p className="text-3xl font-bold text-premium-gold">
                      {Math.round(bookings.reduce((sum, b) => sum + b.total, 0) / bookings.length) || 0}лв
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-premium-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer List */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Списък с клиенти</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-soft-pink/20">
                    <tr>
                      <th className="p-3 text-left">Клиент</th>
                      <th className="p-3 text-left">Контакт</th>
                      <th className="p-3 text-left">Кучета</th>
                      <th className="p-3 text-left">Резервации</th>
                      <th className="p-3 text-left">Общо платено</th>
                      <th className="p-3 text-left">Последна визита</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from(new Set(bookings.map(b => b.email))).map(email => {
                      const customerBookings = bookings.filter(b => b.email === email)
                      const customer = customerBookings[0]
                      const totalSpent = customerBookings.reduce((sum, b) => sum + b.total, 0)
                      const lastVisit = new Date(Math.max(...customerBookings.map(b => new Date(b.created_at).getTime())))
                      
                      return (
                        <tr key={email} className="border-t">
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{customer.owner_name}</p>
                              <p className="text-xs text-gray-500">{customer.email}</p>
                            </div>
                          </td>
                          <td className="p-3">{customer.phone}</td>
                          <td className="p-3">
                            {Array.from(new Set(customerBookings.map(b => b.dog_name))).join(', ')}
                          </td>
                          <td className="p-3">
                            <span className="px-2 py-1 bg-luxury-purple/20 text-luxury-purple rounded-full text-xs">
                              {customerBookings.length}
                            </span>
                          </td>
                          <td className="p-3 font-semibold text-premium-gold">{totalSpent}лв</td>
                          <td className="p-3 text-sm text-gray-600">
                            {lastVisit.toLocaleDateString('bg-BG')}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top Customers */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4">Най-добри клиенти</h3>
              <div className="space-y-3">
                {Array.from(new Set(bookings.map(b => b.email)))
                  .map(email => {
                    const customerBookings = bookings.filter(b => b.email === email)
                    const totalSpent = customerBookings.reduce((sum, b) => sum + b.total, 0)
                    return {
                      email,
                      name: customerBookings[0].owner_name,
                      totalSpent,
                      bookings: customerBookings.length
                    }
                  })
                  .sort((a, b) => b.totalSpent - a.totalSpent)
                  .slice(0, 5)
                  .map((customer, index) => (
                    <div key={customer.email} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-premium-gold rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-gray-600">{customer.bookings} резервации</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-premium-gold">{customer.totalSpent}лв</p>
                        <p className="text-xs text-gray-500">общо платено</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


