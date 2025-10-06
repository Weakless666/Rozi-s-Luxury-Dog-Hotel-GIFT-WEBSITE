import { motion } from 'framer-motion'
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
    }
  ]

  return (
    <section className="section-padding bg-white/50">
      <div className="container-custom">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
      </div>
    </section>
  )
}

export default GalleryPreview
