
import SB8J1Navigation from '@/components/SB8J1Navigation';
import SB8J1Hero from '@/components/SB8J1Hero';
import SideEventsCarousel from '@/components/SideEventsCarousel';

const SB8J1SideEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SB8J1Hero title="Side Events" />

      {/* Navigation Section */}
      <section className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <SB8J1Navigation currentPage="side-events" />
        </div>
      </section>

      {/* Side Events Section */}
      <SideEventsCarousel />
    </div>
  );
};

export default SB8J1SideEvents;
