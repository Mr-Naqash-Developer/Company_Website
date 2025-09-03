import TrustSection from '@/sections/TrustSection'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import MeetingSection from '@/sections/MeetingSection'
import TeamSection from '@/sections/TeamSection'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <MeetingSection />
      <TeamSection />
    </div>
  )
}

export default HomePage