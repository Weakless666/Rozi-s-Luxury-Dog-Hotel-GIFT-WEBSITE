import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { Home, Scissors, Dumbbell, Heart, Camera, Star } from 'lucide-react'

const GalleryCategories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    {
      id: 'all',
      name: 'Всички',
      icon: Camera,
      color: 'from-soft-pink to-luxury-purple'
    },
    {
      id: 'rooms',
      name: 'Стаи и помещения',
      icon: Home,
      color: 'from-luxury-purple to-premium-gold'
    },
    {
      id: 'grooming',
      name: 'Груминг',
      icon: Scissors,
      color: 'from-premium-gold to-soft-pink'
    },
    {
      id: 'activities',
      name: 'Игри и упражнения',
      icon: Dumbbell,
      color: 'from-soft-pink to-luxury-purple'
    },
    {
      id: 'happy-dogs',
      name: 'Щастливи кучета',
      icon: Heart,
      color: 'from-luxury-purple to-premium-gold'
    },
    {
      id: 'special-moments',
      name: 'Специални моменти',
      icon: Star,
      color: 'from-premium-gold to-soft-pink'
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 rounded-full px-6 py-3 mb-6 shadow-lg"
          >
            <Camera className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Категории</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            <span className="text-gradient">Разгледайте</span> по категории
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Изберете категория, за да видите снимки от различните аспекти на живота 
            в нашия хотел и услугите, които предлагаме.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Category description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center"
        >
          {activeCategory === 'all' && (
            <div className="bg-gradient-to-br from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-8">
              <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                Всички снимки
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Разгледайте пълната галерия с всички снимки от нашия хотел. 
                От красивите стаи до щастливите моменти с нашите гости - 
                всичко е тук за да ви покаже какво може да очаквате.
              </p>
            </div>
          )}
          
          {activeCategory === 'rooms' && (
            <div className="bg-gradient-to-br from-luxury-purple/20 to-premium-gold/20 rounded-2xl p-8">
              <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                Стаи и помещения
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Луксозните стаи и общите пространства в нашия хотел са проектирани 
                с внимание към детайла, за да осигурят максимален комфорт на нашите гости.
              </p>
            </div>
          )}
          
          {activeCategory === 'grooming' && (
            <div className="bg-gradient-to-br from-premium-gold/20 to-soft-pink/20 rounded-2xl p-8">
              <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                Груминг услуги
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Нашите професионални груминг услуги ще направят всяко куче да изглежда 
                и се чувства невероятно. От почистване до стрижка - всичко с любов и внимание.
              </p>
            </div>
          )}
          
          {activeCategory === 'activities' && (
            <div className="bg-gradient-to-br from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-8">
              <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                Игри и упражнения
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Активните игри и упражнения са важна част от престоя в нашия хотел. 
                Вижте как нашите гости се наслаждават на забавленията.
              </p>
            </div>
          )}
          
          {activeCategory === 'happy-dogs' && (
            <div className="bg-gradient-to-br from-luxury-purple/20 to-premium-gold/20 rounded-2xl p-8">
              <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                Щастливи кучета
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Най-важното за нас е щастието на нашите гости. Тези снимки показват 
                истинските емоции и радост, които изпитват кучетата в нашия хотел.
              </p>
            </div>
          )}
          
          {activeCategory === 'special-moments' && (
            <div className="bg-gradient-to-br from-premium-gold/20 to-soft-pink/20 rounded-2xl p-8">
              <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                Специални моменти
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                От рождени дни до семейни снимки - съхраняваме всички специални моменти 
                в живота на нашите гости и техните собственици.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryCategories
