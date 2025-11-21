'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'

export default function CookiePolicy() {
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
                Политика за <span className="text-gradient">бисквитки</span>
              </h1>
              
              <div className="text-sm text-gray-600 mb-8 text-center">
                Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">1. Какво са бисквитките?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Бисквитките (cookies) са малки текстови файлове, които се съхраняват на вашето устройство 
                    когато посещавате уебсайт. Те помагат на уебсайта да запомни информация за вашето посещение, 
                    което прави изживяването по-удобно при следващите ви посещения.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">2. Как използваме бисквитките</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Нашият уебсайт използва бисквитки за следните цели:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Подобряване на функционалността на уебсайта</li>
                    <li>Запомняне на вашите предпочитания</li>
                    <li>Анализ на трафика и използването на сайта</li>
                    <li>Осигуряване на сигурност</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">3. Контакт</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ако имате въпроси относно нашата употреба на бисквитки, моля свържете се с нас:
                  </p>
                  <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-lg p-4">
                    <p className="text-gray-700"><strong>Имейл:</strong> cookies@rozis-dog-hotel.com</p>
                    <p className="text-gray-700"><strong>Телефон:</strong> +359 882 739 396</p>
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

