'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'

export default function PrivacyPolicy() {
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
                Политика за <span className="text-gradient">поверителност</span>
              </h1>
              
              <div className="text-sm text-gray-600 mb-8 text-center">
                Последна актуализация: {new Date().toLocaleDateString('bg-BG')}
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">1. Въведение</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Rozi's Luxury Dog Hotel ("ние", "нас", "нашия") се ангажираме да защитаваме поверителността 
                    на нашите клиенти и посетители. Тази политика за поверителност обяснява как събираме, 
                    използваме и защитаваме вашата лична информация.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">2. Информация, която събираме</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-luxury-purple mb-2">2.1 Лична информация</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>Име и фамилия</li>
                        <li>Телефонен номер</li>
                        <li>Имейл адрес</li>
                        <li>Адрес за доставка</li>
                        <li>Информация за вашите домашни любимци</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-luxury-purple mb-2">2.2 Техническа информация</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                        <li>IP адрес</li>
                        <li>Тип браузър и операционна система</li>
                        <li>Страници, които посещавате</li>
                        <li>Време на посещение</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">3. Как използваме вашата информация</h2>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>За обработка на резервации и заявки за услуги</li>
                    <li>За комуникация относно услугите ни</li>
                    <li>За подобряване на нашия уебсайт и услуги</li>
                    <li>За изпращане на важни съобщения за промени в услугите</li>
                    <li>За съответствие с правните изисквания</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">4. Контакт</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    За въпроси относно тази политика за поверителност, моля свържете се с нас:
                  </p>
                  <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-lg p-4">
                    <p className="text-gray-700"><strong>Имейл:</strong> privacy@rozis-dog-hotel.com</p>
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

