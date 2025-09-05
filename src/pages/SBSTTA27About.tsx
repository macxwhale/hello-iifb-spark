
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import { Calendar, MapPin, Users, Target, Globe, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SBSTTA27About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] h-auto overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[70vh] max-w-7xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              SBSTTA-27
            </h1>

            <SBSTTA27Navigation currentPage="about" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-iifb-orange" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">5</div>
              <div className="text-muted-foreground">Days</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">Global</div>
              <div className="text-muted-foreground">Participation</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-iifb-orange" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">Scientific</div>
              <div className="text-muted-foreground">Advisory</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">CBD</div>
              <div className="text-muted-foreground">Framework</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                SBSTTA
              </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-foreground leading-relaxed text-lg">
              <p>
                The 27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA-27) under the Convention on Biological Diversity (CBD) will be held in Panama City, Panama, from 20–24 October 2025. This meeting is a critical milestone in the lead-up to CBD COP16, as it will provide science-based recommendations to guide the effective implementation of the Kunming–Montreal Global Biodiversity Framework (KMGBF).
              </p>
              
              <p>
                SBSTTA is the CBD's main advisory body, mandated to provide the Conference of the Parties (COP) with scientific, technical and technological input on issues relating to biodiversity. SBSTTA-27 will bring together government representatives, scientific experts, Indigenous Peoples and local communities, and other stakeholders to examine pressing issues that influence the global biodiversity agenda.
              </p>
              
              <div>
                <p className="mb-4">Key areas of focus will include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Monitoring progress:</strong> Evaluating the effectiveness of actions taken so far towards achieving the KMGBF targets, including mechanisms for global review of collective progress.</li>
                  <li><strong>Ecosystem-based approaches:</strong> Promoting and integrating nature-based solutions to enhance biodiversity conservation and sustainable use.</li>
                  <li><strong>Cross-sectoral mainstreaming:</strong> Strengthening the integration of biodiversity considerations into sectors such as agriculture, forestry, fisheries, and beyond.</li>
                </ul>
              </div>
              
              <p>
                In addition, the meeting will consider specific matters highly relevant to Indigenous Peoples and local communities, including planning, monitoring, reporting and review processes under the Framework. Other thematic areas on the agenda will include invasive alien species, the interlinkages between biodiversity and health, and the impacts of climate change on biodiversity.
              </p>
              
              <p>
                The outcomes of SBSTTA-27 will play a central role in shaping global biodiversity policy, ensuring that decisions taken at COP16 are informed by the best available science and inclusive of diverse perspectives. Regional consultations and a dedicated workshop on the latest Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES) assessments will provide additional context to guide deliberations.
              </p>
              
              <p>
                Through its strategic review and analysis of the Convention's programmes of work within the context of the KMGBF, SBSTTA-27 is expected to provide countries with critical guidance and tools to accelerate action, address emerging challenges, and support the achievement of global biodiversity targets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27About;
