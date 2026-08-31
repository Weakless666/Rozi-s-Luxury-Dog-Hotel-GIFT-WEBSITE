import { motion } from 'framer-motion'
import { Camera, X } from 'lucide-react'
import { useState } from 'react'

const GalleryPreview = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const openModal = (image: any) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const galleryImages = [
    {
      id: 1,
      title: 'Социализация в двора',
      description: 'Гостите се запознават и играят заедно на тревата',
      category: 'yard',
      imageUrl: '/images/yard-01.jpg'
    },
    {
      id: 2,
      title: 'Охлаждане в басейна',
      description: 'Освежаващи моменти през лятото',
      category: 'yard',
      imageUrl: '/images/yard-04.jpg'
    },
    {
      id: 3,
      title: 'Гости на терасата',
      description: 'Красив изглед и спокойствие',
      category: 'yard',
      imageUrl: '/images/yard-05.jpg'
    },
    {
      id: 4,
      title: 'Луксозни стаи за гости',
      description: 'Модерни и уютни помещения',
      category: 'inside',
      imageUrl: '/images/inside-01.jpg'
    }
  ]

  return (
    <section className="section-padding bg-white/50">
      <div className="container-custom">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
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
                  style={{ minHeight: '300px', backgroundColor: '#f0f0f0' }}
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
                              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            </div>
                            <p class="text-white/80 font-medium">${image.title}</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                
                {/* Simple hover overlay with expand icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <Camera className="w-6 h-6 text-white" />
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
                type="button"
                onClick={closeModal}
                aria-label="Затвори изображението"
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
              </button>

              {/* Modal content - just the image */}
              <div className="flex items-center justify-center w-full h-full p-4 sm:p-8 lg:p-12">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="max-w-[95%] max-h-[90%] sm:max-w-[85%] sm:max-h-[85%] lg:max-w-[80%] lg:max-h-[80%] object-contain"
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
                              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
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

export default GalleryPreview
