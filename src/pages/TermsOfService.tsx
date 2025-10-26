import { motion } from 'framer-motion'

const TermsOfService = () => {
  return (
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
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">3. Резервации и отмяни</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-purple mb-2">3.1 Резервации</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Всички резервации се правят чрез Instagram директно съобщение</li>
                      <li>Резервацията се потвърждава след получаване на потвърждение от нас</li>
                      <li>Цените могат да се променят без предварително уведомление</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-purple mb-2">3.2 Отмяни</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Отмяните се правят чрез Instagram директно съобщение</li>
                      <li>За отмяна 24 часа преди резервацията - без такса</li>
                      <li>За отмяна в деня на резервацията - може да се прилага такса</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">4. Отговорност на клиента</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Предоставяне на точна информация за домашното животно</li>
                  <li>Предоставяне на всички необходими документи (ваксинация, здравен статус)</li>
                  <li>Спазване на правилата и процедурите на хотела</li>
                  <li>Своевременно уведомяване за промени в резервацията</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">5. Отговорност на хотела</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Осигуряване на професионална грижа за домашните животни</li>
                  <li>Поддържане на чиста и безопасна среда</li>
                  <li>Спазване на всички здравни и безопасностни стандарти</li>
                  <li>Комуникация с собствениците при необходимост</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">6. Ограничение на отговорността</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Rozi's Luxury Dog Hotel не носи отговорност за:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Щети, причинени от съществуващи здравословни проблеми на животното</li>
                  <li>Щети, причинени от неподходящо поведение на животното</li>
                  <li>Загуби или щети на лични вещи</li>
                  <li>Непредвидени обстоятелства извън нашия контрол</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">7. Интелектуална собственост</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Всички материали на уебсайта, включително текстове, изображения, логотипи и дизайн, 
                  са собственост на Rozi's Luxury Dog Hotel и са защитени от авторски права.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">8. Забрана за използване</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Забранено е използването на уебсайта за:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Незаконни дейности</li>
                  <li>Нарушаване на правата на трети страни</li>
                  <li>Разпространение на вируси или зловреден софтуер</li>
                  <li>Спам или нежелани съобщения</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">9. Приложимо право</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Тези условия се регулират от българското право. Всички спорове ще се решават 
                  от компетентните български съдилища.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">10. Контакт</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  За въпроси относно тези условия за ползване, моля свържете се с нас:
                </p>
                <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-lg p-4">
                  <p className="text-gray-700"><strong>Имейл:</strong> info@rozis-dog-hotel.com</p>
                  <p className="text-gray-700"><strong>Телефон:</strong> +359 882 739 396</p>
                  <p className="text-gray-700"><strong>Instagram:</strong> @rozis_dog_hotel</p>
                  <p className="text-gray-700"><strong>Адрес:</strong> Сапарева баня, България</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">11. Промени в условията</h2>
                <p className="text-gray-700 leading-relaxed">
                  Ние запазваме правото да променяме тези условия по всяко време. 
                  Промените влизат в сила веднага след публикуването им на уебсайта.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsOfService
