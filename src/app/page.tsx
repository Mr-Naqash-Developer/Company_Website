import TrustSection from '@/sections/TrustSection'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import MeetingSection from '@/sections/MeetingSection'
import TeamSection from '@/sections/TeamSection'
import RecentWorkSection from '@/sections/RecentWorkSection'
import TimelinePage from '@/sections/TimelinePage'

const HomePage = () => {
  return (
    <div className=''>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <MeetingSection />
      <TeamSection />
      <RecentWorkSection />
      <TimelinePage />
    </div>
  )
}

export default HomePage