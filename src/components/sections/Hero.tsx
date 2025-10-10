import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, PawPrint, Star, ArrowRight, Play } from 'lucide-react'
import BookingModal from '../../components/BookingModal'
import { useState } from 'react'

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach">
        <div className="absolute inset-0 paw-bg opacity-30"></div>
        <div className="absolute top-20 left-10 text-8xl opacity-20 floating">🐕</div>
        <div className="absolute top-40 right-20 text-6xl opacity-20 floating" style={{ animationDelay: '2s' }}>🐾</div>
        <div className="absolute bottom-40 left-1/4 text-7xl opacity-20 floating" style={{ animationDelay: '4s' }}>💕</div>
        <div className="absolute bottom-20 right-1/3 text-5xl opacity-20 floating" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute top-1/2 left-5 text-4xl opacity-20 floating" style={{ animationDelay: '3s' }}>🌸</div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <Star className="w-5 h-5 text-premium-gold" />
              <span className="text-luxury-purple font-medium">5-звезден луксозен хотел за кучета</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-handwriting font-bold mb-6"
            >
              <span className="text-gradient font-latin">Rozi's Luxury</span>
              <br />
              <span className="text-luxury-purple">Dog Hotel</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed px-4 sm:px-0"
            >
              Място, където вашите четирикраки приятели получават 
              <span className="text-luxury-purple font-semibold"> най-добрата грижа</span>, 
              <span className="text-soft-pink font-semibold"> любов</span> и 
              <span className="text-premium-gold font-semibold"> внимание</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-primary inline-flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
                >
                  <span>Резервирай сега</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/gallery" className="btn-secondary inline-flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4">
                  <Play className="w-5 h-5" />
                  <span>Виж галерията</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              {[
                { number: '500+', label: 'Щастливи клиенти' },
                { number: '5★', label: 'Рейтинг' },
                { number: '24/7', label: 'Грижа' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-soft-pink/30 to-luxury-purple/30 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <PawPrint className="w-24 h-24 text-white/60 mx-auto mb-4" />
                  <p className="text-white/80 text-lg font-medium">
                    Красиви снимки на щастливи кучета
                  </p>
                </div>
                
                {/* Floating decorations */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-soft-pink animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-luxury-purple" />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">24/7 Грижа</div>
                    <div className="text-sm text-gray-600">Професионална обслужване</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-premium-gold to-soft-pink rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">5★ Рейтинг</div>
                    <div className="text-sm text-gray-600">От доволни клиенти</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </section>
  )
}

export default Hero
