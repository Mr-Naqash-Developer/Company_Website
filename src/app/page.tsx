import TrustSection from '@/sections/TrustSection'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import MeetingSection from '@/sections/MeetingSection'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <MeetingSection />
    </div>
  )
}

export default HomePage