'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactMap from '@/components/sections/contact/ContactMap'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactMap />
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

