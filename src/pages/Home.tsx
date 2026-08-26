import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import ServicesPreview from '../components/sections/ServicesPreview'
import GalleryPreview from '../components/sections/GalleryPreview'
import PricingPreview from '../components/sections/PricingPreview'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      
      {/* Pricing preview - прозорче към ценоразписа */}
      <PricingPreview />
      
      {/* Gallery Preview */}
      <GalleryPreview />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Call to Action */}
      <CTA />
    </div>
  )
}

export default Home
