import HeroSection from '../components/sections/about/HeroSection'
import StorySection from '../components/sections/about/StorySection'
import TeamSection from '../components/sections/about/TeamSection'
import ValuesSection from '../components/sections/about/ValuesSection'
import MissionSection from '../components/sections/about/MissionSection'

const About = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <MissionSection />
    </div>
  )
}

export default About
