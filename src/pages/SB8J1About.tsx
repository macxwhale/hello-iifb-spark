import SB8J1Navigation from '@/components/SB8J1Navigation';
import SB8J1Hero from '@/components/SB8J1Hero';
import { Calendar, MapPin, Users, Target, Globe, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SB8J1About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SB8J1Hero title="SB8J-1" />

      {/* Navigation Section */}
      <section className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <SB8J1Navigation currentPage="about" />
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
          <div className="max-w-4xl mx-auto prose prose-lg text-foreground">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              The First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions (SB8J-1) will be held from 27 to 30 October 2025 in Panama City, Panama. This historic gathering follows a landmark decision adopted at COP 16, where Parties to the Convention on Biological Diversity (CBD) agreed to establish a new permanent Subsidiary Body dedicated specifically to Article 8(j) and related provisions concerning Indigenous Peoples and local communities. The creation of this body marks an important step in elevating Indigenous Peoples and local communities issues within CBD processes and ensuring stronger participation and contributions of Indigenous Peoples and local communities toward the achievement of global biodiversity goals.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              SB8J-1 will address several critical issues that directly relate to the rights, roles and contributions of Indigenous Peoples and local communities in biodiversity conservation and sustainable use. Key items on the agenda include:
            </p>
            
            <ul className="space-y-3 mb-8">
              <li><strong>Modus operandi of the Subsidiary Body:</strong> Establishing clear working methods, procedures, and structures to guide the functioning of the new body.</li>
              <li><strong>Guidelines on Indigenous and traditional territories:</strong> Supporting Indigenous People and local community led protection and restoration efforts in line with Targets 2 and 3 of the Kunming–Montreal Global Biodiversity Framework (KMGBF).</li>
              <li><strong>Integration of traditional knowledge in planning:</strong> Developing guidelines for the inclusion of traditional lands and resource use in spatial planning processes and environmental impact assessments, ensuring Indigenous Peoples and local communities perspectives are formally recognized in decision-making.</li>
              <li><strong>Review of terminology:</strong> Undertaking a process to review and update the Voluntary Glossary of Key Terms and Concepts related to Article 8(j), to ensure clarity, cultural relevance and inclusivity in CBD processes.</li>
            </ul>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              At this meeting, the International Indigenous Forum on Biodiversity (IIFB) will play a key role in supporting and ensuring the meaningful participation of Indigenous Peoples in the formal negotiations. IIFB's engagement will focus on safeguarding the rights of Indigenous Peoples and local communities, amplifying their voices in global biodiversity policy, and fostering constructive dialogue with Parties to the Convention. By doing so, IIFB aims to strengthen the recognition of Indigenous knowledge systems, promote equitable partnerships, and advance the full and effective implementation of both Article 8(j) and the Kunming–Montreal Global Biodiversity Framework, with particular emphasis on Target 3.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              The outcomes of SB8J-1 are expected to lay a strong foundation for the permanent Subsidiary Body, setting in motion practical mechanisms that elevate Indigenous Peoples and local communities leadership, enhance biodiversity governance and contribute to achieving the ambitious global biodiversity targets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SB8J1About;
