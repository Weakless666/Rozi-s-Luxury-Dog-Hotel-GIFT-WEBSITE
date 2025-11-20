'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Home, Users, Award } from 'lucide-react'

const StorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const storySteps = [
    {
      year: '2019',
      title: 'Началото на мечтата',
      description: 'Rozi започва своята мечта с малка клиника за кучета, където всеки ден учи нови неща за грижата за животните.',
      icon: Heart,
      color: 'from-soft-pink to-luxury-purple'
    },
    {
      year: '2020',
      title: 'Първите клиенти',
      description: 'Първите доволни клиенти и техните кучета доказват, че професионалната грижа и любовта са ключът към успеха.',
      icon: Users,
      color: 'from-luxury-purple to-premium-gold'
    },
    {
      year: '2021',
      title: 'Разширяване',
      description: 'Откриваме първия луксозен хотел за кучета с модерни съоръжения и професионален екип.',
      icon: Home,
      color: 'from-premium-gold to-soft-pink'
    },
    {
      year: '2024',
      title: 'Признание',
      description: 'Ставаме най-оценяваният хотел за кучета в региона с над 500 доволни клиенти и 5-звезден рейтинг.',
      icon: Award,
      color: 'from-soft-pink to-luxury-purple'
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
            <Heart className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Нашата история</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            Как започна <span className="text-gradient">любовта</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Историята на <span className="font-latin">Rozi's</span> Luxury Dog Hotel е история за страст, преданост и 
            безгранична любов към животните. Ето как всичко започна...
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-soft-pink via-luxury-purple to-premium-gold rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {storySteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.1, duration: 0.6 }}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                    >
                      <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${step.color} text-white rounded-full px-4 py-2 mb-4`}>
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{step.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Spacer for odd items */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16 bg-gradient-to-br from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-handwriting font-bold text-gray-800 mb-4">
            И историята продължава...
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Всеки ден учим нови неща, всеки ден подобряваме услугите си и всеки ден 
            помагаме на още кучета да бъдат щастливи. Нашата мисия е да създаваме 
            място, където любовта и професионализмът се срещат.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
