import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle, User, Calendar, MessageSquare, Heart } from 'lucide-react'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    checkIn: '',
    checkOut: '',
    message: '',
    dogName: '',
    dogBreed: '',
    dogAge: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const services = [
    'Луксозно настаняване',
    'Професионален груминг',
    'Тренировки и игри',
    'Транспорт услуги',
    'Ветеринарна грижа',
    'Специализирано хранене',
    'Фото сесии',
    'Специална грижа',
    'Друго'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        checkIn: '',
        checkOut: '',
        message: '',
        dogName: '',
        dogBreed: '',
        dogAge: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 2000)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-soft-lavender/30 to-light-peach/30">
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
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Резервация</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Резервирайте</span> онлайн
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Попълнете формата по-долу и ние ще се свържем с вас в рамките на 2 часа 
            за потвърждение на резервацията.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            {/* Success message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-100 border border-green-400 rounded-xl flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Резервацията е изпратена успешно!</h3>
                  <p className="text-green-600 text-sm">Ще се свържем с вас в рамките на 2 часа за потвърждение.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-xl p-6">
                <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-4 flex items-center">
                  <User className="w-5 h-5 text-soft-pink mr-2" />
                  Лична информация
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Име и фамилия *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                      placeholder="Вашето име"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Имейл *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      autoComplete="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                      placeholder="+359 882 739 396"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-2">
                      Услуга *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Изберете услуга</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Dog Information */}
              <div className="bg-gradient-to-r from-luxury-purple/10 to-premium-gold/10 rounded-xl p-6">
                <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-luxury-purple mr-2" />
                  Информация за кучето
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="dog-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Име на кучето *
                    </label>
                    <input
                      id="dog-name"
                      type="text"
                      name="dogName"
                      value={formData.dogName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-purple focus:border-transparent transition-all duration-300"
                      placeholder="Име на кучето"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dog-breed" className="block text-sm font-medium text-gray-700 mb-2">
                      Порода
                    </label>
                    <input
                      id="dog-breed"
                      type="text"
                      name="dogBreed"
                      value={formData.dogBreed}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-purple focus:border-transparent transition-all duration-300"
                      placeholder="Порода на кучето"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dog-age" className="block text-sm font-medium text-gray-700 mb-2">
                      Възраст
                    </label>
                    <input
                      id="dog-age"
                      type="text"
                      name="dogAge"
                      value={formData.dogAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-purple focus:border-transparent transition-all duration-300"
                      placeholder="Възраст в години"
                    />
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="bg-gradient-to-r from-premium-gold/10 to-soft-pink/10 rounded-xl p-6">
                <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-4 flex items-center">
                  <Calendar className="w-5 h-5 text-premium-gold mr-2" />
                  Дати на престой
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-2">
                      Дата на настаняване *
                    </label>
                    <input
                      id="check-in"
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-2">
                      Дата на напускане *
                    </label>
                    <input
                      id="check-out"
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Допълнителна информация
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                  placeholder="Разкажете ни повече за вашия любимец, специални нужди, предпочитания или въпроси..."
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-soft-pink to-luxury-purple text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Изпраща се...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Изпрати резервацията</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
