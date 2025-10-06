import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Heart, Play, Download, Share2, X } from 'lucide-react'

const GalleryGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedImage, setSelectedImage] = useState<any>(null)

  // Placeholder gallery data - in real app this would come from API
  const galleryImages = [
    {
      id: 1,
      title: 'Щастлив момент с Боби',
      description: 'Златен ретривър Боби се наслаждава на игрите в двора',
      category: 'happy-dogs',
      type: 'image',
      likes: 24,
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Луксозна стая',
      description: 'VIP стая с всички удобства за най-взискателните гости',
      category: 'rooms',
      type: 'image',
      likes: 18,
      date: '2024-01-14'
    },
    {
      id: 3,
      title: 'Професионален груминг',
      description: 'Майстор Иван прави магия с козината на Луна',
      category: 'grooming',
      type: 'video',
      likes: 32,
      date: '2024-01-13'
    },
    {
      id: 4,
      title: 'Игри в двора',
      description: 'Активни игри и упражнения за поддържане на здравето',
      category: 'activities',
      type: 'image',
      likes: 21,
      date: '2024-01-12'
    },
    {
      id: 5,
      title: 'Семейна снимка',
      description: 'Специален момент с семейството на Макс',
      category: 'special-moments',
      type: 'image',
      likes: 45,
      date: '2024-01-11'
    },
    {
      id: 6,
      title: 'Релакс в стаята',
      description: 'Спокойни моменти в луксозната атмосфера',
      category: 'rooms',
      type: 'image',
      likes: 16,
      date: '2024-01-10'
    },
    {
      id: 7,
      title: 'Груминг процес',
      description: 'Стъпка по стъпка как се прави перфектния груминг',
      category: 'grooming',
      type: 'video',
      likes: 28,
      date: '2024-01-09'
    },
    {
      id: 8,
      title: 'Щастливи кучета заедно',
      description: 'Социализация и игри между нашите гости',
      category: 'happy-dogs',
      type: 'image',
      likes: 37,
      date: '2024-01-08'
    },
    {
      id: 9,
      title: 'Тренировка',
      description: 'Професионални упражнения с Елена',
      category: 'activities',
      type: 'video',
      likes: 22,
      date: '2024-01-07'
    },
    {
      id: 10,
      title: 'Рожден ден',
      description: 'Специална тортова парти за 3-годишнината на Мия',
      category: 'special-moments',
      type: 'image',
      likes: 52,
      date: '2024-01-06'
    },
    {
      id: 11,
      title: 'Обща зала',
      description: 'Модерната обща зала за игри и релакс',
      category: 'rooms',
      type: 'image',
      likes: 19,
      date: '2024-01-05'
    },
    {
      id: 12,
      title: 'Красива прическа',
      description: 'Резултатът от професионалния груминг',
      category: 'grooming',
      type: 'image',
      likes: 41,
      date: '2024-01-04'
    }
  ]

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
              {/* Image placeholder with gradient */}
              <div className="aspect-square bg-gradient-to-br from-soft-pink/30 via-luxury-purple/30 to-premium-gold/30 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {image.type === 'video' ? (
                        <Play className="w-8 h-8 text-white" />
                      ) : (
                        <Heart className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <p className="text-white/80 font-medium text-sm">{image.title}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-elegant font-semibold text-lg mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-2">
                      {image.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-soft-pink" />
                        <span className="text-white text-sm">{image.likes}</span>
                      </div>
                      <span className="text-white/80 text-xs">
                        {new Date(image.date).toLocaleDateString('bg-BG')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Play button for video content */}
                  {image.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                      >
                        <Play className="w-6 h-6 text-white ml-1" />
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-luxury-purple text-xs font-medium px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>

                {/* Type indicator */}
                <div className="absolute top-4 right-4">
                  {image.type === 'video' ? (
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <Heart className="w-6 h-6 text-white/60 group-hover:text-soft-pink group-hover:scale-110 transition-all duration-300" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Зареди още снимки</span>
            <Download className="w-5 h-5" />
          </motion.button>
        </motion.div>

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
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between p-6 border-b">
                <h3 className="text-2xl font-elegant font-semibold text-gray-800">
                  {selectedImage.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-6">
                <div className="aspect-video bg-gradient-to-br from-soft-pink/30 via-luxury-purple/30 to-premium-gold/30 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      {selectedImage.type === 'video' ? (
                        <Play className="w-10 h-10 text-white" />
                      ) : (
                        <Heart className="w-10 h-10 text-white" />
                      )}
                    </div>
                    <p className="text-white/80 font-medium">{selectedImage.title}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-soft-pink" />
                        <span>{selectedImage.likes} харесвания</span>
                      </div>
                      <span>{new Date(selectedImage.date).toLocaleDateString('bg-BG')}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-soft-pink/20 rounded-full hover:bg-soft-pink/30 transition-colors">
                        <Heart className="w-4 h-4 text-soft-pink" />
                      </button>
                      <button className="p-2 bg-luxury-purple/20 rounded-full hover:bg-luxury-purple/30 transition-colors">
                        <Share2 className="w-4 h-4 text-luxury-purple" />
                      </button>
                      <button className="p-2 bg-premium-gold/20 rounded-full hover:bg-premium-gold/30 transition-colors">
                        <Download className="w-4 h-4 text-premium-gold" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GalleryGrid
