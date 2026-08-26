import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Heart, X, Camera } from 'lucide-react'
import {
  getFilteredGalleryImages,
  type GalleryCategoryId,
  type GalleryImage
} from '../../../data/galleryData'

interface GalleryGridProps {
  activeCategory: GalleryCategoryId
}

const GalleryGrid = ({ activeCategory }: GalleryGridProps) => {

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const galleryImages = getFilteredGalleryImages(activeCategory)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-soft-lavender/30 to-light-peach/30 pt-0">
      <div className="container-custom">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
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

        <AnimatePresence mode="wait">
          {galleryImages.length === 0 ? (
            <motion.div
              key="empty"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-16 bg-white/60 rounded-2xl"
            >
              <Camera className="w-12 h-12 text-luxury-purple mx-auto mb-4 opacity-60" />
              <p className="text-gray-600 text-lg">Все още няма снимки в тази категория.</p>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={`${image.imageUrl}-${image.id}`}
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="relative overflow-hidden" style={{ height: '300px' }}>
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-soft-pink/30 via-luxury-purple/30 to-premium-gold/30 flex items-center justify-center">
                              <div class="text-center px-4">
                                <div class="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                </div>
                                <p class="text-white/80 font-medium text-sm">${image.title}</p>
                              </div>
                            </div>
                          `
                        }
                      }}
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {selectedImage && (
          <motion.div
            initial={false}
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
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GalleryGrid
