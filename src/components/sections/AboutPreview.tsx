import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { Heart, Users, Award, ArrowRight } from 'lucide-react'

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Heart,
      title: 'Любов и грижа',
      description: 'Всяко куче получава индивидуално внимание и безгранична любов от нашия екип.'
    },
    {
      icon: Users,
      title: 'Професионален екип',
      description: 'Професионалисти с безусловна любов към четириногите и години опит в грижата за най-чистите души.'
    },
    {
      icon: Award,
      title: 'Луксозни условия',
      description: 'Модерни помещения, комфортни легла и игрища за най-доброто преживяване.'
    }
  ]

  return (
    <section className="section-padding bg-white/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 rounded-full px-4 py-2 mb-6"
            >
              <Heart className="w-4 h-4 text-soft-pink" />
              <span className="text-luxury-purple font-medium text-sm">За нас</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
              Място, където <span className="text-gradient">любовта</span> среща <span className="text-gradient">лукса</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              В <span className="font-latin">Rozi's</span> Luxury Dog Hotel вярваме, че всеки четириног приятел заслужава най-доброто. 
              Нашият хотел е създаден с любов и внимание към детайла, за да осигури на вашите кучета 
              не само комфорт, но и истинско щастие.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              С професионален екип, модерни съоръжения и безгранична грижа, ние създаваме 
              преживяване, което ще направи вашите кучета да се чувстват като принцове и принцеси.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/about" 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Научи повече</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-elegant font-semibold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
