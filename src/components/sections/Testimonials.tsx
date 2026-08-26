import { motion } from 'framer-motion'
import { Star, Quote, Heart } from 'lucide-react'

const Testimonials = () => {

  const testimonials = [
    {
      id: 5,
      name: 'Yordan Strahilov Yosifov',
      dog: 'Орео (котка) • 29 Dec 2024',
      rating: 5,
      text: 'Рози е невероятно добър и отдаден на животните човек! Всички кучета и котки получават при нея освен грижа и много обич. Качеството на предлаганата на нашите любимци храна в хотела е много висок клас, като се държи на натуралните съставки в нея. Нашият котарак Орео получи толкова много внимание и любов, че беше започнал да се чувства като у дома си. Препоръчвам @Rozi\'s Dog Hotel! Ще се върнем пак! Благодарим много за вниманието и любовта ти Рози! <3',
      image: '👨'
    },
    {
      id: 6,
      name: 'Albena Ivanova',
      dog: 'Рони • 30 Sep 2023',
      rating: 5,
      text: 'Изключително приветливо и приятелско място. Нашата Рони беше много щастлива там. Кучетата се движат свободно. Домакинята е страшно мило, интелигентно момиче, което обожава кучетата и много се грижи за тях. Помага непрестанно на кучковци в беда. Впечатлена съм. Пак бихме я потърсили при следващо посещение на Сапарева баня. Благодарим ❤️',
      image: '👩'
    },
    {
      id: 7,
      name: 'Венета Стайкова',
      dog: 'Чарли • 21 Aug 2023',
      rating: 5,
      text: 'Това е прекрасно място! Момичетата, които гледат кученцата са много грижовни и организирани. Пак ще закарам моя Чарли! Благодаря ви!',
      image: '👩'
    },
    {
      id: 8,
      name: 'Boyana Hristova',
      dog: '18 Jul 2023',
      rating: 5,
      text: 'За нас това е прекрасно място за всички кученца и бяхме много спокойни, че е в най-добрите ръце! Благодарим безкрайно на Роза, която гледа всички кученца с много любов като нейни собствени. Най-добрият хотел за кученца, препоръчваме с 2 ръце! 🥰❤️',
      image: '👩'
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
              initial={false}
              animate={{ opacity: 1, y: 0 }}
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
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '300+', label: 'Доволни клиенти' },
              { number: '5/5', label: 'Засега са 5/5' },
              { number: '300+', label: 'Щастливи кучета' },
              { number: '5★', label: '5 звезди отзиви от клиенти' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
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
