import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, Calendar, Camera } from 'lucide-react';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';

const SB8J1Gallery = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j1-gallery-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-gallery');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j1-gallery-view', view);
  };

  const galleryItems = [
    {
      title: "Opening Ceremony",
      description: "Historic moment as SB8J-1 officially begins",
      date: "October 27, 2025",
      category: "Ceremony",
      image: "/lovable-uploads/ec6e375b-657d-445c-9c03-e67802b1955d.png"
    },
    {
      title: "Indigenous Delegates Assembly",
      description: "Representatives from around the world gather",
      date: "October 27, 2025", 
      category: "Assembly",
      image: "/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png"
    },
    {
      title: "Traditional Knowledge Workshop",
      description: "Elders share wisdom with the global community",
      date: "October 28, 2025",
      category: "Workshop", 
      image: "/lovable-uploads/96490106-76fa-41f3-9b84-56f75115fa1e.png"
    },
    {
      title: "Youth Voices Session",
      description: "Young Indigenous leaders take the stage",
      date: "October 28, 2025",
      category: "Youth",
      image: "/lovable-uploads/b5f1ddc9-2378-4be9-ac3f-0d14e3249153.png"
    },
    {
      title: "Panel Discussion",
      description: "Expert discussions on biodiversity conservation",
      date: "October 29, 2025",
      category: "Panel",
      image: "/lovable-uploads/4ce61eb0-9a7e-42be-874b-4ef64ec8d003.png"
    },
    {
      title: "Community Monitoring Presentation", 
      description: "Innovative approaches to environmental monitoring",
      date: "October 29, 2025",
      category: "Presentation",
      image: "/lovable-uploads/52900254-5d2a-47fb-b939-34f5734c2fa1.png"
    },
    {
      title: "Conservation Finance Meeting",
      description: "Funding discussions for Indigenous-led initiatives", 
      date: "October 30, 2025",
      category: "Finance",
      image: "/lovable-uploads/e7288d9d-1175-4f7d-8c6a-098b2ba82056.png"
    },
    {
      title: "Closing Ceremony",
      description: "Celebration of achievements and future commitments",
      date: "October 30, 2025", 
      category: "Ceremony",
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
            backgroundImage: `url(${imageUrl})`,
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SB8J-1 Gallery
            </h1>

            <SB8J1Navigation currentPage="gallery" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Event Gallery</h2>
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

export default SB8J1Gallery;
