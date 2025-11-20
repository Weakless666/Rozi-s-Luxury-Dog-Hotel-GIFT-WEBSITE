'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import ChatBot from '@/components/ChatBot'
import GalleryHero from '@/components/sections/gallery/GalleryHero'
import GalleryGrid from '@/components/sections/gallery/GalleryGrid'
import GalleryCategories from '@/components/sections/gallery/GalleryCategories'

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <GalleryHero />
        <GalleryCategories />
        <GalleryGrid />
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

