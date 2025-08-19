
import { Button } from '@/components/ui/button';
import { Play, Users, Globe, Triangle } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <>
      {/* Section Header with Visual Identifier */}
      <section className="w-full py-12 lg:py-16 text-center relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">About the Meetings</span>
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Welcome to
            <span className="block text-primary mt-2 relative">
              CBD Panama 2025
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A landmark gathering bringing together global leaders, scientists, and Indigenous communities to advance biodiversity conservation
          </p>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-12 lg:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* YouTube Video Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-strong bg-muted aspect-video border-4 border-white/50">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="CBD Panama 2025 Introduction"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                
                {/* Enhanced overlay */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <span className="text-white text-sm font-semibold">CBD Panama 2025</span>
                </div>
              </div>
            </div>

            {/* Enhanced Text Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-secondary rounded-full"></div>
                  <span className="text-secondary font-medium uppercase tracking-wide text-sm">Historic Gathering</span>
                </div>
                
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Panama City will host two critical meetings that will shape the future of biodiversity governance. SBSTTA-27 will provide scientific guidance for implementing the Global Biodiversity Framework, while SB8J-1 marks a historic milestone in recognizing Indigenous Peoples' rights.
                </p>
                
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Join us for this unprecedented gathering that represents a new era of inclusive decision-making in biodiversity conservation.
                </p>
              </div>

              {/* Enhanced Feature Cards */}
              <div className="grid grid-cols-1 gap-6 pt-8">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-l-primary rounded-r-xl p-6 hover:shadow-medium transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Indigenous Leadership
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        First-ever subsidiary body for Indigenous Peoples and local communities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-l-4 border-l-secondary rounded-r-xl p-6 hover:shadow-medium transition-all duration-300 group">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-3 bg-secondary/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Global Impact
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Advancing the Global Biodiversity Framework for nature-positive outcomes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroductionSection;
