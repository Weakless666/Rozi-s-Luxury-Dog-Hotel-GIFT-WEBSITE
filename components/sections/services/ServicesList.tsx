'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Scissors, Dumbbell, Car, Stethoscope, Utensils, Camera, Shield } from 'lucide-react'

const ServicesList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Home,
      title: 'Луксозно настаняване',
      description: 'Комфортни стаи с модерни удобства за най-доброто преживяване на вашите кучета.',
      features: [
        'Индивидуални климатизирани стаи',
        'Мек и удобен спален материал',
        '24/7 наблюдение и грижа',
        'Регулярни разходки и игри',
        'Персонализирано меню'
      ],
      price: '100лв/нощ',
      color: 'from-soft-pink to-luxury-purple',
      popular: true
    },
    {
      icon: Scissors,
      title: 'Професионален груминг',
      description: 'Къпане и ресане от опитни майстори с най-високи стандарти. Ценоразпис от 01.06.2024.',
      features: [
        'КЪПАНЕ: малки (до 5кг) - 35лв',
        'Средни (до 15кг) - 45лв | Големи (до 40кг) - 55лв',
        'Гигантски (над 40кг) - 70лв',
        'РЕСАНЕ: малки 30лв | Средни 40лв',
        'Големи 45лв | Гигантски 50лв'
      ],
      price: 'от 30лв',
      color: 'from-luxury-purple to-premium-gold',
      popular: false
    },
    {
      icon: Dumbbell,
      title: 'Тренировки и игри',
      description: 'Активни игри и упражнения за поддържане на здравето и щастието на кучетата.',
      features: [
        'Дневни игри и упражнения',
        'Социализация с други кучета',
        'Дресировка и команди',
        'Агилити тренировки',
        'Индивидуални сесии'
      ],
      price: 'включено',
      color: 'from-premium-gold to-soft-pink',
      popular: false
    },
    {
      icon: Car,
      title: 'Транспорт услуги',
      description: 'Безопасен транспорт до и от хотела само за София и София област.',
      features: [
        'Само София и София област',
        '50лв в една посока',
        'Безопасни климатизирани клетки',
        'Професионален шофьор',
        'Гъвкави часове'
      ],
      price: '50лв/посока',
      color: 'from-soft-pink to-luxury-purple',
      popular: false
    },
    {
      icon: Stethoscope,
      title: 'Ветеринарна грижа',
      description: 'Професионална медицинска грижа и профилактика за поддържане на здравето.',
      features: [
        'Регулярни медицински прегледи',
        'Ваксинации и профилактика',
        'Лечение на болести',
        'Специализирана грижа',
        '24/7 ветеринарна поддръжка'
      ],
      price: 'по договаряне',
      color: 'from-luxury-purple to-premium-gold',
      popular: false
    },
    {
      icon: Utensils,
      title: 'Специализирано хранене',
      description: 'Персонализирано меню за всеки куче, отговарящо на неговите нужди и предпочитания.',
      features: [
        'Персонализирано меню',
        'Диетични храни',
        'Органични продукти',
        'Специални нужди',
        'Регулярни хранения'
      ],
      price: 'включено',
      color: 'from-premium-gold to-soft-pink',
      popular: false
    },
    {
      icon: Camera,
      title: 'Фото сесии',
      description: 'Професионални снимки на вашите кучета в красива обстановка за спомени.',
      features: [
        'Професионални снимки',
        'Красива обстановка',
        'Различни теми',
        'Цифрови файлове',
        'Печат на снимки'
      ],
      price: 'от 50лв',
      color: 'from-soft-pink to-luxury-purple',
      popular: false
    },
    {
      icon: Shield,
      title: 'Специална грижа',
      description: 'Допълнителни услуги за кучета с специални нужди или възрастни кучета.',
      features: [
        'Грижа за възрастни кучета',
        'Специални нужди',
        'Медикаментозно лечение',
        'Допълнително внимание',
        'Персонализиран подход'
      ],
      price: 'по договаряне',
      color: 'from-luxury-purple to-premium-gold',
      popular: false
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
            <Home className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Пълна гама услуги</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            Всичко, от което <span className="text-gradient">имате нужда</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            От луксозно настаняване до специализирана грижа - предлагаме пълен спектър 
            от услуги, които ще направят престоя на вашите кучета незабравим.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover relative ${
                  service.popular ? 'ring-2 ring-soft-pink' : ''
                }`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-soft-pink to-luxury-purple text-white text-xs font-bold px-4 py-1 rounded-full">
                      Най-популярна
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-gradient mb-4">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-soft-pink rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white font-medium py-3 px-4 rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    Резервирай
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-handwriting font-bold text-gray-800 mb-4">
            💡 Специални оферти
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            При резервация за повече от 5 дни получавате 15% отстъпка, а при резервация 
            за повече от 10 дни - 25% отстъпка! Също така предлагаме семейни пакети 
            за собственици с повече от едно куче.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <span className="bg-white/80 text-luxury-purple px-6 py-2 rounded-full font-medium">
              🎉 15% отстъпка за 5+ дни
            </span>
            <span className="bg-white/80 text-luxury-purple px-6 py-2 rounded-full font-medium">
              🎉 25% отстъпка за 10+ дни
            </span>
            <span className="bg-white/80 text-luxury-purple px-6 py-2 rounded-full font-medium">
              👨‍👩‍👧‍👦 Семейни пакети
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesList
