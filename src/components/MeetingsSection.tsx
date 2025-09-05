import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Target, Globe, Leaf } from 'lucide-react';

const MeetingsSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              MEETINGS
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Be part of the global conversation with experts going deeper to discuss traditional knowledge, innovation, and the practices of Indigenous peoples and local communities
            </p>
          </div>

          {/* SBSTTA Section */}
          <div className="mb-20">
            <Card className="border-2 border-border shadow-lg bg-gradient-to-br from-primary/5 to-background">
              <CardContent className="p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">SBSTTA</h3>
                </div>
                
                <div className="space-y-6 text-foreground leading-relaxed">
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
              </CardContent>
            </Card>
          </div>

          {/* SB8J-1 Section */}
          <div>
            <Card className="border-2 border-border shadow-lg bg-gradient-to-br from-secondary/5 to-background">
              <CardContent className="p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">SB8J-1</h3>
                </div>
                
                <div className="space-y-6 text-foreground leading-relaxed">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingsSection;