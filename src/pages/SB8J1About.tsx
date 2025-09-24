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
      <section className="py-20 bg-gradient-to-br from-iifb-forest/10 via-iifb-sage/5 to-iifb-orange/5 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-iifb-forest rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-iifb-orange rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-iifb-sage rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meeting Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-iifb-forest to-iifb-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-iifb-orange to-iifb-orange/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-iifb-orange to-iifb-forest bg-clip-text text-transparent">4</div>
                <div className="text-muted-foreground font-medium">Days</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-iifb-forest to-iifb-forest/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-iifb-forest to-iifb-sage bg-clip-text text-transparent">Global</div>
                <div className="text-muted-foreground font-medium">Participation</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-iifb-orange to-iifb-orange/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-iifb-orange to-iifb-forest bg-clip-text text-transparent">Historic</div>
                <div className="text-muted-foreground font-medium">First Meeting</div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover-scale border-none bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-iifb-sage to-iifb-sage/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-iifb-sage to-iifb-forest bg-clip-text text-transparent">CBD</div>
                <div className="text-muted-foreground font-medium">Framework</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-iifb-forest/5 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-iifb-orange/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-iifb-forest to-iifb-sage rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">About SB8J-1</h2>
              </div>
              
              <Card className="border-l-4 border-l-iifb-forest bg-gradient-to-r from-iifb-forest/5 to-transparent">
                <CardContent className="p-8">
                  <p className="text-xl text-foreground leading-relaxed mb-6">
                    The First Meeting of the Subsidiary Body on Article 8(j) and Other Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities (SB8J-1) will be held from 27 to 30 October 2025 in Panama City, Panama. The SB8J-1 will be a historic event for Indigenous Peoples and local communities, as it will consider the contributions of Indigenous and Traditional Territories (ITTs) to the conservation, restoration, and spatial planning of biodiversity.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    SB8J-1 will address issues directly related to the rights, roles and contributions of Indigenous Peoples and local communities in biodiversity conservation. Key items on the agenda include:
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Key Agenda Items */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-iifb-orange to-iifb-sage rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Key Agenda Items</h3>
              </div>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300 border-none bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-2 h-full bg-gradient-to-b from-iifb-forest to-iifb-sage rounded-full min-h-[60px]"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Modus operandi of the Subsidiary Body on Article 8(j) and Other Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 border-none bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-2 h-full bg-gradient-to-b from-iifb-orange to-iifb-forest rounded-full min-h-[60px]"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Guidelines to strengthen the legal and policy framework for the recognition of the role of indigenous and traditional territories of indigenous peoples and local communities in spatial planning, restoration and conservation</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 border-none bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-2 h-full bg-gradient-to-b from-iifb-sage to-iifb-orange rounded-full min-h-[60px]"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Provision of advice on traditional knowledge for the global report on collective progress in the implementation of the Kunming-Montreal Global Biodiversity Framework</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 border-none bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-2 h-full bg-gradient-to-b from-iifb-forest to-iifb-orange rounded-full min-h-[60px]"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Process to review and update the Voluntary Glossary of Key Terms and Concepts Within the Context of Article 8(j) and Related Provisions of the Convention</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all duration-300 border-none bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-2 h-full bg-gradient-to-b from-iifb-orange to-iifb-sage rounded-full min-h-[60px]"></div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Recommendations of the Permanent Forum on Indigenous Issues</h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* IIFB Role & Expected Outcomes */}
            <div className="space-y-12">
              <Card className="border-l-4 border-l-iifb-orange bg-gradient-to-r from-iifb-orange/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-iifb-orange to-iifb-forest rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">IIFB's Role</h4>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    At this meeting, the International Indigenous Forum on Biodiversity (IIFB) will play a key role in supporting and ensuring the meaningful participation of Indigenous Peoples in the formal negotiations. IIFB's engagement will focus on safeguarding the rights of Indigenous Peoples and local communities, amplifying their voices in global biodiversity policy, and fostering constructive dialogue with Parties to the Convention. By doing so, IIFB aims to strengthen the recognition of Indigenous knowledge systems, promote equitable partnerships, and advance the full and effective implementation of both Article 8(j) and the Kunming–Montreal Global Biodiversity Framework, with particular emphasis on Target 3.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-iifb-sage bg-gradient-to-r from-iifb-sage/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-iifb-sage to-iifb-forest rounded-full flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">Expected Outcomes</h4>
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    The outcomes of SB8J-1 are expected to lay a strong foundation for the permanent Subsidiary Body, setting in motion practical mechanisms that elevate Indigenous Peoples and local communities leadership, enhance biodiversity governance and contribute to achieving the ambitious global biodiversity targets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SB8J1About;
