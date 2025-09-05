
import HeroBanner from '@/components/HeroBanner';
import IntroductionSection from '@/components/IntroductionSection';
import MeetingsSection from '@/components/MeetingsSection';
import EventsSection from '@/components/EventsSection';
import NewsCarousel from '@/components/NewsCarousel';
import SideEventsCarousel from '@/components/SideEventsCarousel';
import StatementsCarousel from '@/components/StatementsCarousel';

import SectionBackground from '@/components/SectionBackground';

const Index = () => {
  return (
    <div className="bg-background" style={{ '--custom-orange': 'hsl(var(--iifb-orange))' } as React.CSSProperties}>
      {/* Hero Section - Gradient background */}
      <SectionBackground variant="hero">
        <HeroBanner />
      </SectionBackground>
      
      {/* Introduction Section */}
      <SectionBackground variant="introduction">
        <IntroductionSection />
      </SectionBackground>
      
      {/* Meetings Section */}
      <SectionBackground variant="meetings">
        <MeetingsSection />
      </SectionBackground>
      
      {/* Events Section */}
      <SectionBackground variant="events">
        <EventsSection />
      </SectionBackground>
      
      {/* Statements Section */}
      <SectionBackground variant="statements">
        <StatementsCarousel />
      </SectionBackground>
      
      {/* News Section */}
      <SectionBackground variant="news">
        <NewsCarousel />
      </SectionBackground>
      
      {/* Side Events Section */}
      <SectionBackground variant="side-events">
        <SideEventsCarousel />
      </SectionBackground>
      
    </div>
  );
};

export default Index;
