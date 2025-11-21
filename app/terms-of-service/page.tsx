'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6 text-center">
                Условия за <span className="text-gradient">ползване</span>
              </h1>
              
              <div className="text-sm text-gray-600 mb-8 text-center">
                Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">1. Приемане на условията</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Като използвате уебсайта на Rozi's Luxury Dog Hotel, вие се съгласявате с тези условия за ползване. 
                    Ако не се съгласявате с някоя част от условията, моля не използвайте нашия уебсайт.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">2. Описание на услугите</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Rozi's Luxury Dog Hotel предлага следните услуги:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Луксозно настаняване за кучета</li>
                    <li>Професионален груминг</li>
                    <li>Тренировки и игри</li>
                    <li>Транспорт услуги</li>
                    <li>Осиновяване на кучета</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">3. Контакт</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    За въпроси относно тези условия за ползване, моля свържете се с нас:
                  </p>
                  <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-lg p-4">
                    <p className="text-gray-700"><strong>Имейл:</strong> info@rozis-dog-hotel.com</p>
                    <p className="text-gray-700"><strong>Телефон:</strong> +359 882 739 396</p>
                    <p className="text-gray-700"><strong>Instagram:</strong> @rozis_luxury_dog_hotel</p>
                    <p className="text-gray-700"><strong>Адрес:</strong> Сапарева баня, България</p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <CookieConsent 
        onAccept={() => {}}
        onReject={() => {}}
        onCustomize={() => {}}
      />
      <ChatBot />
    </>
  )
}

