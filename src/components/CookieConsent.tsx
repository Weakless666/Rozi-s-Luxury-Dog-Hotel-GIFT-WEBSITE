import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings, Cookie } from 'lucide-react'

interface CookieConsentProps {
  onAccept: () => void
  onReject: () => void
  onCustomize: () => void
}

const CookieConsent = ({ onAccept, onReject, onCustomize }: CookieConsentProps) => {
  const [showConsent, setShowConsent] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Необходимите винаги са включени
    functional: false,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Проверяваме дали потребителят вече е дал съгласие
    const consentGiven = localStorage.getItem('cookieConsent')
    if (!consentGiven) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }))
    setShowConsent(false)
    onAccept()
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    }))
    setShowConsent(false)
    onReject()
  }

  const handleCustomize = () => {
    setShowSettings(true)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'customized')
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    setShowConsent(false)
    setShowSettings(false)
    onCustomize()
  }

  if (!showConsent) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-2xl"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {!showSettings ? (
              // Основно съобщение за съгласие
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Бисквитки и поверителност</h3>
                    <p className="text-sm text-gray-600">
                      Използваме бисквитки за подобряване на вашето изживяване
                    </p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Нашият уебсайт използва бисквитки за да ви предостави най-доброто изживяване. 
                    Някои са необходими за функционирането на сайта, други ни помагат да го подобрим. 
                    Можете да изберете кои да приемете.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleReject}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm font-medium"
                  >
                    Отхвърли всички
                  </button>
                  <button
                    onClick={handleCustomize}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Настройки
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2 bg-gradient-to-r from-soft-pink to-luxury-purple text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                  >
                    Приеми всички
                  </button>
                </div>
              </div>
            ) : (
              // Настройки за бисквитки
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">Настройки за бисквитки</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">Необходими бисквитки</h4>
                      <p className="text-sm text-gray-600">
                        Задължителни за основното функциониране на сайта
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-not-allowed">
                      <div className="w-6 h-6 bg-gray-500 rounded-full absolute top-0 left-0"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">Функционални бисквитки</h4>
                      <p className="text-sm text-gray-600">
                        Запомнят вашите предпочитания и подобряват функционалността
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, functional: !prev.functional }))}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.functional ? 'bg-gradient-to-r from-soft-pink to-luxury-purple' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full absolute top-0 transition-transform ${
                        preferences.functional ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">Аналитични бисквитки</h4>
                      <p className="text-sm text-gray-600">
                        Ни помагат да разберем как използвате сайта за да го подобрим
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.analytics ? 'bg-gradient-to-r from-soft-pink to-luxury-purple' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full absolute top-0 transition-transform ${
                        preferences.analytics ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-800">Маркетингови бисквитки</h4>
                      <p className="text-sm text-gray-600">
                        Използват се за показване на релевантна реклама
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        preferences.marketing ? 'bg-gradient-to-r from-soft-pink to-luxury-purple' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full absolute top-0 transition-transform ${
                        preferences.marketing ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors font-medium"
                  >
                    Отказ
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2 bg-gradient-to-r from-soft-pink to-luxury-purple text-white rounded-lg hover:shadow-lg transition-all font-medium"
                  >
                    Запази настройките
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CookieConsent
