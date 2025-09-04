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
                A Historic Milestone
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                The First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions represents 
                a groundbreaking moment in global biodiversity governance, establishing a permanent platform 
                for Indigenous Peoples and local communities within the CBD framework.
              </p>
            </div>

            {/* Background Story */}
            <div className="mb-20">
              <Card className="border-2 border-border shadow-lg bg-gradient-to-br from-iifb-cream/30 to-background">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-6">The Journey to SB8J-1</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-6">
                        Following the landmark decision at COP 16, where Parties to the Convention on Biological 
                        Diversity agreed to establish this new permanent Subsidiary Body, SB8J-1 marks the beginning 
                        of a new era in biodiversity governance.
                      </p>
                      <p className="text-lg text-foreground leading-relaxed">
                        This historic gathering elevates Indigenous Peoples and local communities (IPLC) issues 
                        within CBD processes, ensuring stronger participation toward achieving global biodiversity goals.
                      </p>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-6 h-6 text-iifb-orange" />
                        <h4 className="text-xl font-semibold text-foreground">Global Impact</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        The creation of this body represents an important step in elevating IPLC contributions 
                        to biodiversity conservation and sustainable use worldwide.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Agenda Items */}
            <div className="mb-20">
              <h3 className="text-4xl font-bold text-foreground text-center mb-12">Key Agenda Items</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="group hover:shadow-strong transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-iifb-rust to-iifb-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Modus Operandi</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Establishing clear working methods, procedures, and structures to guide the effective 
                      functioning of the new body, ensuring meaningful participation of all stakeholders.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-strong transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-iifb-forest to-iifb-sage rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Territorial Guidelines</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Supporting Indigenous and local community-led protection and restoration efforts 
                      aligned with Targets 2 and 3 of the Kunming–Montreal Global Biodiversity Framework.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-strong transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-iifb-orange to-iifb-rust rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Traditional Knowledge Integration</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Developing guidelines for including traditional lands and resource use in spatial 
                      planning and environmental impact assessments, ensuring IPLC perspectives in decision-making.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-strong transition-all duration-300 border-border/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-iifb-sage to-iifb-forest rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground mb-4">Terminology Review</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Reviewing and updating the Voluntary Glossary of Key Terms and Concepts related 
                      to Article 8(j) to ensure clarity, cultural relevance, and inclusivity in CBD processes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* IIFB Section */}
            <div className="mb-20">
              <Card className="bg-gradient-to-br from-iifb-forest/5 via-background to-iifb-sage/5 border-iifb-forest/20">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">IIFB's Pivotal Role</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-iifb-rust to-iifb-orange mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <p className="text-lg text-foreground leading-relaxed mb-6">
                        The International Indigenous Forum on Biodiversity (IIFB) will play a crucial role 
                        in supporting meaningful participation of Indigenous Peoples in formal negotiations, 
                        focusing on safeguarding rights and amplifying voices in global biodiversity policy.
                      </p>
                      <p className="text-lg text-foreground leading-relaxed">
                        IIFB aims to strengthen recognition of Indigenous knowledge systems, promote equitable 
                        partnerships, and advance implementation of Article 8(j) and the Kunming–Montreal 
                        Global Biodiversity Framework.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-iifb-rust/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Users className="w-4 h-4 text-iifb-rust" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Safeguarding Rights</h4>
                          <p className="text-muted-foreground text-sm">Protecting Indigenous Peoples and local communities rights in biodiversity governance</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-iifb-forest/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Globe className="w-4 h-4 text-iifb-forest" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Amplifying Voices</h4>
                          <p className="text-muted-foreground text-sm">Ensuring meaningful participation in global policy discussions</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-iifb-orange/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Leaf className="w-4 h-4 text-iifb-orange" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Knowledge Systems</h4>
                          <p className="text-muted-foreground text-sm">Strengthening recognition of traditional ecological knowledge</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Expected Outcomes */}
            <div className="text-center">
              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <CardContent className="p-8 lg:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Expected Outcomes</h3>
                  <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
                    The outcomes of SB8J-1 are expected to lay a strong foundation for the permanent 
                    Subsidiary Body, establishing practical mechanisms that elevate Indigenous Peoples 
                    and local communities leadership, enhance biodiversity governance, and contribute 
                    to achieving ambitious global biodiversity targets.
                  </p>
                  
                  <div className="mt-8 inline-flex items-center gap-2 text-secondary font-medium">
                    <Leaf className="w-5 h-5" />
                    <span>Building the future of inclusive biodiversity governance</span>
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

export default SB8J1About;
