
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
            backgroundImage: `url(/lovable-uploads/081c59be-4485-4784-bbad-20d932375bbd.png)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[70vh] max-w-7xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-iifb-cream to-iifb-sage bg-clip-text text-transparent">
              SBSTTA-27
            </h1>

            <SBSTTA27Navigation currentPage="about" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gradient-to-r from-iifb-forest/5 to-iifb-sage/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-rust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-iifb-rust" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">6</div>
              <div className="text-muted-foreground">Days</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-forest/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-iifb-forest" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">Global</div>
              <div className="text-muted-foreground">Scientific Advice</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-iifb-orange" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">27th</div>
              <div className="text-muted-foreground">Meeting</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-iifb-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-iifb-sage" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">CBD</div>
              <div className="text-muted-foreground">Advisory Body</div>
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
                The 27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA-27) 
                provides crucial scientific guidance for implementing the Kunming-Montreal Global Biodiversity Framework.
              </p>
            </div>

            {/* Background Story */}
            <div className="mb-20">
              <Card className="border-none shadow-none bg-gradient-to-br from-iifb-cream/30 to-background">
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-6">Scientific Foundation for Action</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-6">
                        SBSTTA-27 brings together the world's leading biodiversity scientists and technical experts 
                        to provide evidence-based recommendations for the Convention on Biological Diversity.
                      </p>
                      <p className="text-lg text-foreground leading-relaxed">
                        This meeting focuses on scientific assessments, technical guidance, and methodological 
                        frameworks needed to achieve the ambitious targets set by the global biodiversity framework.
                      </p>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-6 h-6 text-iifb-rust" />
                        <h4 className="text-xl font-semibold text-foreground">Global Expertise</h4>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Leading scientists and technical experts from around the world collaborate to provide 
                        the scientific foundation for biodiversity conservation and sustainable use.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Expected Outcomes */}
            <div className="text-center">
              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <CardContent className="p-8 lg:p-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Scientific Guidance</h3>
                  <p className="text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
                    SBSTTA-27 will provide critical scientific and technical advice to support Parties in 
                    implementing the Kunming-Montreal Global Biodiversity Framework, ensuring decisions 
                    are based on the best available science and traditional knowledge.
                  </p>
                  
                  <div className="mt-8 inline-flex items-center gap-2 text-secondary font-medium">
                    <Leaf className="w-5 h-5" />
                    <span>Science-based solutions for biodiversity</span>
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
