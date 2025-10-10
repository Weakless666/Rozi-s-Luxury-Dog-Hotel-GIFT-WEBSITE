<<<<<<< HEAD
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart } from 'lucide-react'
=======
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, User, Heart, PawPrint, CheckCircle } from 'lucide-react'
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
import { createPortal } from 'react-dom'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

<<<<<<< HEAD
const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {

  const handleInstagramRedirect = () => {
    window.open('https://instagram.com/rozis_luxury_dog_hotel', '_blank')
    onClose()
=======
interface BookingData {
  ownerName: string
  email: string
  phone: string
  dogName: string
  dogBreed: string
  dogAge: string
  checkIn: string
  checkOut: string
  services: string[]
  specialRequests: string
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState<BookingData>({
    ownerName: '',
    email: '',
    phone: '',
    dogName: '',
    dogBreed: '',
    dogAge: '',
    checkIn: '',
    checkOut: '',
    services: [],
    specialRequests: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const services = [
    { id: 'accommodation', name: 'Луксозно настаняване', price: 100, required: true },
    { id: 'grooming', name: 'Професионален груминг', price: 50 },
    { id: 'training', name: 'Тренировки и игри', price: 0, included: true },
    { id: 'transport', name: 'Транспорт услуги', price: 30 },
    { id: 'veterinary', name: 'Ветеринарна грижа', price: 40 },
    { id: 'feeding', name: 'Специализирано хранене', price: 0, included: true },
    { id: 'photos', name: 'Фото сесия', price: 60 },
    { id: 'special', name: 'Специална грижа', price: 25 }
  ]

  const calculateTotal = () => {
    const days = Math.ceil((new Date(bookingData.checkOut).getTime() - new Date(bookingData.checkIn).getTime()) / (1000 * 60 * 60 * 24))
    const accommodationTotal = days * 100
    const servicesTotal = bookingData.services.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId)
      return total + (service ? service.price : 0)
    }, 0)
    return accommodationTotal + servicesTotal
  }

  const calculateDays = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) return 0
    const checkInDate = new Date(bookingData.checkIn)
    const checkOutDate = new Date(bookingData.checkOut)
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime()
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    return daysDiff > 0 ? daysDiff : 1 // Minimum 1 day
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (serviceId: string) => {
    setBookingData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const total = calculateTotal()
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ownerName: bookingData.ownerName,
          email: bookingData.email,
          phone: bookingData.phone,
          dogName: bookingData.dogName,
          dogBreed: bookingData.dogBreed,
          dogAge: bookingData.dogAge,
          checkIn: bookingData.checkIn,
          checkOut: bookingData.checkOut,
          services: bookingData.services,
          specialRequests: bookingData.specialRequests,
          totalPrice: total,
          numberOfDays: calculateDays(),
        }),
      })
      
      if (!res.ok) throw new Error('Request failed')
      
      const result = await res.json()
      
      // Send confirmation email
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: bookingData.email,
            subject: 'Потвърждение на резервация - Rozi\'s Luxury Dog Hotel',
            bookingData: result.booking,
            type: 'confirmation'
          }),
        });
      } catch (emailError) {
        console.log('Email sending failed, but booking was successful:', emailError);
      }
      
      setIsSuccess(true)
      setIsSubmitting(false)
      setTimeout(() => {
        setIsSuccess(false)
        setCurrentStep(1)
        setBookingData({
          ownerName: '',
          email: '',
          phone: '',
          dogName: '',
          dogBreed: '',
          dogAge: '',
          checkIn: '',
          checkOut: '',
          services: [],
          specialRequests: ''
        })
        onClose()
      }, 2500)
    } catch (err) {
      setIsSubmitting(false)
      alert('Възникна грешка при изпращането. Моля, опитайте отново.')
    }
  }

  const nextStep = () => setCurrentStep(prev => prev + 1)
  const prevStep = () => setCurrentStep(prev => prev - 1)

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Лична информация'
      case 2: return 'Информация за кучето'
      case 3: return 'Дати и услуги'
      case 4: return 'Потвърждение'
      default: return 'Резервация'
    }
  }

  const getStepIcon = () => {
    switch (currentStep) {
      case 1: return <User className="w-5 h-5" />
      case 2: return <PawPrint className="w-5 h-5" />
      case 3: return <Calendar className="w-5 h-5" />
      case 4: return <CheckCircle className="w-5 h-5" />
      default: return <Heart className="w-5 h-5" />
    }
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
  }

  // Lock body scroll when modal is open to prevent layout jumping
  useEffect(() => {
    if (!isOpen) return
    const scrollY = window.scrollY
    const originalStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    }
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.position = originalStyle.position
      document.body.style.top = originalStyle.top
      document.body.style.width = originalStyle.width
      document.body.style.overflow = originalStyle.overflow
      window.scrollTo(0, scrollY)
    }
  }, [isOpen])

  if (!isOpen) return null

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
<<<<<<< HEAD
          className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl mx-2 sm:mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-soft-pink to-luxury-purple p-6 text-white relative">
