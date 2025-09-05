import SB8J1Navigation from '@/components/SB8J1Navigation';
import { Calendar, MapPin, Users, Target, Globe, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SB8J1About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] h-auto overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/7685290b-0f07-4df8-8472-c5deb1b68778.png)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[70vh] max-w-7xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-iifb-cream to-iifb-sage bg-clip-text text-transparent">
              SB8J-1
            </h1>

            <SB8J1Navigation currentPage="about" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-iifb-forest/5 to-iifb-sage/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-iifb-orange" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">4</div>
              <div className="text-muted-foreground">Days</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-iifb-forest" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">Global</div>
              <div className="text-muted-foreground">Participation</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-iifb-orange" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">Historic</div>
              <div className="text-muted-foreground">First Meeting</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-iifb-sage" />
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
                SB8J-1
              </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-foreground leading-relaxed text-lg">
              <p>
                The First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions (SB8J-1) will be held from 27 to 30 October 2025 in Panama City, Panama. This historic gathering follows a landmark decision adopted at COP 16, where Parties to the Convention on Biological Diversity (CBD) agreed to establish a new permanent Subsidiary Body dedicated specifically to Article 8(j) and related provisions concerning Indigenous Peoples and local communities. The creation of this body marks an important step in elevating Indigenous Peoples and local communities issues within CBD processes and ensuring stronger participation and contributions of Indigenous Peoples and local communities toward the achievement of global biodiversity goals.
              </p>
              
              <div>
                <p className="mb-4">SB8J-1 will address several critical issues that directly relate to the rights, roles and contributions of Indigenous Peoples and local communities in biodiversity conservation and sustainable use. Key items on the agenda include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Modus operandi of the Subsidiary Body:</strong> Establishing clear working methods, procedures, and structures to guide the functioning of the new body.</li>
                  <li><strong>Guidelines on Indigenous and traditional territories:</strong> Supporting Indigenous People and local community led protection and restoration efforts in line with Targets 2 and 3 of the Kunming–Montreal Global Biodiversity Framework (KMGBF).</li>
                  <li><strong>Integration of traditional knowledge in planning:</strong> Developing guidelines for the inclusion of traditional lands and resource use in spatial planning processes and environmental impact assessments, ensuring Indigenous Peoples and local communities perspectives are formally recognized in decision-making.</li>
                  <li><strong>Review of terminology:</strong> Undertaking a process to review and update the Voluntary Glossary of Key Terms and Concepts related to Article 8(j), to ensure clarity, cultural relevance and inclusivity in CBD processes.</li>
                </ul>
              </div>
              
              <p>
                At this meeting, the International Indigenous Forum on Biodiversity (IIFB) will play a key role in supporting and ensuring the meaningful participation of Indigenous Peoples in the formal negotiations. IIFB's engagement will focus on safeguarding the rights of Indigenous Peoples and local communities, amplifying their voices in global biodiversity policy, and fostering constructive dialogue with Parties to the Convention. By doing so, IIFB aims to strengthen the recognition of Indigenous knowledge systems, promote equitable partnerships, and advance the full and effective implementation of both Article 8(j) and the Kunming–Montreal Global Biodiversity Framework, with particular emphasis on Target 3.
              </p>
              
              <p>
                The outcomes of SB8J-1 are expected to lay a strong foundation for the permanent Subsidiary Body, setting in motion practical mechanisms that elevate Indigenous Peoples and local communities leadership, enhance biodiversity governance and contribute to achieving the ambitious global biodiversity targets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SB8J1About;
