import { motion } from 'framer-motion'
<<<<<<< HEAD
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

  // Real gallery images from the gallery
  const galleryImages = [
    {
      id: 1,
      title: 'Щастлив момент с Боби',
      description: 'Златен ретривър Боби се наслаждава на игрите в двора',
      category: 'dogs',
      imageUrl: '/images/dog1.png'
    },
    {
      id: 2,
      title: 'Луксозна стая',
      description: 'VIP стая с всички удобства за най-взискателните гости',
      category: 'rooms',
      imageUrl: '/images/room1.png'
    },
    {
      id: 3,
      title: 'Игри в двора',
      description: 'Активни игри и упражнения за поддържане на здравето',
      category: 'activities',
      imageUrl: '/images/activity1.png'
    },
    {
      id: 4,
      title: 'Щастливи кучета заедно',
      description: 'Социализация и игри между нашите гости',
      category: 'dogs',
      imageUrl: '/images/dog5.png'
    },
    {
      id: 5,
      title: 'Релакс в стаята',
      description: 'Спокойни моменти в луксозната атмосфера',
      category: 'rooms',
      imageUrl: '/images/room2.png'
    },
    {
      id: 6,
      title: 'Социализация',
      description: 'Кучетата се учат да играят заедно',
      category: 'activities',
      imageUrl: '/images/socalization1.png'
=======
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Camera, Heart, ArrowRight, Play } from 'lucide-react'

const GalleryPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Placeholder images - in real app these would be actual images
  const galleryImages = [
    {
      id: 1,
      title: 'Щастливи моменти',
      description: 'Нашите гости се наслаждават на игри и забавления',
      category: 'activities'
    },
    {
      id: 2,
      title: 'Луксозни стаи',
      description: 'Комфортни помещения за най-доброто преживяване',
      category: 'rooms'
    },
    {
      id: 3,
      title: 'Професионален груминг',
      description: 'Грижа за кожата и козината от майстори',
      category: 'grooming'
    },
    {
      id: 4,
      title: 'Игри и упражнения',
      description: 'Активни игри за поддържане на здравето',
      category: 'activities'
    },
    {
      id: 5,
      title: 'Релакс и почивка',
      description: 'Спокойни моменти в луксозната атмосфера',
      category: 'relaxation'
    },
    {
      id: 6,
      title: 'Семейни снимки',
      description: 'Специални моменти с нашите гости',
      category: 'family'
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
    }
  ]

  return (
    <section className="section-padding bg-white/50">
      <div className="container-custom">
<<<<<<< HEAD
=======
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 rounded-full px-6 py-3 mb-6 shadow-lg"
          >
            <Camera className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Галерия</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Щастливи моменти</span> в нашия хотел
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Разгледайте снимки от ежедневния живот в нашия хотел и вижте как 
            вашите четирикраки приятели ще се наслаждават на времето си тук.
          </p>
        </motion.div>
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
<<<<<<< HEAD
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
                    console.log('Image failed to load:', image.imageUrl);
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
                  onLoad={() => console.log('Image loaded successfully:', image.imageUrl)}
                />
                
                {/* Simple hover overlay with expand icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <Camera className="w-6 h-6 text-white" />
                  </motion.div>
=======
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              {/* Image placeholder with gradient */}
              <div className="aspect-square bg-gradient-to-br from-soft-pink/30 via-luxury-purple/30 to-premium-gold/30 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white/80 font-medium">{image.title}</p>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-elegant font-semibold text-lg mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {image.description}
                    </p>
                  </div>
                  
                  {/* Play button for video content */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Play className="w-6 h-6 text-white ml-1" />
                    </motion.div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-luxury-purple text-xs font-medium px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>

                {/* Heart icon */}
                <div className="absolute top-4 right-4">
                  <Heart className="w-6 h-6 text-white/60 group-hover:text-soft-pink group-hover:scale-110 transition-all duration-300" />
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
                </div>
              </div>
            </motion.div>
          ))}
        </div>

<<<<<<< HEAD
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

=======
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/gallery" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Виж пълната галерия</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
      </div>
    </section>
  )
}

export default GalleryPreview
