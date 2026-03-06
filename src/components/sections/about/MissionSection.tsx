import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Target, Eye, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const MissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const missionPoints = [
    {
      icon: Heart,
      title: 'Нашата мисия',
      description: 'Да създаваме място, където всеки четириног приятел получава най-добрата грижа, любов и внимание, които заслужава.',
      color: 'from-soft-pink to-luxury-purple'
    },
    {
      icon: Target,
      title: 'Нашата визия',
      description: 'Да бъдем най-добрият луксозен хотел за кучета в региона, известен с професионализма и грижата си.',
      color: 'from-luxury-purple to-premium-gold'
    },
    {
      icon: Eye,
      title: 'Нашите ценности',
      description: 'Любов, професионализъм, безопасност и непрекъснато подобрение на услугите за максимално щастие на нашите гости.',
      color: 'from-premium-gold to-soft-pink'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-luxury-purple via-soft-pink to-premium-gold relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 text-8xl floating">🐕</div>
        <div className="absolute top-20 right-20 text-6xl floating" style={{ animationDelay: '2s' }}>🐾</div>
        <div className="absolute bottom-20 left-1/4 text-7xl floating" style={{ animationDelay: '4s' }}>💕</div>
        <div className="absolute bottom-10 right-10 text-5xl floating" style={{ animationDelay: '1s' }}>✨</div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
          >
            <Heart className="w-5 h-5 text-white" />
            <span className="font-medium">Нашата мисия</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-handwriting font-bold mb-6">
            Защо <span className="text-white">съществуваме</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Всяко куче заслужава да бъде третирано като принц или принцеса. 
            Нашата мисия е да създаваме такива моменти всеки ден.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {missionPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${point.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                  {point.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center bg-white/20 backdrop-blur-sm rounded-2xl p-8"
        >
          <h3 className="text-2xl font-handwriting font-bold text-white mb-4">
            Готови ли сте да се присъедините към нашето семейство?
          </h3>
          
          <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
            Резервирайте място за вашия любимец и му дайте възможността да изживее 
            незабравимо преживяване в луксозния ни хотел.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact" 
              className="bg-white text-luxury-purple px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center space-x-2"
            >
              <span>Резервирай сега</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionSection
