import { motion } from 'framer-motion'
import { Home, Car, Utensils, Sun } from 'lucide-react'

const ServicesList = () => {

  const services = [
    {
      icon: Home,
      title: 'Луксозно настаняване',
      description: 'Комфортни стаи с модерни удобства за най-доброто преживяване на вашите кучета.',
      features: [
        'Индивидуални стаи',
        'Топли и уютни легълца',
        'Подово отопление',
        'Климатизация',
        'Гурме закуски и вечери',
        '24/7 човешко присъствие и внимание'
      ],
      price: '55€ на нощ',
      color: 'from-soft-pink to-luxury-purple',
      popular: true
    },
    {
      icon: Car,
      title: 'Такси',
      description: 'Транспорт от и до София.',
      features: [
        'Само София и София област',
        '30€ в една посока',
        'Гъвкави часове'
      ],
      price: '30€/посока',
      color: 'from-soft-pink to-luxury-purple',
      popular: false
    },
    {
      icon: Sun,
      title: 'Дневна ясла',
      description: 'Дневна грижа без нощувка – идеално за заети стопани.',
      features: [
        'Целодневна грижа',
        'Игри и разходки',
        'Индивидуално внимание'
      ],
      price: '25€',
      color: 'from-premium-gold to-soft-pink',
      popular: false
    },
    {
      icon: Utensils,
      title: 'Специализирано хранене',
      description: 'Персонализирано меню за всяко куче, отговарящо на неговите нужди и предпочитания.',
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
    }
  ]

  return (
    <section className="section-padding bg-white/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-handwriting font-bold mb-4">
            <span className="text-gradient">Услуги и цени</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Луксозно настаняване, дневна ясла, транспорт и специализирано хранене в Сапарева баня.
          </p>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
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
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesList
