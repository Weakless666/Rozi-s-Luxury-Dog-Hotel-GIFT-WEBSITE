import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Home, Car, ArrowRight, Sun } from 'lucide-react'

const ServicesPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Home,
      title: 'Луксозно настаняване',
      description: 'Комфортни стаи с модерни удобства за най-доброто преживяване на вашите кучета.',
      price: '55€ на нощ',
      features: ['Индивидуални стаи', 'Подово отопление', 'Климатизация', '24/7 наблюдение']
    },
    {
      icon: Sun,
      title: 'Дневна ясла',
      description: 'Дневна грижа за вашите кучета без нощувка – идеално за заети стопани.',
      price: '25€',
      features: ['Цялодневна грижа', 'Игри и разходки', 'Индивидуално внимание']
    },
    {
      icon: Car,
      title: 'Транспорт услуги',
      description: 'Безопасен транспорт само за София и София област.',
      price: '30€/посока',
      features: ['София и София област', '30€/посока', 'Климатизация']
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-soft-lavender/30 to-light-peach/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-soft-pink rounded-full"></div>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/services" 
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Виж всички услуги</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
