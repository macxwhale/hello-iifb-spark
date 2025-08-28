
import { Button } from '@/components/ui/button';
import { Play, Users, Globe, Triangle } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <>
      {/* Section Header with Visual Identifier */}
      <section className="w-full py-12 lg:py-16 text-center relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full" style={{ backgroundColor: '#741b00' }}></div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#741b00' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#741b00' }}>About the Meetings</span>
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#741b00' }}></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            WELCOME TO
            <span className="block mt-2 relative" style={{ color: '#741b00' }}>
              SBSTTA-27 AND SB8J-1, PANAMA 2025
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent to-transparent" style={{ background: `linear-gradient(to right, transparent, #741b00, transparent)` }}></div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content - Left Side */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-1 bg-secondary rounded-full"></div>
                  <span className="text-secondary font-medium uppercase tracking-wide text-sm">Historic Gathering</span>
                </div>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  CBD Panama 2025 marks a historic moment in global biodiversity governance, as Indigenous Peoples and local communities will, for the first time, have their own dedicated subsidiary body within the Convention on Biological Diversity (CBD).
                </p>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  In October 2025, the CBD will host two key meetings in Panama City, the Twenty-seventh meeting of the Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA-27), from 20–24 October, to provide scientific guidance for implementing the Global Biodiversity Framework, and the inaugural meeting of the Subsidiary Body on Article 8(j) and Other Provisions (SB8J-1), from 27–30 October, focusing on safeguarding and promoting the knowledge, innovations, and practices of Indigenous Peoples and local communities.
                </p>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Together, these bodies will play a critical role in advancing the objectives of the CBD at a time when urgent action is needed to address global biodiversity challenges.
                </p>
              </div>
            </div>

            {/* YouTube Video Section - Right Side */}
            <div className="relative">
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
          </div>

          {/* Feature Cards - Below Video, Horizontal Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 lg:mt-16">
            <div className="border-l-4 rounded-r-xl p-6 hover:shadow-medium transition-all duration-300 group" style={{ backgroundColor: 'rgba(116, 27, 0, 0.1)', borderLeftColor: '#741b00' }}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 rounded-full group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(116, 27, 0, 0.2)' }}>
                  <Users className="h-6 w-6" style={{ color: '#741b00' }} />
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
      </section>
    </>
  );
};

export default IntroductionSection;
