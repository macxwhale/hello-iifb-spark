import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, ArrowRight, MapPin, Clock, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import sbsttaImage from '@/assets/sbstta-event.jpg';
import sb8jImage from '@/assets/sb8j-event.jpg';

const EventsSection = () => {
  return (
    <section id="events" className="py-16 lg:py-20 relative bg-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-xl"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Key Meetings
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join global experts and Indigenous leaders in shaping the future of biodiversity conservation
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* SBSTTA-27 Event Card - Enhanced */}
          <Card className="overflow-hidden shadow-strong hover:shadow-xl transition-all duration-500 group border-0 bg-gradient-to-br from-card to-card/80 relative flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <div className="relative h-72 overflow-hidden">
              <img 
                src={sbsttaImage} 
                alt="SBSTTA-27 Meeting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-white/20">
                  Scientific Advisory
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Panama Convention Center</span>
                  </div>
                </div>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <CardTitle className="text-2xl lg:text-3xl text-foreground">SBSTTA-27</CardTitle>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <CardDescription className="text-base text-muted-foreground mb-4">
                27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice
              </CardDescription>
              <div className="flex items-center gap-2 text-2xl lg:text-3xl font-bold text-foreground mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                October 20-25, 2025
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8 pb-8 flex-grow flex flex-col">
              <p className="text-foreground leading-relaxed text-lg">
                Focus on science-based recommendations for implementing the Kunming-Montreal Global Biodiversity Framework, 
                with emphasis on monitoring progress and ecosystem-based approaches.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-medium">
                  Biodiversity Monitoring
                </span>
                <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-medium">
                  Scientific Research
                </span>
                <span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-sm font-medium">
                  Policy Framework
                </span>
              </div>
              
              <div className="pt-4 mt-auto">
                <Link to="/sbstta-27">
                  <Button className="w-full group bg-primary hover:bg-primary-hover text-lg py-6 rounded-xl font-semibold">
                    Learn More About SBSTTA-27
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* SB8J-1 Event Card - Enhanced */}
          <Card className="overflow-hidden shadow-strong hover:shadow-xl transition-all duration-500 group border-0 bg-gradient-to-br from-card to-card/80 relative flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
            <div className="relative h-72 overflow-hidden">
              <img 
                src={sb8jImage} 
                alt="SB8J-1 Meeting"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-secondary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-white/20">
                  Indigenous Rights
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Panama Convention Center</span>
                  </div>
                </div>
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <CardTitle className="text-2xl lg:text-3xl text-foreground">SB8J-1</CardTitle>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <CardDescription className="text-base text-muted-foreground mb-4">
                First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions
              </CardDescription>
              <div className="flex items-center gap-2 text-2xl lg:text-3xl font-bold text-foreground mb-4">
                <Calendar className="h-6 w-6 text-secondary" />
                October 26-30, 2025
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8 pb-8 flex-grow flex flex-col">
              <p className="text-foreground leading-relaxed text-lg">
                Historic establishment of a permanent body focused on Indigenous Peoples and local communities, 
                addressing traditional knowledge and territorial rights.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-sm font-medium">
                  Traditional Knowledge
                </span>
                <span className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-sm font-medium">
                  Indigenous Rights
                </span>
                <span className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-sm font-medium">
                  Cultural Diversity
                </span>
                <span className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-sm font-medium">
                  Community Governance
                </span>
              </div>
              
              <div className="pt-4 mt-auto">
                <Link to="/sb8j-1">
                  <Button className="w-full group bg-secondary hover:bg-secondary-hover text-lg py-6 rounded-xl font-semibold">
                    Learn More About SB8J-1
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
