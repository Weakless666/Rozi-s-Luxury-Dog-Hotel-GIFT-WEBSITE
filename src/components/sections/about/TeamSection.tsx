import { motion } from 'framer-motion'
import { Heart, Award, GraduationCap, Stethoscope } from 'lucide-react'

const TeamSection = () => {

  const teamMembers = [
    {
      name: 'Роза Иванова',
      position: 'Собственик',
      experience: '10+ години опит',
      specialty: 'Управление и грижа за кучета',
      description: 'Роза е основателката на хотела и води всички операции с безгранична страст към животните. Тя е посветена на осигуряване на най-добрата грижа за всеки гост.',
      image: '👩‍💼',
      color: 'from-soft-pink to-luxury-purple'
    }
  ]

  return (
    <section className="section-padding bg-white/50">
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 rounded-full px-6 py-3 mb-6 shadow-lg"
          >
            <Heart className="w-5 h-5 text-soft-pink" />
            <span className="text-luxury-purple font-medium">Нашият екип</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
            Нашият <span className="text-gradient">професионален екип</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Зад всеки успешен престой в нашия хотел стои цял екип от предани професионалисти, 
              които споделят една обща страст - любовта към животните и желанието да осигурят 
              най-добрата възможна грижа за вашите любимци.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Нашият екип включва опитни ветеринари, които осигуряват медицинската грижа 24/7, 
              майстори по груминг, които правят всяко куче да изглежда невероятно, специалисти 
              по тренировки, които организират забавни и полезни активности, както и грижовни 
              персонал, който се грижи за всеки детайл от ежедневния живот на нашите гости.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Всички наши специалисти са сертифицирани, с години опит и най-важното - 
              истинска любов към животните. Те работят с усмивка, сърце и професионализъм, 
              за да гарантират, че вашите кучета ще се чувстват като в дома си, но с 
              луксозни удобства и професионална грижа.
            </p>
          </div>
        </motion.div>

        {/* Call to action section */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-elegant font-bold text-gray-800 mb-4">
              Защо да изберете нас?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Защото ние не просто "гледаме" кучетата - ние ги обичаме като собствени. 
              Всеки член на нашия екип е избран не само за професионалните си умения, 
              но и за истинската си привързаност към животните. Това е разликата, 
              която прави престоя на вашите любимци незабравим!
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <span className="text-6xl">{member.image}</span>
                </motion.div>
                
                <h3 className="text-2xl font-elegant font-semibold text-gray-800 mb-3">
                  {member.name}
                </h3>
                
                <p className="text-luxury-purple font-medium mb-4 text-lg">
                  {member.position}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Award className="w-5 h-5 text-premium-gold" />
                    <span className="font-medium">{member.experience}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <GraduationCap className="w-5 h-5 text-soft-pink" />
                    <span className="font-medium">{member.specialty}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team stats */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-gradient-to-br from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Heart, number: '15+', label: 'Професионалисти в екипа', color: 'text-soft-pink' },
              { icon: Award, number: '100%', label: 'Сертифицирани специалисти', color: 'text-luxury-purple' },
              { icon: Stethoscope, number: '24/7', label: 'Медицинска грижа', color: 'text-premium-gold' },
              { icon: GraduationCap, number: '1000+', label: 'Доволни клиенти', color: 'text-soft-pink' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={false}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className={`w-16 h-16 bg-white/80 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
