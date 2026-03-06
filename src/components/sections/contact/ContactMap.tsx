import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Navigation, Clock, Phone } from 'lucide-react'

const ContactMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
            <MapPin className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Местоположение</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Намерете</span> ни лесно
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Нашият хотел се намира в красива и спокойна част на София, 
            с лесен достъп и удобно паркиране.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-soft-pink/30 via-luxury-purple/30 to-premium-gold/30 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-elegant font-semibold mb-2">
                  <span className="font-latin">Rozi's</span> Luxury Dog Hotel
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  Сапарева баня, България
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=ул.+Германея+60,+2650+Сапарева+баня,+България"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Отвори в Google Maps</span>
                  </motion.button>
                </a>
              </div>
              
              {/* Map decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">📍</span>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium">Тук сме ние! 🐕</span>
              </div>
            </div>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-soft-pink mr-2" />
                Адрес
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium"><span className="font-latin">Rozi's</span> Luxury Dog Hotel</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=ул.+Германея+60,+2650+Сапарева+баня,+България"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-soft-pink transition-colors duration-300"
                >
                  <p className="underline">ул. "Германея" 60</p>
                  <p>2650 Сапарева баня, България</p>
                </a>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-4 flex items-center">
                <Phone className="w-5 h-5 text-luxury-purple mr-2" />
                Контакти
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-soft-pink" />
                  <a href="tel:+359882739396" className="text-gray-600 hover:text-soft-pink transition-colors">+359 882 739 396</a>
                </div>
              </div>
            </div>

            {/* Working hours */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-premium-gold mr-2" />
                Работно време
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Пон - Пет:</span>
                  <span className="font-medium">8:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Събота:</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Неделя:</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span className="text-luxury-purple font-medium">24/7 грижа:</span>
                  <span className="text-luxury-purple font-medium">За настанали кучета</span>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-gradient-to-br from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-6">
              <h3 className="text-lg font-elegant font-semibold text-gray-800 mb-3">
                Как да стигнете до нас
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• С кола: 5 мин от центъра на Сапарева баня</li>
                <li>• С градски транспорт: лесен достъп от центъра</li>
                <li>• С такси: около 5-10 лв от центъра</li>
                <li>• Безплатно паркиране на територията</li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default ContactMap
