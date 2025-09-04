
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
                Scientific Advisory Meeting
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                The 27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice 
                provides critical science-based recommendations for implementing the Kunming–Montreal 
                Global Biodiversity Framework.
              </p>
            </div>

            {/* Background Story */}
            <div className="mb-20">
              <Card className="border-none shadow-none bg-gradient-to-br from-primary/5 to-background">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-6">Critical Milestone</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-6">
                        SBSTTA-27 serves as a critical milestone in the lead-up to CBD COP16, providing 
                        science-based recommendations to guide the effective implementation of the 
                        Kunming–Montreal Global Biodiversity Framework (KMGBF).
                      </p>
                      <p className="text-lg text-foreground leading-relaxed">
                        This meeting brings together government representatives, scientific experts, 
                        Indigenous Peoples and local communities, and other stakeholders to examine 
                        pressing issues that influence the global biodiversity agenda.
                      </p>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-6 h-6 text-iifb-orange" />
                        <h4 className="text-xl font-semibold text-foreground">Global Impact</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        The outcomes will play a central role in shaping global biodiversity policy, 
                        ensuring COP16 decisions are informed by the best available science.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Focus Areas */}
            <div className="mb-20">
              <h3 className="text-4xl font-bold text-foreground text-center mb-12">Key Areas of Focus</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="group hover:shadow-strong transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Monitoring Progress</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Evaluating the effectiveness of actions taken towards achieving the KMGBF targets, 
                      including mechanisms for global review of collective progress.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-strong transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary/80 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Ecosystem-based Approaches</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Promoting and integrating nature-based solutions to enhance biodiversity 
                      conservation and sustainable use across various sectors.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-strong transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Cross-sectoral Mainstreaming</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Strengthening the integration of biodiversity considerations into sectors 
                      such as agriculture, forestry, fisheries, and beyond.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Context */}
            <div className="mb-20">
              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Additional Agenda Items</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-lg text-foreground leading-relaxed mb-6">
                        The meeting will consider specific matters highly relevant to Indigenous Peoples 
                        and local communities, including planning, monitoring, reporting and review 
                        processes under the Framework.
                      </p>
                      <p className="text-lg text-foreground leading-relaxed">
                        Regional consultations and a dedicated workshop on the latest IPBES assessments 
                        will provide additional context to guide deliberations.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Invasive Alien Species</h4>
                          <p className="text-muted-foreground text-sm">Addressing threats from invasive species to biodiversity</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe className="w-4 h-4 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Biodiversity and Health</h4>
                          <p className="text-muted-foreground text-sm">Exploring interlinkages between biodiversity and human health</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Leaf className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Climate Change Impacts</h4>
                          <p className="text-muted-foreground text-sm">Assessing climate change effects on biodiversity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Expected Outcomes */}
            <div className="text-center">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
                <CardContent className="p-8 lg:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Expected Outcomes</h3>
                  <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto mb-6">
                    Through its strategic review and analysis of the Convention's programmes of work 
                    within the context of the KMGBF, SBSTTA-27 is expected to provide countries with 
                    critical guidance and tools to accelerate action, address emerging challenges, 
                    and support the achievement of global biodiversity targets.
                  </p>
                  
                  <div className="mt-8 inline-flex items-center gap-2 text-iifb-orange font-medium">
                    <Leaf className="w-5 h-5" />
                    <span>Informing science-based policy decisions at COP16</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27About;
