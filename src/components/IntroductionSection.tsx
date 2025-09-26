

import { Button } from '@/components/ui/button';
import { Play, Users, Globe, Triangle } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <>
      {/* Section Header with Visual Identifier */}
      <section className="w-full py-12 lg:py-16 text-center relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 rounded-full" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}></div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}></div>
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: 'hsl(var(--iifb-orange))' }}>About the Meetings</span>
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            WELCOME TO
            <span className="block mt-2 relative" style={{ color: 'hsl(var(--iifb-orange))' }}>
              SBSTTA-27 AND SB8J-1, PANAMA 2025
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent to-transparent" style={{ background: `linear-gradient(to right, transparent, hsl(var(--iifb-orange)), transparent)` }}></div>
            </span>
          </h2>
           <div className="space-y-8 max-w-7xl mx-auto">
             {/* Main Content - Single Column Layout */}
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-8">
                <div className="text-left mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                    <Triangle className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">IIFB Welcome</span>
                  </div>
                </div>
                <div className="space-y-6 text-lg text-foreground leading-relaxed text-left">
                 <p>
                   The International Indigenous Forum on Biodiversity (IIFB) welcomes Indigenous Peoples and local communities to the First meeting of the Subsidiary Body on Article 8(j) and Other Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities (SB8J-1) and related CBD meetings.
                 </p>
                 <p>
                   The Co-chairs of the International Indigenous Forum on Biodiversity (IIFB), Lucy Mulenkei and Ramiro Batzin, welcome Indigenous Peoples and local communities' brothers and sisters attending the following CBD meetings:
                 </p>
                 <p className="ml-6 text-lg">
                   • First meeting of the Subsidiary Body on Article 8(j) and Other Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities (SB8J-1), 27–30 October 2025, Panama City, Panama
                 </p>
                 <p className="ml-6 text-lg">
                   • Twenty-seventh meeting of the Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA-27), 20–24 October 2025, Panama City, Panama
                 </p>
                 <p className="ml-6 text-lg">
                   • Workshop on the assessments adopted by the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services in 2024 and forthcoming assessments (SA-WS-2025-01), 18 October 2025, Panama City, Panama
                 </p>
                 <p>
                   The IIFB will provide support to Indigenous Peoples and local communities in preparation for the meeting, providing documents, practical logistics information, and organizing virtual preparatory meetings as well as in-person sessions. The IIFB invites you to explore the materials, stay informed, and participate actively in this process.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </section>
      
      <section className="py-12 lg:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* YouTube Video Section - Left Side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-strong bg-muted aspect-video border-4 border-white/50">
                <iframe
                  src="https://www.youtube.com/embed/OyaaBjq1Gyk"
                  title="CBD Panama 2025 Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                
              </div>
            </div>

            {/* YouTube Video Section - Right Side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-strong bg-muted aspect-video border-4 border-white/50">
                <iframe
                  src="https://www.youtube.com/embed/cUvPh1e8E10"
                  title="CBD Panama 2025 Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                
              </div>
            </div>
          </div>

          {/* Inspirational Quote Section */}
          <div className="mt-12 lg:mt-16 flex justify-center px-4">
            <div className="w-full max-w-4xl text-center">
              <blockquote className="bg-transparent">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 leading-tight">
                  <span className="block relative inline-block" style={{ color: 'hsl(var(--iifb-orange))' }}>
                    "Let&apos;s work together with one voice to make a historical SB8J-1 for Mother Earth!"
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1" style={{ background: `linear-gradient(to right, transparent, hsl(var(--iifb-orange)), transparent)` }}></div>
                  </span>
                </h2>
              </blockquote>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default IntroductionSection;

