import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { PawPrint, Heart, Star } from 'lucide-react'

interface LoadingScreenProps {
  isLoading: boolean
  onComplete: () => void
}

const LoadingScreen = ({ isLoading, onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  const messages = [
    "Подготвяме луксозното място за вашите любимци...",
    "Настройваме най-добрите условия...",
    "Готови сме да посрещнем вашите кучета!",
    "Добре дошли в Rozi's Luxury Dog Hotel!"
  ]

  useEffect(() => {
    if (!isLoading) return

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [isLoading, onComplete])

  useEffect(() => {
    if (!isLoading) return

    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length)
    }, 1500)

    return () => clearInterval(messageTimer)
  }, [isLoading, messages.length])

  if (!isLoading) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach z-50 flex items-center justify-center"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="paw-bg absolute inset-0 opacity-20"></div>
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 text-8xl opacity-30"
          >
            🐕
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-40 right-20 text-6xl opacity-30"
          >
            🐾
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-40 left-1/4 text-7xl opacity-30"
          >
            💕
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
            className="absolute bottom-20 right-1/3 text-5xl opacity-30"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -18, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute top-1/2 left-5 text-4xl opacity-30"
          >
            🌸
          </motion.div>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center">
          {/* Logo and title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 bg-gradient-to-br from-soft-pink to-luxury-purple rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <PawPrint className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-handwriting font-bold mb-2"
            >
              <span className="text-gradient font-latin">Rozi's</span> Luxury
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-luxury-purple font-medium"
            >
              Dog Hotel
            </motion.p>
          </motion.div>

          {/* Loading message */}
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-lg text-gray-700 font-medium">
              {messages[currentMessage]}
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-80 max-w-full mx-auto mb-8 px-4">
            <div className="bg-white/30 backdrop-blur-sm rounded-full h-3 overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-soft-pink via-luxury-purple to-premium-gold rounded-full relative"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ 
                    x: ['-100%', '100%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-white/30 rounded-full"
                />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-gray-600 mt-2"
            >
              {progress}%
            </motion.p>
          </div>

          {/* Loading animation */}
          <div className="flex justify-center space-x-2 mb-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 0.6,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 bg-gradient-to-r from-soft-pink to-luxury-purple rounded-full"
              />
            ))}
          </div>

          {/* Paw prints animation */}
          <div className="flex justify-center space-x-4 mb-8">
            {[0, 1, 2, 3].map((index) => (
              <motion.div
                key={index}
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
                className="text-2xl"
              >
                🐾
              </motion.div>
            ))}
          </div>

          {/* Features preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-3 gap-4 max-w-md mx-auto"
          >
            {[
              { icon: Heart, text: "Любов", color: "from-soft-pink to-luxury-purple" },
              { icon: Star, text: "Лукс", color: "from-luxury-purple to-premium-gold" },
              { icon: PawPrint, text: "Грижа", color: "from-premium-gold to-soft-pink" }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{feature.text}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-8"
          >
            <motion.p
              animate={{ 
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-sm text-gray-500"
            >
              Приготвени с ❤️ за вашите четирикраки приятели
            </motion.p>
          </motion.div>

          {/* Floating hearts */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  opacity: 0
                }}
                animate={{ 
                  y: -50,
                  opacity: [0, 1, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
                className="absolute text-2xl"
              >
                💕
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default LoadingScreen
