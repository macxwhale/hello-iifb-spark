
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import SBSTTA27Hero from '@/components/SBSTTA27Hero';

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
      <SBSTTA27Hero title="SBSTTA-27 Gallery" currentPage="gallery" />

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-xl text-muted-foreground">Gallery will be available soon.</p>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27Gallery;
