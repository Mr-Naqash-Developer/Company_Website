import TrustSection from '@/sections/TrustSection'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import MeetingSection from '@/sections/MeetingSection'
import TeamSection from '@/sections/TeamSection'
import WayOfBuildingSection from '@/sections/WayOfBuildingSection'
import DevelopmentApproachSection from '@/sections/DevelopmentApproachSection'
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
      <WayOfBuildingSection />
      <DevelopmentApproachSection />
      <TimelinePage />
    </div>
  )
}

export default HomePage