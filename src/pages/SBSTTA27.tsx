
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
              Critical milestone providing science-based recommendations for implementing the Kunming–Montreal Global Biodiversity Framework
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
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                The 27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA-27) under the Convention on Biological Diversity (CBD) will be held in Panama City, Panama, from 20–24 October 2025. This meeting is a critical milestone in the lead-up to CBD COP16, as it will provide science-based recommendations to guide the effective implementation of the Kunming–Montreal Global Biodiversity Framework (KMGBF).
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-12">
                SBSTTA is the CBD's main advisory body, mandated to provide the Conference of the Parties (COP) with scientific, technical and technological input on issues relating to biodiversity. SBSTTA-27 will bring together government representatives, scientific experts, Indigenous Peoples and local communities, and other stakeholders to examine pressing issues that influence the global biodiversity agenda.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-8">Key Areas of Focus</h2>
              
              <div className="grid md:grid-cols-1 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Monitoring Progress</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Evaluating the effectiveness of actions taken so far towards achieving the KMGBF targets, including mechanisms for global review of collective progress.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ecosystem-based Approaches</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promoting and integrating nature-based solutions to enhance biodiversity conservation and sustainable use.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Cross-sectoral Mainstreaming</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Strengthening the integration of biodiversity considerations into sectors such as agriculture, forestry, fisheries, and beyond.
                  </p>
                </div>
              </div>

              {/* Additional Agenda Items */}
              <div className="bg-gradient-subtle p-8 lg:p-12 rounded-lg border border-border/30 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Additional Agenda Items</h3>
                <div className="text-lg text-foreground leading-relaxed space-y-4">
                  <p>
                    The meeting will consider specific matters highly relevant to Indigenous Peoples and local communities, including planning, monitoring, reporting and review processes under the Framework.
                  </p>
                  <p>
                    Other thematic areas on the agenda will include:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                      Invasive alien species
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                      The interlinkages between biodiversity and health
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                      The impacts of climate change on biodiversity
                    </li>
                  </ul>
                </div>
              </div>

              {/* Additional Context */}
              <div className="bg-gradient-subtle p-8 lg:p-12 rounded-lg border border-border/30 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Supporting Activities</h3>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Regional consultations and a dedicated workshop on the latest Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES) assessments will provide additional context to guide deliberations.
                </p>
                <ul className="space-y-3 text-lg text-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    IPBES Workshop
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Regional Consultations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Strategic Review and Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Side Events
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-subtle p-8 lg:p-12 rounded-lg border border-border/30">
                <h3 className="text-2xl font-bold text-foreground mb-6">Expected Outcomes</h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  The outcomes of SBSTTA-27 will play a central role in shaping global biodiversity policy, ensuring that decisions taken at COP16 are informed by the best available science and inclusive of diverse perspectives.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Through its strategic review and analysis of the Convention's programmes of work within the context of the KMGBF, SBSTTA-27 is expected to provide countries with critical guidance and tools to accelerate action, address emerging challenges, and support the achievement of global biodiversity targets.
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
