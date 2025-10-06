import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Home, Scissors, Dumbbell, Car, ArrowRight, Star } from 'lucide-react'

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
      price: 'от 50лв/ден',
      features: ['Индивидуални стаи', 'Климатизация', '24/7 наблюдение']
    },
    {
      icon: Scissors,
      title: 'Професионален груминг',
      description: 'Пълна грижа за кожата и козината от опитни майстори.',
      price: 'от 30лв',
      features: ['Почистване', 'Стрижка', 'Нокти и уши']
    },
    {
      icon: Dumbbell,
      title: 'Тренировки и игри',
      description: 'Активни игри и упражнения за поддържане на здравето и щастието.',
      price: 'включено',
      features: ['Дневни игри', 'Упражнения', 'Социализация']
    },
    {
      icon: Car,
      title: 'Транспорт услуги',
      description: 'Безопасен транспорт до и от хотела с професионален шофьор.',
      price: 'от 20лв',
      features: ['Безопасен транспорт', 'Климатизация', 'Специални клетки']
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
          >
            <Star className="w-5 h-5 text-premium-gold" />
            <span className="text-luxury-purple font-medium">Нашите услуги</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Луксозни услуги</span> за вашите любимци
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Предлагаме пълен спектър от професионални услуги, които ще направят 
            престоя на вашите кучета незабравим и приятен.
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
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-soft-pink rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 text-luxury-purple font-medium py-2 px-4 rounded-lg hover:from-soft-pink/30 hover:to-luxury-purple/30 transition-all duration-300"
                  >
                    Научи повече
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

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
