import { motion } from 'framer-motion'
import { Heart, Shield, Star, Award } from 'lucide-react'

const ValuesSection = () => {

  const values = [
    {
      icon: Heart,
      title: 'Любов и грижа',
      description: 'Всяко куче получава индивидуално внимание и безгранична любов от нашия екип. Вярваме, че всеки четириног приятел заслужава най-доброто.',
      color: 'from-soft-pink to-luxury-purple'
    },
    {
      icon: Shield,
      title: 'Безопасност и сигурност',
      description: 'Осигуряваме максимална безопасност за всички наши гости с 24/7 наблюдение и професионални стандарти.',
      color: 'from-luxury-purple to-premium-gold'
    },
    {
      icon: Award,
      title: 'Признание и доверие',
      description: 'Над 300 доволни клиенти и 5-звезден рейтинг доказват качеството на нашите услуги и доверието, което получаваме.',
      color: 'from-luxury-purple to-premium-gold'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-soft-lavender/30 to-light-peach/30">
      <div className="container-custom">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
          >
            <Star className="w-5 h-5 text-premium-gold" />
            <span className="text-luxury-purple font-medium">Нашите ценности</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            Какво ни <span className="text-gradient">движи</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Нашите ценности са в основата на всичко, което правим. Те ни насочват 
            всеки ден в грижата за вашите четириноги приятели.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-handwriting font-bold text-gray-800 mb-4">
            Нашето обещание към вас
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Когато оставите вашия любимец при нас, обещаваме да се грижим за него 
            с поне същата любов и внимание, с които вие се грижите за него у дома. 
            Всяко куче е уникално и заслужава индивидуален подход, който отчита 
            неговите нужди, предпочитания и особености.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ValuesSection
