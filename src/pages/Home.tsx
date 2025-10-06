import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import ServicesPreview from '../components/sections/ServicesPreview'
import GalleryPreview from '../components/sections/GalleryPreview'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div className="pt-20">
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
    </div>
  )
}

export default Home
