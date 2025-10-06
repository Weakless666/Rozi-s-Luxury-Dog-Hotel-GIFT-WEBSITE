import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, Clock, MessageCircle, Calendar, Star, Heart } from 'lucide-react'

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const contactMethods = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+359 888 123 456',
      description: 'Обадете се за бърза консултация и резервация',
      action: 'tel:+359888123456',
      color: 'from-soft-pink to-luxury-purple',
      available: '8:00 - 20:00'
    },
    {
      icon: Mail,
      title: 'Имейл',
      value: 'info@rozis-dog-hotel.com',
      description: 'Изпратете имейл за подробна информация',
      action: 'mailto:info@rozis-dog-hotel.com',
      color: 'from-luxury-purple to-premium-gold',
      available: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+359 888 123 456',
      description: 'Бързо съобщение за резервации',
      action: 'https://wa.me/359888123456',
      color: 'from-premium-gold to-soft-pink',
      available: '8:00 - 20:00'
    },
    {
      icon: Calendar,
      title: 'Онлайн резервация',
      value: 'Форма за контакт',
      description: 'Попълнете формата за лесна резервация',
      action: '#contact-form',
      color: 'from-soft-pink to-luxury-purple',
      available: '24/7'
    }
  ]

  const workingHours = [
    { day: 'Понеделник - Петък', hours: '8:00 - 20:00' },
    { day: 'Събота', hours: '9:00 - 18:00' },
    { day: 'Неделя', hours: '10:00 - 16:00' },
    { day: '24/7 грижа', hours: 'За настанали кучета' }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
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
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
            
            <div className="mt-6 p-4 bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Важно:</strong> За спешни случаи през нощта, моля обадете се на 
                основния телефон. Имаме 24/7 грижа за настанали кучета.
              </p>
            </div>
          </motion.div>

          {/* Why choose us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
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
                'Индивидуален подход към всеки куче',
                'Ветеринарна грижа включена',
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
            
            <div className="mt-6 p-4 bg-gradient-to-r from-premium-gold/20 to-soft-pink/20 rounded-xl">
              <p className="text-sm text-gray-600">
                <strong>Гаранция за качество:</strong> Ако не сте доволни от нашите услуги, 
                ще върнем парите ви или ще предложим безплатна допълнителна грижа.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
