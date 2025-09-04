
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';

const SBSTTA27Gallery = () => {
  const galleryItems = [
    {
      title: "Opening Ceremony",
      description: "Official opening of SBSTTA-27 with global delegates",
      date: "October 20, 2025",
      category: "Ceremony",
      image: "/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png"
    },
    {
      title: "Scientific Panel Discussion",
      description: "Expert scientists discussing biodiversity monitoring frameworks",
      date: "October 21, 2025", 
      category: "Panel",
      image: "/lovable-uploads/4ce61eb0-9a7e-42be-874b-4ef64ec8d003.png"
    },
    {
      title: "Technical Working Group",
      description: "Delegates working on invasive species management strategies",
      date: "October 22, 2025",
      category: "Workshop", 
      image: "/lovable-uploads/52900254-5d2a-47fb-b939-34f5734c2fa1.png"
    },
    {
      title: "Indigenous Knowledge Session",
      description: "Integration of traditional ecological knowledge in scientific assessments",
      date: "October 22, 2025",
      category: "Knowledge",
      image: "/lovable-uploads/ec6e375b-657d-445c-9c03-e67802b1955d.png"
    },
    {
      title: "Regional Consultations",
      description: "Regional groups discussing implementation strategies",
      date: "October 23, 2025",
      category: "Consultation",
      image: "/lovable-uploads/b5f1ddc9-2378-4be9-ac3f-0d14e3249153.png"
    },
    {
      title: "Closing Ceremony",
      description: "Conclusion of SBSTTA-27 with adopted recommendations",
      date: "October 24, 2025", 
      category: "Ceremony",
      image: "/lovable-uploads/b7281f13-2171-4001-9f67-c994f5c9fb35.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SBSTTA-27 Gallery
            </h1>

            <SBSTTA27Navigation currentPage="gallery" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border">
            <h2 className="text-4xl font-bold text-foreground mb-6">Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Photo gallery from SBSTTA-27 sessions and activities will be available here during the meeting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-iifb-orange rounded-full animate-pulse"></div>
                <span>Meeting starts October 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
                <span>Photos updated daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Gallery;
