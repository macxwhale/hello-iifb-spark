
import SBSTTA27Hero from '@/components/SBSTTA27Hero';
import { Calendar, MapPin, Users, Target, Globe, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SBSTTA27About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SBSTTA27Hero title="SBSTTA-27" currentPage="about" />

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-br from-iifb-orange/5 via-secondary/10 to-iifb-forest/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-iifb-orange to-iifb-orange/80 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Calendar className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-iifb-orange to-secondary bg-clip-text text-transparent mb-3">5</div>
              <div className="text-muted-foreground font-medium">Days</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-secondary to-iifb-forest bg-clip-text text-transparent mb-3">Global</div>
              <div className="text-muted-foreground font-medium">Participation</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-iifb-forest to-iifb-forest/80 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Target className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-iifb-forest to-iifb-orange bg-clip-text text-transparent mb-3">Scientific</div>
              <div className="text-muted-foreground font-medium">Advisory</div>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-iifb-orange to-iifb-forest rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Leaf className="w-10 h-10 text-white drop-shadow-sm" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-iifb-orange to-secondary bg-clip-text text-transparent mb-3">CBD</div>
              <div className="text-muted-foreground font-medium">Framework</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--iifb-orange)/0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
              <div className="prose prose-lg text-foreground max-w-none">
                <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
                  The 27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA-27) under the Convention on Biological Diversity (CBD) will be held in Panama City, Panama, from 20–24 October 2025. This meeting is a critical milestone in the lead-up to CBD COP16, as it will provide science-based recommendations to guide the effective implementation of the Kunming–Montreal Global Biodiversity Framework (KMGBF).
                </p>
                
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  SBSTTA is the CBD's main advisory body, mandated to provide the Conference of the Parties (COP) with scientific, technical and technological input on issues relating to biodiversity. SBSTTA-27 will bring together government representatives, scientific experts, Indigenous Peoples and local communities, and other stakeholders to examine pressing issues that influence the global biodiversity agenda.
                </p>
                
                <div className="grid md:grid-cols-1 gap-8 my-12">
                  <div className="bg-gradient-to-br from-iifb-orange/5 to-secondary/5 rounded-2xl p-8 border border-iifb-orange/20">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-iifb-orange to-secondary bg-clip-text text-transparent mb-6">Key Focus Areas</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-iifb-orange to-secondary rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Monitoring progress:</strong> <span className="text-muted-foreground">Evaluating the effectiveness of actions taken so far towards achieving the KMGBF targets, including mechanisms for global review of collective progress.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-secondary to-iifb-forest rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Ecosystem-based approaches:</strong> <span className="text-muted-foreground">Promoting and integrating nature-based solutions to enhance biodiversity conservation and sustainable use.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-gradient-to-r from-iifb-forest to-iifb-orange rounded-full mt-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-foreground">Cross-sectoral mainstreaming:</strong> <span className="text-muted-foreground">Strengthening the integration of biodiversity considerations into sectors such as agriculture, forestry, fisheries, and beyond.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  In addition, the meeting will consider specific matters highly relevant to Indigenous Peoples and local communities, including planning, monitoring, reporting and review processes under the Framework. Other thematic areas on the agenda will include invasive alien species, the interlinkages between biodiversity and health, and the impacts of climate change on biodiversity.
                </p>
                
                <div className="bg-gradient-to-br from-iifb-forest/5 to-secondary/5 rounded-2xl p-8 border border-iifb-forest/20 my-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-iifb-forest to-secondary bg-clip-text text-transparent mb-4">Expected Outcomes</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    The outcomes of SBSTTA-27 will play a central role in shaping global biodiversity policy, ensuring that decisions taken at COP16 are informed by the best available science and inclusive of diverse perspectives. Regional consultations and a dedicated workshop on the latest Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services (IPBES) assessments will provide additional context to guide deliberations.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Through its strategic review and analysis of the Convention's programmes of work within the context of the KMGBF, SBSTTA-27 is expected to provide countries with critical guidance and tools to accelerate action, address emerging challenges, and support the achievement of global biodiversity targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27About;
