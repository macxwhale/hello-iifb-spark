import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const VideoSection = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-primary rounded-full"></div>
            <span className="text-primary font-medium uppercase tracking-wide text-sm">Featured Videos</span>
            <div className="w-8 h-1 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Voices from the Convention
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore insights and perspectives from global biodiversity leaders and Indigenous communities
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Main Video */}
          <Card className="group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <Button 
                  size="lg" 
                  className="relative z-10 rounded-full w-16 h-16 group-hover:scale-110 transition-transform duration-200"
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    SBSTTA-27: Scientific Guidance for Biodiversity
                  </h3>
                  <p className="text-white/80 text-sm">
                    Understanding the scientific recommendations for the Global Biodiversity Framework
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Secondary Video */}
          <Card className="group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20"></div>
                <Button 
                  size="lg" 
                  className="relative z-10 rounded-full w-16 h-16 group-hover:scale-110 transition-transform duration-200"
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    SB8J-1: Indigenous Knowledge and Rights
                  </h3>
                  <p className="text-white/80 text-sm">
                    Celebrating traditional knowledge and Indigenous contributions to conservation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="mx-auto">
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;