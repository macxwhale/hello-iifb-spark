
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';

const SBSTTA27Gallery = () => {
  const galleryItems = [
    {
      title: "Opening Session",
      description: "SBSTTA-27 officially begins with scientific presentations",
      date: "October 20, 2025",
      category: "Opening",
      image: "/lovable-uploads/ec6e375b-657d-445c-9c03-e67802b1955d.png"
    },
    {
      title: "Scientific Advisory Panel",
      description: "Expert discussions on biodiversity monitoring",
      date: "October 21, 2025", 
      category: "Panel",
      image: "/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png"
    },
    {
      title: "Technical Workshop",
      description: "Methodological approaches to target implementation",
      date: "October 22, 2025",
      category: "Workshop", 
      image: "/lovable-uploads/96490106-76fa-41f3-9b84-56f75115fa1e.png"
    },
    {
      title: "Plenary Session",
      description: "Adoption of scientific recommendations",
      date: "October 24, 2025",
      category: "Plenary",
      image: "/lovable-uploads/b7281f13-2171-4001-9f67-c994f5c9fb35.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/081c59be-4485-4784-bbad-20d932375bbd.png)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Scientific Meeting Gallery</h2>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div 
                    className="aspect-video bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-secondary text-white">{item.category}</Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Gallery;
