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

  const getGalleryImages = () => {
    const staticImages = [
      {
        id: 1,
        title: 'Щастливи гости',
        description: 'Нашите кучета се наслаждават на престоя',
        category: 'dogs',
        type: 'image',
        imageUrl: '/images/dog19.png'
      },
      {
        id: 2,
        title: 'Игри и забавления',
        description: 'Весели моменти в двора',
        category: 'dogs',
        type: 'image',
        imageUrl: '/images/dog20.png'
      },
      {
        id: 3,
        title: 'Игри в двора',
        description: 'Активни игри и упражнения',
        category: 'activities',
        type: 'image',
        imageUrl: '/images/activity1.png'
      }
    ]

    const seen = new Set<string>()
    return staticImages.filter((img) => {
      const url = img.imageUrl
      if (!url || seen.has(url)) return false
      seen.add(url)
      return true
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`${image.imageUrl}-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden" style={{ height: '300px' }}>
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
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
                      `
                    }
                  }}
                />

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

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative flex items-center justify-center min-h-0 w-full my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-soft-pink/30 via-luxury-purple/30 to-premium-gold/30 flex items-center justify-center min-h-[50vh]">
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
                      `
                  }
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GalleryGrid
