import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react'

const BookingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const bookingSteps = [
    {
      step: '1',
      title: 'Свържете се с нас',
      description: 'Обадете се или изпратете лично съобщение за първоначална консултация',
      icon: Phone,
      color: 'from-soft-pink to-luxury-purple'
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: 'Телефон',
      value: '+359 882 739 396',
      description: 'Работно време: 8:00 - 20:00',
      action: 'tel:+359882739396',
      color: 'from-soft-pink to-luxury-purple'
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
            <Calendar className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Как да резервирате</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Лесно и бързо</span> резервиране
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Резервирането е просто и бързо. Следвайте стъпките по-долу или се свържете 
            директно с нас за персонализирана консултация.
          </p>
        </motion.div>

        {/* Booking steps */}
        <div className="grid grid-cols-1 gap-8 mb-16 max-w-md mx-auto">
          {bookingSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 relative`}
                >
                  <Icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-luxury-purple font-bold text-sm">{step.step}</span>
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-handwriting font-bold text-gray-800 text-center mb-12">
            Свържете се с нас
          </h3>
          
          <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-elegant font-semibold text-gray-800 mb-2">
                    {method.title}
                  </h4>
                  
                  <p className="text-luxury-purple font-bold text-lg mb-2">
                    {method.value}
                  </p>
                  
                  <p className="text-gray-600 mb-6">
                    {method.description}
                  </p>
                  
                  <motion.a
                    href={method.action}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}
                  >
                    <span>Използвай</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Important information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="bg-gradient-to-br from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-handwriting font-bold text-gray-800 text-center mb-8">
            📋 Важна информация
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <Clock className="w-5 h-5 text-soft-pink mr-2" />
                Работно време
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>Понеделник - Събота: 8:00 - 20:00</li>
                <li>Неделя: 10:00 - 16:00</li>
                <li>24/7 грижа за настанали кучета</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-luxury-purple mr-2" />
                Изисквания
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>Поставена годишна ваксина против бяс</li>
                <li>Ветеринарна карта</li>
                <li>Обезпаразитяване вътрешно и външно през последните 20 дена</li>
                <li>Чип на името на собственика</li>
                <li>Информация при необходимост от специални нужди и грижи</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BookingSection
