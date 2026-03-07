import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Phone } from 'lucide-react'
import { createPortal } from 'react-dom'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {

  const handleInstagramRedirect = () => {
    window.open('https://instagram.com/rozis_luxury_dog_hotel', '_blank')
    onClose()
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
          className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl mx-2 sm:mx-4 max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-soft-pink to-luxury-purple p-6 text-white relative flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
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

          {/* Content - scrollable on mobile */}
          <div className="p-6 sm:p-8 text-center overflow-y-auto flex-1 min-h-0">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📸</span>
            </div>

            <h3 className="text-2xl font-handwriting font-bold text-gray-800 mb-4">
              Резервация чрез Instagram
            </h3>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              За да направите резервация, моля свържете се с нас директно в Instagram.
              Там ще можете да ни напишете съобщение с детайлите за вашия любимец и желаните дати.
            </p>

            <p className="text-base text-gray-700 mb-6">
              Можете да се свържете с нас и по телефон:{' '}
              <a href="tel:+359882739396" className="text-luxury-purple font-semibold hover:underline whitespace-nowrap">
                +359 882 739 396
              </a>
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-pink-800 mb-3">Какво да включите в съобщението:</h4>
              <ul className="text-sm text-pink-700 space-y-2 text-left">
                <li>• Име и телефон за контакт</li>
                <li>• Име и порода на кучето</li>
                <li>• Желани дати за настаняване</li>
                <li>• Специални изисквания или нужди</li>
              </ul>
            </div>

            {/* Buttons - visible and always at bottom of scroll */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 pb-2">
              <a
                href="tel:+359882739396"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Обадете се</span>
              </a>
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
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )

  // Render modal in a portal to avoid inherited transforms affecting centering
  return createPortal(modalContent, document.body)
}

export default BookingModal
