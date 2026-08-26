import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Euro, ArrowRight, Home, Car, Sun } from 'lucide-react'

const PricingPreview = () => {

  const prices = [
    { icon: Home, label: 'Нощувка', value: '55€', sub: 'на нощ' },
    { icon: Car, label: 'Транспорт', value: '30€', sub: 'в една посока (София и област)' },
    { icon: Sun, label: 'Дневна ясла', value: '25€', sub: 'дневна грижа без нощувка' }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-warm-white via-soft-lavender/20 to-light-peach/30">
      <div className="container-custom">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-soft-pink/20 overflow-hidden card-hover"
          >
            <div className="bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 px-6 py-4 border-b border-soft-pink/20">
              <div className="flex items-center justify-center gap-2">
                <Euro className="w-5 h-5 text-luxury-purple" />
                <h2 className="text-xl font-elegant font-semibold text-gray-800">
                  Ценоразпис
                </h2>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {prices.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={false}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center justify-between gap-4 py-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-soft-pink/30 to-luxury-purple/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-luxury-purple" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{item.label}</div>
                        <div className="text-sm text-gray-500">{item.sub}</div>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gradient whitespace-nowrap">
                      {item.value}
                    </span>
                  </motion.div>
                )
              })}
            </div>

            <div className="px-6 pb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/services"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-soft-pink to-luxury-purple text-white font-medium hover:opacity-90 transition-opacity"
                >
                  <span>Виж пълния ценоразпис и услуги</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingPreview
