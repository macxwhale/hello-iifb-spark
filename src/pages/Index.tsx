
import HeroBanner from '@/components/HeroBanner';
import IntroductionSection from '@/components/IntroductionSection';
import EventsSection from '@/components/EventsSection';
import NewsCarousel from '@/components/NewsCarousel';
import SideEventsCarousel from '@/components/SideEventsCarousel';
import StatementsCarousel from '@/components/StatementsCarousel';
import KeyResourcesSection from '@/components/KeyResourcesSection';
import SectionBackground from '@/components/SectionBackground';

const Index = () => {
  return (
    <div className="bg-background" style={{ '--custom-orange': '#741b00' } as React.CSSProperties}>
      {/* Hero Section - Gradient background */}
      <SectionBackground variant="hero">
        <HeroBanner />
      </SectionBackground>
      
      {/* Introduction Section - Weave pattern */}
      <SectionBackground variant="introduction" className="border-y-2 border-primary/20">
        <IntroductionSection />
      </SectionBackground>
      
      {/* Events Section - Diamond pattern with accent border */}
      <SectionBackground variant="events" className="border-l-8 border-l-secondary relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-accent"></div>
        <EventsSection />
      </SectionBackground>
      
      {/* Statements Section - Zigzag pattern with textured background - REMOVED BOTTOM PATTERN */}
      <SectionBackground variant="statements" className="border-y border-border/40 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px] opacity-20"></div>
        <StatementsCarousel />
      </SectionBackground>
      
      {/* News Section - Clean orange/amber background - REMOVED TOP PATTERN */}
      <SectionBackground variant="news" className="border-y-4 border-y-primary/30">
        <NewsCarousel />
      </SectionBackground>
      
      {/* Side Events Section - Clean purple/violet background with weave pattern */}
      <SectionBackground variant="side-events" className="border-t-8 border-t-accent">
        <SideEventsCarousel />
      </SectionBackground>
      
      {/* Key Resources Section - Clean rose/pink background with diamond pattern */}
      <SectionBackground variant="resources" className="border-t-4 border-t-iifb-forest">
        <KeyResourcesSection />
      </SectionBackground>
    </div>
  );
};

export default Index;
