import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Star, ArrowRight, Play, Euro, Users } from 'lucide-react'
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
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg"
            >
              <Star className="w-5 h-5 text-premium-gold" />
              <span className="text-luxury-purple font-medium">5-звездно оценен от нашите клиенти</span>
            </motion.div>

            <motion.h1
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-handwriting font-bold mb-3 leading-tight"
            >
              <span className="text-gradient">Луксозен хотел за кучета</span>
              <br />
              <span className="text-luxury-purple">в Сапарева баня</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-600 font-latin font-medium mb-6 px-4 sm:px-0"
            >
              Rozi's Luxury Dog Hotel
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed px-4 sm:px-0"
            >
              Място, където вашите четириноги приятели получават{'\u00A0'}
              <span className="text-luxury-purple font-semibold whitespace-nowrap">най-добрата грижа</span>, 
              <span className="text-soft-pink font-semibold"> любов</span> и 
              <span className="text-gentle-rose font-semibold"> внимание</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 lg:max-w-lg px-4 sm:px-0"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-5 py-3 sm:py-3.5"
                >
                  <span>Резервирай сега</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <Link
                  to="/services"
                  className="btn-secondary w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-5 py-3 sm:py-3.5"
                >
                  <Euro className="w-4 h-4 shrink-0" />
                  <span>Ценоразпис</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <Link
                  to="/gallery"
                  className="btn-secondary w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-5 py-3 sm:py-3.5"
                >
                  <Play className="w-4 h-4 shrink-0" />
                  <span>Виж галерията</span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                <Link
                  to="/about"
                  className="btn-secondary w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-5 py-3 sm:py-3.5"
                >
                  <Users className="w-4 h-4 shrink-0" />
                  <span>За нас</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-12 px-4 sm:px-0"
            >
              {[
                { number: '300+', label: 'Щастливи клиенти' },
                { number: '5★', label: 'Оценен от клиентите' },
                { number: '24/7', label: 'Грижа' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[11px] sm:text-sm md:text-base text-gray-600 font-medium leading-tight whitespace-nowrap">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl shadow-2xl">
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <img
                  src="/images/hero.png"
                  alt="Гости в Rozi's Luxury Dog Hotel"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3.5 shadow-xl max-w-[calc(100%-2rem)] sm:max-w-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 shrink-0 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-gray-800 text-sm sm:text-base leading-snug">24/7 грижа</div>
                    <div className="text-xs sm:text-sm text-gray-600 leading-snug">Професионално обслужване</div>
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
