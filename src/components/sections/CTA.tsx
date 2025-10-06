import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, Calendar, ArrowRight, Heart, PawPrint } from 'lucide-react'
import BookingModal from '../../components/BookingModal'
import { useState } from 'react'

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const ctaOptions = [
    {
      icon: Phone,
      title: 'Обадете се сега',
      description: '+359 888 123 456',
      action: 'tel:+359888123456',
      color: 'from-soft-pink to-luxury-purple'
    },
    {
      icon: Mail,
      title: 'Изпратете имейл',
      description: 'info@rozis-dog-hotel.com',
      action: 'mailto:info@rozis-dog-hotel.com',
      color: 'from-luxury-purple to-premium-gold'
    },
    {
      icon: Calendar,
      title: 'Резервирайте онлайн',
      description: 'Бърза и лесна резервация',
      action: '/contact',
      color: 'from-premium-gold to-soft-pink'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-luxury-purple via-soft-pink to-premium-gold relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-8xl floating">🐕</div>
        <div className="absolute top-20 right-20 text-6xl floating" style={{ animationDelay: '2s' }}>🐾</div>
        <div className="absolute bottom-20 left-1/4 text-7xl floating" style={{ animationDelay: '4s' }}>💕</div>
        <div className="absolute bottom-10 right-10 text-5xl floating" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute top-1/2 left-5 text-4xl floating" style={{ animationDelay: '3s' }}>🌸</div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
          >
            <Heart className="w-5 h-5 text-white" />
            <span className="font-medium">Готови ли сте?</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-handwriting font-bold mb-6">
            Дайте на вашия <span className="text-white">любимец</span> най-доброто!
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Не чакайте повече! Резервирайте място за вашия четирикрак приятел 
            и му осигурете незабравимо преживяване в луксозния ни хотел.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-white text-luxury-purple px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center space-x-2"
              >
                <PawPrint className="w-6 h-6" />
                <span>Резервирай сега</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="tel:+359888123456" 
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Обадете се</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* CTA Options */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ctaOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-2">
                  {option.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
                
                <motion.a
                  href={option.action}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${option.color} text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300`}
                >
                  <span>Избери</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Special offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-handwriting font-bold text-white mb-4">
            🎉 Специална оферта за нови клиенти!
          </h3>
          <p className="text-white/90 text-lg mb-4">
            Получете 20% отстъпка за първото настаняване при резервация за повече от 3 дни!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-luxury-purple px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center space-x-2"
            >
              <span>Възползвайте се сега</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </section>
  )
}

export default CTA
