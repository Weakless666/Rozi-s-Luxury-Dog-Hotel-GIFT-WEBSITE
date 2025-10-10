import { motion } from 'framer-motion'

const CookiePolicy = () => {
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
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">3. Типове бисквитки</h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-luxury-purple mb-2">3.1 Необходими бисквитки</h3>
                    <p className="text-gray-700 mb-2">
                      Тези бисквитки са от съществено значение за функционирането на уебсайта и не могат да бъдат изключени.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Сесии за вход в системата</li>
                      <li>Кошница за пазаруване</li>
                      <li>Настройки за сигурност</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-luxury-purple/10 to-premium-gold/10 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-luxury-purple mb-2">3.2 Функционални бисквитки</h3>
                    <p className="text-gray-700 mb-2">
                      Тези бисквитки запомнят вашите избори и предпочитания за подобрено потребителско изживяване.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Езикови настройки</li>
                      <li>Тема на дизайна</li>
                      <li>Предпочитания за съдържание</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-premium-gold/10 to-soft-pink/10 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-luxury-purple mb-2">3.3 Аналитични бисквитки</h3>
                    <p className="text-gray-700 mb-2">
                      Тези бисквитки ни помагат да разберем как използвате нашия уебсайт за да го подобрим.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Брой посетители</li>
                      <li>Най-посещавани страници</li>
                      <li>Време на престой</li>
                      <li>Източници на трафик</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">4. Управление на бисквитките</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Можете да контролирате и управлявате бисквитките по няколко начина:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-luxury-purple mb-2">4.1 Чрез настройките на браузъра</h3>
                    <p className="text-gray-700 mb-2">
                      Повечето браузъри ви позволяват да:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Видите какви бисквитки са съхранени</li>
                      <li>Изтриете бисквитки поотделно или всички наведнъж</li>
                      <li>Блокирате бисквитки от определени сайтове</li>
                      <li>Блокирате бисквитки от трети страни</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-luxury-purple mb-2">4.2 Чрез нашия уебсайт</h3>
                    <p className="text-gray-700">
                      Можете да променяте настройките за бисквитки директно от нашия уебсайт 
                      чрез панела за настройки, който се появява при първото ви посещение.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">5. Бисквитки от трети страни</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Нашият уебсайт може да използва услуги от трети страни, които поставят свои собствени бисквитки:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> За анализ на трафика</li>
                  <li><strong>Социални мрежи:</strong> За споделяне на съдържание</li>
                  <li><strong>Карти:</strong> За показване на местоположение</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Тези трети страни имат свои собствени политики за бисквитки, които не контролираме.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">6. Въздействие от изключването на бисквитките</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ако изключите бисквитките, някои функции на уебсайта може да не работят правилно:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Може да не можете да запазите предпочитанията си</li>
                  <li>Някои страници може да се зареждат по-бавно</li>
                  <li>Функции като кошница или профил може да не работят</li>
                  <li>Може да получите същите съобщения многократно</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">7. Обновяване на политиката</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Може да обновяваме тази политика за бисквитки от време на време, за да отразяваме промените 
                  в нашите практики или по други оперативни, правни или регулаторни причини.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">8. Контакт</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ако имате въпроси относно нашата употреба на бисквитки, моля свържете се с нас:
                </p>
                <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-lg p-4">
                  <p className="text-gray-700"><strong>Имейл:</strong> cookies@rozis-dog-hotel.com</p>
                  <p className="text-gray-700"><strong>Телефон:</strong> +359 888 123 456</p>
                  <p className="text-gray-700"><strong>Адрес:</strong> Сапарева баня, България</p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CookiePolicy
