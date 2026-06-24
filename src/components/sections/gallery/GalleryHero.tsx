import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const GalleryHero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="section-padding bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-handwriting font-bold mb-6"
          >
            <span className="text-gradient">Щастливи моменти</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
          >
            Разгледайте снимки от ежедневния живот в нашия хотел и вижте как
            вашите четириноги приятели ще се наслаждават на времето си тук.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryHero
