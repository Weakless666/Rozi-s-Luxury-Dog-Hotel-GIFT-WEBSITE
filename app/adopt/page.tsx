'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'

interface AdoptDog {
  id: number
  name: string
  breed: string
  age: string
  gender: string
  size: string
  description: string
  medicalInfo: string
  personality: string[]
  images: string[]
  contactInfo: {
    phone: string
    email: string
    location: string
  }
  dateAdded: string
  isAdopted: boolean
}

export default function Adopt() {
  const [dogs, setDogs] = useState<AdoptDog[]>([])
  const [selectedDog, setSelectedDog] = useState<AdoptDog | null>(null)

  useEffect(() => {
    const sampleDogs: AdoptDog[] = []
    setDogs(sampleDogs)
  }, [])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-soft-pink/20 via-luxury-purple/20 to-premium-gold/20 overflow-hidden">
          <div className="absolute inset-0 paw-bg opacity-10"></div>
          <div className="absolute top-1/4 left-1/4 text-9xl opacity-10">🐕</div>
          <div className="absolute bottom-1/4 right-1/4 text-8xl opacity-10">❤️</div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-handwriting font-bold text-gray-800 mb-6">
                Осиновете Любов
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Всеки кученце заслужава любящ дом и семейство. В момента нямаме кучета за осиновяване, 
                но когато има такива, те ще намерят тук своята надежда за нов живот, пълна с любов и грижа.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dogs Grid */}
        <section id="dogs-grid" className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl font-elegant font-bold text-center text-gray-800 mb-12">
              Кучета за осиновяване
            </h2>
            
            {dogs.filter(dog => !dog.isAdopted).length === 0 && (
              <div className="text-center py-16">
                <div className="max-w-3xl mx-auto">
                  <div className="text-8xl mb-6">🐕💔</div>
                  <h3 className="text-3xl font-elegant font-semibold text-gray-700 mb-6">
                    В момента нямаме кучета за осиновяване
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Това е добра новина! Означава, че всички наши гости са намерили любящи домове. 
                    Когато има кучета за осиновяване, те ще се появят тук.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
      <CookieConsent 
        onAccept={() => {}}
        onReject={() => {}}
        onCustomize={() => {}}
      />
      <ChatBot />
    </>
  )
}

