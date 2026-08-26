import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const ServicesHero = () => {

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="paw-bg absolute inset-0 opacity-20"></div>
        <div className="absolute top-20 left-10 text-6xl opacity-20 floating">🐕</div>
        <div className="absolute top-40 right-20 text-5xl opacity-20 floating" style={{ animationDelay: '2s' }}>💕</div>
        <div className="absolute bottom-40 left-1/4 text-6xl opacity-20 floating" style={{ animationDelay: '4s' }}>✨</div>
        <div className="absolute bottom-20 right-1/3 text-4xl opacity-20 floating" style={{ animationDelay: '1s' }}>🌸</div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg"
          >
            <Star className="w-5 h-5 text-premium-gold" />
            <span className="text-luxury-purple font-medium">Нашите услуги</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHero
