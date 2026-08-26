import { motion } from 'framer-motion'
import { Phone, Clock, MessageCircle, Star, Heart, Facebook, Instagram } from 'lucide-react'

// Viber icon component
const ViberIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.398.005C5.231.005.005 5.231.005 11.398c0 2.209.646 4.262 1.755 5.979L.005 24l6.623-1.76c1.717 1.109 3.77 1.755 5.979 1.755 6.167 0 11.393-5.226 11.393-11.393C24.001 5.231 18.775.005 11.398.005zm5.231 16.225c-.372.372-.984.372-1.356 0l-1.356-1.356c-.372-.372-.372-.984 0-1.356s.984-.372 1.356 0l1.356 1.356c.372.372.372.984 0 1.356zm-3.408-3.408c-.372.372-.984.372-1.356 0l-1.356-1.356c-.372-.372-.372-.984 0-1.356s.984-.372 1.356 0l1.356 1.356c.372.372.372.984 0 1.356zm-3.408-3.408c-.372.372-.984.372-1.356 0L6.5 6.647c-.372-.372-.372-.984 0-1.356s.984-.372 1.356 0l1.356 1.356c.372.372.372.984 0 1.356z"/>
  </svg>
)

const ContactInfo = () => {

  const contactMethods = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+359 882 739 396',
      description: 'Обадете се за бърза консултация и резервация',
      action: 'tel:+359882739396',
      color: 'from-soft-pink to-luxury-purple',
      available: '8:00 - 20:00'
    },
    {
      icon: ViberIcon,
      title: 'Viber',
      value: '+359 882 739 396',
      description: 'Бързо съобщение за резервации',
      action: 'viber://chat?number=+359882739396',
      color: 'from-purple-500 to-purple-600',
      available: '8:00 - 20:00'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      value: 'Следвайте ни',
      description: 'Най-новите снимки и новини',
      action: 'https://www.facebook.com/profile.php?id=100058613121575',
      color: 'from-blue-500 to-blue-600',
      available: '24/7'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: 'Следвайте ни',
      description: 'Снимки, истории и новини от хотела',
      action: 'https://www.instagram.com/rozis_luxury_dog_hotel/',
      color: 'from-pink-500 to-purple-600',
      available: '24/7'
    }
  ]

  const workingHours = [
    { day: 'Понеделник - Неделя', hours: '8:00 - 20:00' }
  ]

  return (
    <section className="section-padding bg-white/50">
      <div className="container-custom">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 rounded-full px-6 py-3 mb-6 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Начини за контакт</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Изберете</span> удобния начин
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Предлагаме различни начини за контакт, за да ви бъде максимално удобно 
            да се свържете с нас и да резервирате място за вашия любимец.
          </p>
        </motion.div>

        {/* Contact methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.title}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-2">
                  {method.title}
                </h3>
                
                <p className="text-luxury-purple font-bold text-lg mb-2">
                  {method.value}
                </p>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {method.description}
                </p>
                
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    {method.available}
                  </span>
                </div>
                
                <motion.a
                  href={method.action}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                >
                  <span>Използвай</span>
                </motion.a>
              </motion.div>
            )
          })}
        </div>

        {/* Working hours and additional info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Working hours */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-6 flex items-center">
              <Clock className="w-6 h-6 text-soft-pink mr-3" />
              Работно време
            </h3>
            
            <div className="space-y-4">
              {workingHours.map((schedule) => (
                <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-800">{schedule.day}</span>
                  <span className="text-luxury-purple font-semibold">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why choose us */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-6 flex items-center">
              <Star className="w-6 h-6 text-premium-gold mr-3" />
              Защо да изберете нас
            </h3>
            
            <div className="space-y-4">
              {[
                'Професионален екип с години опит',
                '24/7 грижа и наблюдение',
                'Луксозни условия и удобства',
                'Индивидуален подход към всяко куче',
                'Прозрачни цени без скрити такси'
              ].map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
