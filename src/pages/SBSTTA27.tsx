import { useState } from 'react';
import heroBannerImage from '@/assets/hero-banner.jpg';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SBSTTA27 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBannerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20 lg:py-24">
          <div className="mb-12 lg:mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              SBSTTA-27
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                27th Scientific Advisory Meeting
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Providing scientific guidance for implementing the Global Biodiversity Framework
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-lg">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>October 20-24, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Panama City, Panama</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                SBSTTA-27 refers to the 27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA) under the Convention on Biological Diversity (CBD). It will be held in Panama City, Panama, from October 20-24, 2025. This meeting is a crucial step in preparing for the upcoming CBD COP16, and will focus on providing science-based recommendations to guide the implementation of the Kunming-Montreal Global Biodiversity Framework.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-12">
                SBSTTA is a subsidiary body of the CBD, responsible for providing scientific and technical advice to the CBD's governing body, the Conference of the Parties (COP). SBSTTA-27 will bring together experts, government representatives, and stakeholders to discuss key issues related to biodiversity and provide recommendations on topics like:
              </p>

              <div className="grid md:grid-cols-1 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Monitoring Progress</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Assessing the effectiveness of the Kunming-Montreal Global Biodiversity Framework.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ecosystem-based Approaches</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promoting and integrating nature-based solutions for biodiversity conservation.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Cross-sectoral Mainstreaming</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ensuring biodiversity considerations are integrated into various sectors like agriculture, forestry, and fisheries.
                  </p>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="bg-gradient-subtle p-8 lg:p-12 rounded-lg border border-border/30 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Related Resources</h3>
                <ul className="space-y-3 text-lg text-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    IPBES Workshop
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    IIFB Preparatory session
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    IIFB Statements
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Photos
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Side events
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-subtle p-8 lg:p-12 rounded-lg border border-border/30">
                <h3 className="text-2xl font-bold text-foreground mb-6">Meeting Impact</h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  The outcomes of SBSTTA-27 will play a vital role in shaping global biodiversity governance and supporting countries in achieving their biodiversity targets.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  The meeting will be preceded by regional consultations and a workshop on recently completed IPBES assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27;
