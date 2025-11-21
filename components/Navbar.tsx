'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart, PawPrint } from 'lucide-react'
import BookingModal from './BookingModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

      const navItems = [
        { name: 'Начало', path: '/' },
        { name: 'За нас', path: '/about' },
        { name: 'Услуги', path: '/services' },
        { name: 'Галерия', path: '/gallery' },
        { name: 'Осиновяване', path: '/adopt' },
        { name: 'Контакти', path: '/contact' }
      ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center shadow-lg">
                <PawPrint className="w-6 h-6 text-white" />
              </div>
              <Heart className="w-4 h-4 text-soft-pink absolute -top-1 -right-1 animate-pulse" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl md:text-2xl font-handwriting font-bold text-gradient">
                <span className="font-latin">Rozi's</span> Luxury
              </h1>
              <p className="text-xs sm:text-sm text-luxury-purple font-medium">
                Dog Hotel
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative group font-medium transition-colors duration-300 ${
                  pathname === item.path
                    ? 'text-luxury-purple'
                    : 'text-gray-700 hover:text-soft-pink'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-soft-pink to-luxury-purple transition-all duration-300 group-hover:w-full"></span>
                {pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-soft-pink to-luxury-purple"></span>
                )}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsBookingOpen(true)}
              className="btn-primary"
            >
              Резервация
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-soft-pink/20 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg mt-2 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                        pathname === item.path
                          ? 'bg-gradient-to-r from-soft-pink to-luxury-purple text-white'
                          : 'text-gray-700 hover:bg-soft-pink/20'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <button 
                    onClick={() => {
                      setIsBookingOpen(true)
                      setIsOpen(false)
                    }}
                    className="btn-primary w-full"
                  >
                    Резервация
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </motion.nav>
  )
}

export default Navbar
