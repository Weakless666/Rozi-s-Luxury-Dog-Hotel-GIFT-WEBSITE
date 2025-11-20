'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServicesList from '@/components/sections/services/ServicesList'
import BookingSection from '@/components/sections/services/BookingSection'

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <ServicesHero />
        <ServicesList />
        <BookingSection />
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

