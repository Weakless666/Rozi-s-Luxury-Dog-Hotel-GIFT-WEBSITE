import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, PawPrint, Star } from 'lucide-react'

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg"
          >
            <Heart className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Нашата история</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-handwriting font-bold mb-6"
          >
            <span className="text-gradient">За нас</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Познайте историята зад <span className="text-luxury-purple font-semibold"><span className="font-latin">Rozi's</span> Luxury Dog Hotel</span> - 
            място, където любовта към животните се среща с професионализъм и лукс.
          </motion.p>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {[
              { icon: Heart, number: '500+', label: 'Щастливи клиенти', color: 'from-soft-pink to-luxury-purple' },
              { icon: PawPrint, number: '5+', label: 'Години опит', color: 'from-luxury-purple to-premium-gold' },
              { icon: Star, number: '4.9/5', label: 'Рейтинг', color: 'from-premium-gold to-soft-pink' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
