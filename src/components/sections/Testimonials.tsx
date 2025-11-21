import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, Heart } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      id: 1,
      name: 'Мария Петрова',
      dog: 'Боби (Златен ретривър)',
      rating: 5,
      text: 'Невероятно място! Боби беше толкова щастлив, че не искаше да си тръгва. Професионалният екип и луксозните условия направиха престоя му незабравим.',
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'Иван Димитров',
      dog: 'Луна (Френски булдог)',
      rating: 5,
      text: 'Rozi\'s Hotel е най-добрият избор за нашата Луна. Грижата и внимание, които получи, бяха изключителни. Определено ще се върнем!',
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Елена Стоянова',
      dog: 'Макс (Немска овчарка)',
      rating: 5,
      text: 'Като ветеринар, мога да кажа, че стандартите в този хотел са на най-високо ниво. Макс се чувстваше като принц!',
      image: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'Петър Георгиев',
      dog: 'Мия (Йоркширски териер)',
      rating: 5,
      text: 'Нашата малка Мия беше толкова добре обгрижена, че дори не ни липсваше. Професионализмът и любовта към животните са видими навсякъде.',
      image: '👨‍🎓'
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
            <Heart className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Отзиви от клиенти</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            Какво казват <span className="text-gradient">нашите клиенти</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Доверието и щастието на нашите клиенти е най-важното за нас. 
            Ето какво казват за преживяването си в нашия хотел.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-premium-gold fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-elegant font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.dog}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Доволни клиенти' },
              { number: '4.9/5', label: 'Среден рейтинг' },
              { number: '1000+', label: 'Щастливи кучета' },
              { number: '5★', label: 'Отзиви в Google' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
