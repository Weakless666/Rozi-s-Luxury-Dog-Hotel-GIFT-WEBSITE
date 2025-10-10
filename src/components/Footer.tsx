import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, PawPrint, Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'За нас', path: '/about' },
      { name: 'Услуги', path: '/services' },
      { name: 'Галерия', path: '/gallery' },
      { name: 'Осиновяване', path: '/adopt' },
      { name: 'Контакти', path: '/contact' }
    ],
    services: [
      { name: 'Настаняване', path: '/services#accommodation' },
      { name: 'Груминг', path: '/services#grooming' },
      { name: 'Тренировки', path: '/services#training' },
      { name: 'Транспорт', path: '/services#transport' }
    ],
    contact: [
      { name: 'Телефон', value: '+359 888 123 456', icon: Phone },
      { name: 'Имейл', value: 'info@rozis-dog-hotel.com', icon: Mail },
      { name: 'Viber', value: '+359 888 123 456', icon: MessageCircle },
      { name: 'Адрес', value: 'Сапарева баня, България', icon: MapPin }
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-luxury-purple via-soft-pink to-warm-white text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="paw-bg absolute inset-0"></div>
        <div className="absolute top-10 left-10 text-6xl opacity-20">🐾</div>
        <div className="absolute top-20 right-20 text-4xl opacity-20">💕</div>
        <div className="absolute bottom-10 left-1/4 text-5xl opacity-20">🐕</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-20">✨</div>
      </div>

      <div className="container-custom relative z-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-handwriting font-bold">
                    Rozi's Luxury
                  </h3>
                  <p className="text-sm opacity-90">Dog Hotel</p>
                </div>
              </div>
              <p className="text-white/90 mb-6 leading-relaxed">
                Луксозен хотел за кучета, където вашите четирикраки приятели получават 
                най-добрата грижа, любов и внимание.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://www.instagram.com/rozis_luxury_dog_hotel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  href="https://www.facebook.com/profile.php?id=100058613121575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-elegant font-semibold mb-6">
                Компания
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/90 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-elegant font-semibold mb-6">
                Услуги
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/90 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-xl font-elegant font-semibold mb-6">
                Контакти
              </h4>
              <ul className="space-y-4">
                {footerLinks.contact.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <li key={contact.name} className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-soft-pink flex-shrink-0" />
                      <span className="text-white/90">{contact.value}</span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/80 text-sm">
                © {currentYear} <span className="font-latin">Rozi's</span> Luxury Dog Hotel. Всички права запазени.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Политика за поверителност
                </Link>
                <Link to="/terms-of-service" className="hover:text-white transition-colors">
                  Условия за ползване
                </Link>
                <Link to="/cookie-policy" className="hover:text-white transition-colors">
                  Политика за бисквитки
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <span>Направено с</span>
                <Heart className="w-4 h-4 text-soft-pink animate-pulse" />
                <span>за нашите четирикраки приятели</span>
              </div>
              <div className="text-xs text-white/60">
                Made By: <span className="font-semibold text-soft-pink">Weakless666</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
