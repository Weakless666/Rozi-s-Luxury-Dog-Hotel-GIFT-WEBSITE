'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'
import HeroSection from '@/components/sections/about/HeroSection'
import StorySection from '@/components/sections/about/StorySection'
import TeamSection from '@/components/sections/about/TeamSection'
import ValuesSection from '@/components/sections/about/ValuesSection'
import MissionSection from '@/components/sections/about/MissionSection'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <TeamSection />
        <MissionSection />
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

