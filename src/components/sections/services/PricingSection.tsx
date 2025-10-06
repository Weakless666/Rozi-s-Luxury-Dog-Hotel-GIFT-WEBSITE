import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Heart } from 'lucide-react'

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const pricingPlans = [
    {
      name: 'Базов пакет',
      price: '50',
      period: 'ден',
      description: 'Идеален за кратки престои',
      color: 'from-soft-pink to-luxury-purple',
      popular: false,
      features: [
        'Индивидуална стая',
        'Основно хранене',
        '2 разходки дневно',
        'Основна грижа',
        '24/7 наблюдение'
      ]
    },
    {
      name: 'Луксозен пакет',
      price: '80',
      period: 'ден',
      description: 'Най-популярният избор',
      color: 'from-luxury-purple to-premium-gold',
      popular: true,
      features: [
        'Луксозна стая с климатизация',
        'Премиум хранене',
        '4 разходки дневно',
        'Груминг включен',
        'Игри и упражнения',
        '24/7 наблюдение',
        'Ветеринарна консултация'
      ]
    },
    {
      name: 'Премиум пакет',
      price: '120',
      period: 'ден',
      description: 'За най-взискателните',
      color: 'from-premium-gold to-soft-pink',
      popular: false,
      features: [
        'VIP стая с всички удобства',
        'Гурме хранене',
        'Неограничени разходки',
        'Пълен груминг пакет',
        'Персонални тренировки',
        '24/7 персонална грижа',
        'Ветеринарна грижа включена',
        'Фото сесия',
        'Транспорт услуги'
      ]
    }
  ]

  const additionalServices = [
    { name: 'Груминг', price: '30-50лв' },
    { name: 'Транспорт', price: '20-40лв' },
    { name: 'Фото сесия', price: '50лв' },
    { name: 'Ветеринарна консултация', price: '40лв' },
    { name: 'Специална грижа', price: 'по договаряне' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-soft-lavender/30 to-light-peach/30">
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
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
          >
            <Star className="w-5 h-5 text-premium-gold" />
            <span className="text-luxury-purple font-medium">Цени и пакети</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Прозрачни цени</span> за всички услуги
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Изберете пакета, който най-добре отговаря на нуждите на вашия любимец. 
            Всички цени са прозрачни и без скрити такси.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover relative ${
                plan.popular ? 'ring-2 ring-soft-pink scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-soft-pink to-luxury-purple text-white text-sm font-bold px-6 py-2 rounded-full flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>Най-популярен</span>
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gradient">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-lg ml-2">
                    лв/{plan.period}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300`}
                >
                  Избери пакет
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-elegant font-semibold text-gray-800 text-center mb-8">
            Допълнителни услуги
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center bg-gradient-to-br from-soft-pink/20 to-luxury-purple/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {service.name}
                </h4>
                <p className="text-luxury-purple font-bold">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Special offers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 bg-gradient-to-br from-luxury-purple/20 to-soft-pink/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-handwriting font-bold text-gray-800 mb-6">
            🎉 Специални оферти и отстъпки
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Ранна резервация
              </h4>
              <p className="text-gray-600 mb-3">
                Резервирайте 30+ дни предварително
              </p>
              <span className="text-2xl font-bold text-gradient">
                20% отстъпка
              </span>
            </div>
            
            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Дългосрочен престой
              </h4>
              <p className="text-gray-600 mb-3">
                За престой над 10 дни
              </p>
              <span className="text-2xl font-bold text-gradient">
                25% отстъпка
              </span>
            </div>
            
            <div className="bg-white/80 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Семейни пакети
              </h4>
              <p className="text-gray-600 mb-3">
                За 2+ кучета от едно семейство
              </p>
              <span className="text-2xl font-bold text-gradient">
                15% отстъпка
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