=======
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl mx-2 sm:mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-soft-pink to-luxury-purple p-4 sm:p-6 text-white relative">
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
<<<<<<< HEAD
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-handwriting font-bold">
                  Резервация
                </h2>
                <p className="text-white/90">
                  Свържете се с нас в Instagram
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📸</span>
            </div>
            
            <h3 className="text-2xl font-handwriting font-bold text-gray-800 mb-4">
              Резервация чрез Instagram
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              За да направите резервация, моля свържете се с нас директно в Instagram. 
              Там ще можете да ни напишете съобщение с детайлите за вашия любимец и желаните дати.
            </p>
            
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-pink-800 mb-3">Какво да включите в съобщението:</h4>
              <ul className="text-sm text-pink-700 space-y-2 text-left">
                <li>• Име и телефон за контакт</li>
                <li>• Име и порода на кучето</li>
                <li>• Желани дати за настаняване</li>
                <li>• Специални изисквания или нужди</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Отказ
              </button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInstagramRedirect}
                className="btn-primary flex items-center justify-center space-x-3"
              >
                <span className="text-xl">📸</span>
                <span>Отиди в Instagram</span>
              </motion.button>
            </div>
=======
                {getStepIcon()}
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-handwriting font-bold">
                  {getStepTitle()}
                </h2>
                <p className="text-white/90">
                  Стъпка {currentStep} от 4
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-handwriting font-bold text-gray-800 mb-4">
                  Резервацията е успешна! 🎉
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Ще се свържем с вас в рамките на 2 часа за потвърждение.
                </p>
                <div className="bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-6">
                  <p className="text-gray-700">
                    <strong>Номер на резервация:</strong> #RDH-{Date.now().toString().slice(-6)}
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-6">
                      Вашата информация
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Име и фамилия *
                        </label>
                        <input
                          type="text"
                          name="ownerName"
                          value={bookingData.ownerName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                          placeholder="Вашето име"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Имейл *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={bookingData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Телефон *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={bookingData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                          placeholder="+359 888 123 456"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Dog Info */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-6">
                      Информация за вашия любимец
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Име на кучето *
                        </label>
                        <input
                          type="text"
                          name="dogName"
                          value={bookingData.dogName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-luxury-purple focus:border-transparent transition-all duration-300"
                          placeholder="Име на кучето"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Порода
                        </label>
                        <input
                          type="text"
                          name="dogBreed"
                          value={bookingData.dogBreed}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-luxury-purple focus:border-transparent transition-all duration-300"
                          placeholder="Порода на кучето"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Възраст
                        </label>
                        <input
                          type="text"
                          name="dogAge"
                          value={bookingData.dogAge}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-luxury-purple focus:border-transparent transition-all duration-300"
                          placeholder="Възраст в години"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Dates and Services */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-6">
                      Дати и услуги
                    </h3>
                    
                    {/* Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Дата на настаняване *
                        </label>
                        <input
                          type="date"
                          name="checkIn"
                          value={bookingData.checkIn}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all duration-300"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Дата на напускане *
                        </label>
                        <input
                          type="date"
                          name="checkOut"
                          value={bookingData.checkOut}
                          onChange={handleInputChange}
                          required
                          min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-premium-gold focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Допълнителни услуги
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service) => (
                          <motion.div
                            key={service.id}
                            whileHover={{ scale: 1.02 }}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              bookingData.services.includes(service.id)
                                ? 'border-soft-pink bg-soft-pink/10'
                                : 'border-gray-200 hover:border-soft-pink/50'
                            }`}
                            onClick={() => handleServiceToggle(service.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                  bookingData.services.includes(service.id)
                                    ? 'border-soft-pink bg-soft-pink'
                                    : 'border-gray-300'
                                }`}>
                                  {bookingData.services.includes(service.id) && (
                                    <CheckCircle className="w-3 h-3 text-white" />
                                  )}
                                </div>
                                <div>
                                  <h5 className="font-medium text-gray-800">{service.name}</h5>
                                  {service.included && (
                                    <span className="text-sm text-green-600">Включено</span>
                                  )}
                                </div>
                              </div>
                              <div className="text-right">
                                {service.price === 0 ? (
                                  <span className="text-sm text-green-600 font-medium">Безплатно</span>
                                ) : (
                                  <span className="text-sm font-medium text-gray-700">{service.price}лв</span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Special requests */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Специални изисквания
                      </label>
                      <textarea
                        name="specialRequests"
                        value={bookingData.specialRequests}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-soft-pink focus:border-transparent transition-all duration-300"
                        placeholder="Разкажете ни за специалните нужди на вашия любимец..."
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-6">
                      Потвърждение на резервацията
                    </h3>
                    
                    {/* Booking summary */}
                    <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Детайли на резервацията</h4>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Собственик:</span>
                          <span className="font-medium">{bookingData.ownerName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Куче:</span>
                          <span className="font-medium">{bookingData.dogName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Период:</span>
                          <span className="font-medium">
                            {bookingData.checkIn} - {bookingData.checkOut}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Местоположение:</span>
                          <span className="font-medium">Сапарева баня, България</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Брой дни:</span>
                          <span className="font-medium">{calculateDays()} дни</span>
                        </div>
                      </div>
                    </div>

                    {/* Price breakdown */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Разбивка на цените</h4>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Настаняване ({calculateDays()} дни × 100лв):</span>
                          <span className="font-medium">{calculateDays() * 100}лв</span>
                        </div>
                        
                        {bookingData.services.map(serviceId => {
                          const service = services.find(s => s.id === serviceId)
                          return service ? (
                            <div key={serviceId} className="flex justify-between text-sm text-gray-600">
                              <span>{service.name}:</span>
                              <span>{service.price}лв</span>
                            </div>
                          ) : null
                        })}
                        
                        <div className="border-t border-gray-200 pt-2 mt-4">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Общо:</span>
                            <span className="text-luxury-purple">{calculateTotal()}лв</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                      <h5 className="font-semibold text-yellow-800 mb-2">Важни условия:</h5>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Резервацията се потвърждава в рамките на 2 часа</li>
                        <li>• Отмяна е възможна до 24 часа преди настаняване</li>
                        <li>• Необходими са ваксинации в срок</li>
                        <li>• Ветеринарна карта е задължителна</li>
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={currentStep === 1 ? onClose : prevStep}
                    className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    {currentStep === 1 ? 'Отказ' : 'Назад'}
                  </button>
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary"
                    >
                      Напред
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Изпраща се...</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-4 h-4" />
                          <span>Потвърди резервацията</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  // Render modal in a portal to avoid inherited transforms affecting centering
  return createPortal(modalContent, document.body)
}

export default BookingModal
