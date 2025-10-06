import ServicesHero from '../components/sections/services/ServicesHero'
import ServicesList from '../components/sections/services/ServicesList'
import PricingSection from '../components/sections/services/PricingSection'
import BookingSection from '../components/sections/services/BookingSection'

const Services = () => {
  return (
    <div className="pt-20">
      <ServicesHero />
      <ServicesList />
      <PricingSection />
      <BookingSection />
    </div>
  )
}

export default Services
