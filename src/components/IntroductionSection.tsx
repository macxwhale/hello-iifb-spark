

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
              SBSTTA 27 AND SB8J-1, PANAMA 2025
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent to-transparent" style={{ background: `linear-gradient(to right, transparent, hsl(var(--iifb-orange)), transparent)` }}></div>
            </span>
          </h2>
           <div className="space-y-8 max-w-7xl mx-auto">
             {/* Welcome and Co-chairs in 2-column layout */}
             <div className="grid lg:grid-cols-2 gap-8">
               {/* Welcome Message */}
               <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl p-6">
                 <div className="text-center mb-4">
                   <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 mb-3">
                     <Triangle className="h-3 w-3 text-primary" />
                     <span className="text-xs font-semibold text-primary uppercase tracking-wide">IIFB Welcome</span>
                   </div>
                 </div>
                 <p className="text-base text-foreground leading-relaxed text-center">
                   The International Indigenous Forum on Biodiversity (IIFB) welcomes Indigenous Peoples and local communities to the First meeting of the Subsidiary Body on Article 8(j) and Other Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities (SB8J-1) and related CBD meetings.
                 </p>
               </div>

               {/* Co-chairs Message */}
               <div className="bg-gradient-to-r from-secondary/5 to-secondary/10 border border-secondary/20 rounded-xl p-6">
                 <div className="text-center mb-4">
                   <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-3 py-1 mb-3">
                     <Users className="h-3 w-3 text-secondary" />
                     <span className="text-xs font-semibold text-secondary uppercase tracking-wide">Co-chairs Message</span>
                   </div>
                 </div>
                 <p className="text-base text-foreground leading-relaxed text-center">
                   The Co-chairs of the International Indigenous Forum on Biodiversity (IIFB), <span className="font-semibold text-primary">Lucy Mulenkei</span> and <span className="font-semibold text-primary">Ramiro Batzin</span>, welcome Indigenous Peoples and local communities' brothers and sisters attending the following CBD meetings:
                 </p>
               </div>
             </div>

             {/* Meeting Cards in 3-column grid */}
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <div className="bg-white/50 border border-accent/30 rounded-xl p-5 hover:shadow-medium transition-all duration-300">
                 <div className="text-center mb-4">
                   <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                     <span className="text-accent font-bold">1</span>
                   </div>
                   <h3 className="font-bold text-foreground text-lg mb-2">SB8J-1</h3>
                 </div>
                 <p className="text-muted-foreground text-sm mb-4 text-center">First meeting of the Subsidiary Body on Article 8(j) and Other Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities</p>
                 <div className="space-y-2">
                   <span className="block w-full bg-accent/10 text-accent text-xs font-medium px-3 py-2 rounded-full text-center">
                     📅 27–30 October 2025
                   </span>
                   <span className="block w-full bg-accent/10 text-accent text-xs font-medium px-3 py-2 rounded-full text-center">
                     📍 Panama City, Panama
                   </span>
                 </div>
               </div>

               <div className="bg-white/50 border border-secondary/30 rounded-xl p-5 hover:shadow-medium transition-all duration-300">
                 <div className="text-center mb-4">
                   <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                     <span className="text-secondary font-bold">2</span>
                   </div>
                   <h3 className="font-bold text-foreground text-lg mb-2">SBSTTA-27</h3>
                 </div>
                 <p className="text-muted-foreground text-sm mb-4 text-center">Twenty-seventh meeting of the Subsidiary Body on Scientific, Technical and Technological Advice</p>
                 <div className="space-y-2">
                   <span className="block w-full bg-secondary/10 text-secondary text-xs font-medium px-3 py-2 rounded-full text-center">
                     📅 20–24 October 2025
                   </span>
                   <span className="block w-full bg-secondary/10 text-secondary text-xs font-medium px-3 py-2 rounded-full text-center">
                     📍 Panama City, Panama
                   </span>
                 </div>
               </div>

               <div className="bg-white/50 border border-primary/30 rounded-xl p-5 hover:shadow-medium transition-all duration-300 md:col-span-2 lg:col-span-1">
                 <div className="text-center mb-4">
                   <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                     <span className="text-primary font-bold">3</span>
                   </div>
                   <h3 className="font-bold text-foreground text-lg mb-2">SA-WS-2025-01</h3>
                 </div>
                 <p className="text-muted-foreground text-sm mb-4 text-center">Workshop on the assessments adopted by the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services in 2024 and forthcoming assessments</p>
                 <div className="space-y-2">
                   <span className="block w-full bg-primary/10 text-primary text-xs font-medium px-3 py-2 rounded-full text-center">
                     📅 18 October 2025
                   </span>
                   <span className="block w-full bg-primary/10 text-primary text-xs font-medium px-3 py-2 rounded-full text-center">
                     📍 Panama City, Panama
                   </span>
                 </div>
               </div>
             </div>

             {/* Support Message - Compact */}
             <div className="bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20 rounded-xl p-6">
               <div className="flex items-center justify-center gap-3 mb-4">
                 <Globe className="h-4 w-4 text-accent" />
                 <span className="text-sm font-semibold text-accent uppercase tracking-wide">IIFB Support</span>
               </div>
               <p className="text-base text-foreground leading-relaxed text-center max-w-4xl mx-auto">
                 The IIFB will provide support to Indigenous Peoples and local communities in preparation for the meeting, providing documents, practical logistics information, and organizing virtual preparatory meetings as well as in-person sessions. The IIFB invites you to explore the materials, stay informed, and participate actively in this process.
               </p>
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
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                    <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                  </div>
                </div>
                
                {/* Enhanced overlay */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <span className="text-white text-sm font-semibold">CBD Panama 2025</span>
                </div>
              </div>
            </div>

            {/* YouTube Video Section - Right Side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-strong bg-muted aspect-video border-4 border-white/50">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                    <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                  </div>
                </div>
                
                {/* Enhanced overlay */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                  <span className="text-white text-sm font-semibold">CBD Panama 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Strip - Below Both Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-l-4 border-l-secondary rounded-r-xl p-6 hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-3 bg-secondary/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Leadership
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

          {/* Inspirational Quote */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <blockquote className="text-xl md:text-2xl font-bold text-foreground italic">
                "Let's work together with one voice to make a historical SB8J for Mother Earth!"
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroductionSection;

