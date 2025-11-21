'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import LoadingScreen from '@/components/LoadingScreen'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'
import { useInView } from 'react-intersection-observer'
import Hero from '@/components/sections/Hero'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesPreview from '@/components/sections/ServicesPreview'
import GalleryPreview from '@/components/sections/GalleryPreview'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Navbar />
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20"
          >
            {/* Hero Section */}
            <Hero />
            
            {/* About Preview */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <AboutPreview />
            </motion.div>
            
            {/* Services Preview */}
            <ServicesPreview />
            
            {/* Gallery Preview */}
            <GalleryPreview />
            
            {/* Testimonials */}
            <Testimonials />
            
            {/* Call to Action */}
            <CTA />
          </motion.main>
          <Footer />
          <CookieConsent 
            onAccept={() => {}}
            onReject={() => {}}
            onCustomize={() => {}}
          />
          <ChatBot />
        </>
      )}
    </>
  )
}

