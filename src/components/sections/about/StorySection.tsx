import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart } from 'lucide-react'

const StorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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
            <Heart className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Нашата история</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-10">
            Как започна <span className="text-gradient">всичко</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg"
        >
          <h3 className="text-2xl font-handwriting font-bold text-luxury-purple mb-8">Roza</h3>

          <div className="text-gray-700 leading-relaxed space-y-5 text-left">
            <p>
              Още от малка нося вътрешното разбиране и нужда да помагам на тези, които си нямат никого на този свят – бездомните животинки. Когато ги прибирах у дома, се стараех да им осигуря най-добрите условия и грижи, за да им помогна да забравят поне малка част от страха и ужаса, които са изпитвали на улицата. Истината е, че ги гледах като свои деца и това продължава и до днес. Просто вярвам, че всяка спасена животинка е източник на безгранична любов и моята задача е да ѝ осигуря грижата и условията, които ѝ позволяват да покаже тази любов в пълния си потенциал.
            </p>
            <p>
              Грижата за нуждаещите се ще бъде нещо, което ще нося винаги със себе си, но съдбата имаше и друг план.
            </p>
            <p>
              През 2023 г., още преди изобщо да ми хрумне идеята за хотел, хората започнаха да забелязват грижите, които полагам за животинките. Виждаха сломените кученца, които пристигаха при мен и как само за дни, а понякога и часове, онази специална искрица в очите им се връщаше, само защото знаеха, че при мен те са на най-сигурното място на света и повече няма да позволя нищо лошо да им се случи.
            </p>
            <p>
              Виждайки това, мои познати, осиновители и напълно непознати за мен – мои последователи, започнаха да ме търсят с един и същ въпрос: „Може ли да оставим нашето куче при Вас, докато пътуваме? Искаме да е на място, където ще го обичат точно толкова, колкото и ние.“
            </p>
            <p className="text-luxury-purple font-medium">
              Търсенето се роди от Вашето доверие, преди аз самата да разбера, че това е част от моето призвание.
            </p>
            <p>
              Днес моят хотел предлага домашен уют и грижа и е продължение на онази мисия, която нося със себе си от малка. Тук всеки гост получава същото внимание, което и у дома. Защото знам, че за Вас те са семейство. За мен – също.
            </p>
            <p className="text-center text-lg font-handwriting font-semibold text-gray-800 pt-4">
              Добре дошли в мястото, което е олицетворение на любовта ми към най-чистите души. ❤️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
