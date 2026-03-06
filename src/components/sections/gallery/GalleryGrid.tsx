import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Heart, Play, X } from 'lucide-react'

const GalleryGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedImage, setSelectedImage] = useState<any>(null)

  // Gallery data with organized categories
  // Get images from localStorage (uploaded via admin) and merge with static images
  const getGalleryImages = () => {
    const staticImages = [
    // DOGS - Кучета
    {
      id: 1,
      title: 'Щастлив момент с Боби',
      description: 'Златен ретривър Боби се наслаждава на игрите в двора',
      category: 'dogs',
      type: 'image',
      likes: 24,
      date: '2024-01-15',
      imageUrl: '/images/dog1.png'
    },
    {
      id: 2,
      title: 'Щастлив момент с Макс',
      description: 'Златен ретривър Макс се наслаждава на игрите',
      category: 'dogs',
      type: 'image',
      likes: 28,
      date: '2024-01-14',
      imageUrl: '/images/dog2.png'
    },
    {
      id: 3,
      title: 'Игри с топка',
      description: 'Активни игри с топка в двора',
      category: 'dogs',
      type: 'image',
      likes: 33,
      date: '2024-01-13',
      imageUrl: '/images/dog3.png'
    },
    {
      id: 4,
      title: 'Релакс след игра',
      description: 'Спокойни моменти след активни игри',
      category: 'dogs',
      type: 'image',
      likes: 19,
      date: '2024-01-12',
      imageUrl: '/images/dog4.png'
    },
    {
      id: 5,
      title: 'Щастливи кучета заедно',
      description: 'Социализация и игри между нашите гости',
      category: 'dogs',
      type: 'image',
      likes: 37,
      date: '2024-01-11',
      imageUrl: '/images/dog5.png'
    },
    {
      id: 6,
      title: 'Игри в градината',
      description: 'Кучетата се наслаждават на откритото пространство',
      category: 'dogs',
      type: 'image',
      likes: 31,
      date: '2024-01-10',
      imageUrl: '/images/dog6.png'
    },
    {
      id: 7,
      title: 'Весели моменти',
      description: 'Щастливи кучета в луксозната атмосфера',
      category: 'dogs',
      type: 'image',
      likes: 26,
      date: '2024-01-09',
      imageUrl: '/images/dog7.png'
    },
    {
      id: 8,
      title: 'Игри с играчки',
      description: 'Интерактивни игри с различни играчки',
      category: 'dogs',
      type: 'image',
      likes: 29,
      date: '2024-01-08',
      imageUrl: '/images/dog8.png'
    },
    {
      id: 9,
      title: 'Релакс в двора',
      description: 'Спокойни моменти в красивата градина',
      category: 'dogs',
      type: 'image',
      likes: 22,
      date: '2024-01-07',
      imageUrl: '/images/dog9.png'
    },
    {
      id: 10,
      title: 'Активни игри',
      description: 'Енергични игри за поддържане на здравето',
      category: 'dogs',
      type: 'image',
      likes: 35,
      date: '2024-01-06',
      imageUrl: '/images/dog10.png'
    },
    {
      id: 11,
      title: 'Щастливи моменти',
      description: 'Емоционални моменти с нашите гости',
      category: 'dogs',
      type: 'image',
      likes: 41,
      date: '2024-01-05',
      imageUrl: '/images/dog11.png'
    },
    {
      id: 12,
      title: 'Игри в стаята',
      description: 'Интерактивни игри в луксозната стая',
      category: 'dogs',
      type: 'image',
      likes: 27,
      date: '2024-01-04',
      imageUrl: '/images/dog12.png'
    },
    {
      id: 13,
      title: 'Специални моменти',
      description: 'Уникални моменти с нашите любими гости',
      category: 'dogs',
      type: 'image',
      likes: 38,
      date: '2024-01-03',
      imageUrl: '/images/dog13.png'
    },

    // ROOMS - Стаи
    {
      id: 14,
      title: 'Луксозна стая',
      description: 'VIP стая с всички удобства за най-взискателните гости',
      category: 'rooms',
      type: 'image',
      likes: 18,
      date: '2024-01-14',
      imageUrl: '/images/room1.png'
    },
    {
      id: 15,
      title: 'Релакс в стаята',
      description: 'Спокойни моменти в луксозната атмосфера',
      category: 'rooms',
      type: 'image',
      likes: 16,
      date: '2024-01-10',
      imageUrl: '/images/room2.png'
    },
    {
      id: 18,
      title: 'Модерна спа стая',
      description: 'Спа процедури за релакс',
      category: 'rooms',
      type: 'image',
      likes: 31,
      date: '2023-12-27',
      imageUrl: '/images/spa-room.jpg'
    },

    // ACTIVITIES - Дейности
    {
      id: 23,
      title: 'Игри в двора',
      description: 'Активни игри и упражнения за поддържане на здравето',
      category: 'activities',
      type: 'image',
      likes: 21,
      date: '2024-01-12',
      imageUrl: '/images/activity1.png'
    },
    {
      id: 24,
      title: 'Тренировка',
      description: 'Професионални упражнения с Елена',
      category: 'activities',
      type: 'image',
      likes: 22,
      date: '2024-01-11',
      imageUrl: '/images/activity2.png'
    },
    {
      id: 25,
      title: 'Социализация',
      description: 'Кучетата се учат да играят заедно',
      category: 'activities',
      type: 'image',
      likes: 42,
      date: '2024-01-10',
      imageUrl: '/images/activity3.png'
    },
    {
      id: 26,
      title: 'Активни игри',
      description: 'Енергични игри за поддържане на здравето',
      category: 'activities',
      type: 'image',
      likes: 35,
      date: '2024-01-09',
      imageUrl: '/images/activity4.png'
    },
    {
      id: 27,
      title: 'Игри с играчки',
      description: 'Интерактивни игри с различни играчки',
      category: 'activities',
      type: 'image',
      likes: 29,
      date: '2024-01-08',
      imageUrl: '/images/activity5.png'
    },
    {
      id: 28,
      title: 'Релакс в двора',
      description: 'Спокойни моменти в красивата градина',
      category: 'activities',
      type: 'image',
      likes: 22,
      date: '2024-01-07',
      imageUrl: '/images/activity6.png'
    },
    {
      id: 29,
      title: 'Весели моменти',
      description: 'Щастливи кучета в луксозната атмосфера',
      category: 'activities',
      type: 'image',
      likes: 26,
      date: '2024-01-06',
      imageUrl: '/images/activity7.png'
    },
    {
      id: 30,
      title: 'Игри в градината',
      description: 'Кучетата се наслаждават на откритото пространство',
      category: 'activities',
      type: 'image',
      likes: 31,
      date: '2024-01-05',
      imageUrl: '/images/activity8.png'
    },
    {
      id: 31,
      title: 'Активни упражнения',
      description: 'Професионални упражнения за здравето',
      category: 'activities',
      type: 'image',
      likes: 38,
      date: '2024-01-04',
      imageUrl: '/images/activity9.png'
    },
    {
      id: 32,
      title: 'Игри в стаята',
      description: 'Интерактивни игри в луксозната стая',
      category: 'activities',
      type: 'image',
      likes: 27,
      date: '2024-01-03',
      imageUrl: '/images/activity10.png'
    },
    {
      id: 33,
      title: 'Специални моменти',
      description: 'Уникални моменти с нашите любими гости',
      category: 'activities',
      type: 'image',
      likes: 38,
      date: '2024-01-02',
      imageUrl: '/images/activity11.png'
    },
    {
      id: 34,
      title: 'Щастливи игри',
      description: 'Емоционални моменти с нашите гости',
      category: 'activities',
      type: 'image',
      likes: 41,
      date: '2024-01-01',
      imageUrl: '/images/activity12.png'
    }

  ]

    // Get uploaded images from localStorage
    const uploadedImages = JSON.parse(localStorage.getItem('galleryImages') || '[]')
    
    // Merge static and uploaded images, then filter out grooming-related cards (per client request)
    const merged = [...staticImages, ...uploadedImages]
    return merged.filter((img: { title?: string }) => {
      const t = (img.title || '').toLowerCase()
      return !t.includes('груминг') && !t.includes('прическа')
    })
  }

  const [galleryImages] = useState(getGalleryImages())

  const openModal = (image: any) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-soft-lavender/30 to-light-peach/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Галерия</span> снимки
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Разгледайте нашите най-красиви и емоционални снимки от ежедневния живот в хотела.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover cursor-pointer"
              onClick={() => openModal(image)}
            >
              {/* Real image with fallback */}
              <div className="relative overflow-hidden" style={{ height: '300px' }}>
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to gradient placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-soft-pink/30 via-luxury-purple/30 to-premium-gold/30 flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                              ${image.type === 'video' ? 
                                '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' : 
                                '<svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
                              }
                            </div>
                            <p class="text-white/80 font-medium text-sm">${image.title}</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                
                {/* Simple hover overlay with just expand icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    {image.type === 'video' ? (
                      <Play className="w-6 h-6 text-white ml-1" />
                    ) : (
                      <Heart className="w-6 h-6 text-white" />
                    )}
                  </motion.div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for image preview */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-6xl w-full max-h-[95vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Modal content - just the image */}
              <div className="flex items-center justify-center w-full h-full p-12">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-w-[80%] max-h-[80%] object-contain"
                  onError={(e) => {
                    // Fallback to gradient placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-soft-pink/30 via-luxury-purple/30 to-premium-gold/30 flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                              ${selectedImage.type === 'video' ? 
                                '<svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>' : 
                                '<svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
                              }
                            </div>
                            <p class="text-white/80 font-medium">${selectedImage.title}</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GalleryGrid
