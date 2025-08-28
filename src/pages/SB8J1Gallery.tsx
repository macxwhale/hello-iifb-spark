import { useState } from 'react';
import { Camera, Calendar, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';

const SB8J1Gallery = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j1-gallery-view');
    return (saved as ViewType) || 'grid';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-gallery');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j1-gallery-view', view);
  };

  const galleryImages = [
    {
      id: 1,
      title: "Opening Ceremony - Traditional Welcome",
      description: "Indigenous elders perform traditional ceremonies to welcome delegates to SB8J-1",
      date: "October 27, 2025",
      category: "Ceremony",
      photographer: "Maria Santos",
      url: "/assets/indigenous-community-gathering.jpg",
      downloads: 45
    },
    {
      id: 2,
      title: "IIFB Leadership Panel",
      description: "Key IIFB representatives discuss priorities for the subsidiary body",
      date: "October 27, 2025",
      category: "Panel Discussion",
      photographer: "Carlos Rodriguez",
      url: "/assets/indigenous-governance.jpg",
      downloads: 32
    },
    {
      id: 3,
      title: "Youth Caucus Meeting",
      description: "Indigenous youth leaders strategize for meaningful participation",
      date: "October 28, 2025",
      category: "Youth Engagement",
      photographer: "Ana Tuxá",
      url: "/assets/indigenous-voices.jpg",
      downloads: 28
    },
    {
      id: 4,
      title: "Traditional Knowledge Workshop",
      description: "Knowledge holders share wisdom on biodiversity conservation",
      date: "October 28, 2025",
      category: "Workshop",
      photographer: "James Anaya",
      url: "/assets/indigenous-traditional-knowledge.jpg",
      downloads: 51
    },
    {
      id: 5,
      title: "Negotiation Session",
      description: "Formal negotiations on Article 8(j) implementation guidelines",
      date: "October 29, 2025",
      category: "Negotiations",
      photographer: "Patricia Gualinga",
      url: "/assets/indigenous-documents.jpg",
      downloads: 19
    },
    {
      id: 6,
      title: "Cultural Evening",
      description: "Celebration of Indigenous cultures from around the world",
      date: "October 29, 2025",
      category: "Cultural Event",
      photographer: "Rosa Tanguila",
      url: "/assets/indigenous-nature-conservation.jpg",
      downloads: 67
    }
  ];

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryImages.map((image) => (
        <Card key={image.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="relative">
            <div 
              className="aspect-video bg-cover bg-center relative"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex gap-3">
                  <Button size="icon" variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                    <Eye className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                    <Download className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <Badge className="bg-secondary text-white">
                  {image.category}
                </Badge>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
              {image.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {image.description}
            </p>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {image.date}
              </div>
              <div className="flex items-center gap-1">
                <Camera className="h-3 w-3" />
                {image.photographer}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCardsView = () => (
    <div className="grid gap-6">
      {galleryImages.map((image) => (
        <Card key={image.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
          <div className="md:flex">
            <div className="relative md:w-1/3">
              <div 
                className="aspect-video md:aspect-square bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-3">
                    <Button size="icon" variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                      <Eye className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                      <Download className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge className="bg-secondary text-white">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </div>
            <CardContent className="md:w-2/3 p-6">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {image.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {image.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {image.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Camera className="h-4 w-4" />
                  {image.photographer}
                </div>
              </div>
              <div className="flex gap-3">
                <Button className="bg-secondary text-white hover:bg-secondary-hover">
                  <Eye className="h-4 w-4 mr-2" />
                  View Full Size
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download ({image.downloads})
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {galleryImages.map((image) => (
        <Card key={image.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-4 flex-1">
                <div 
                  className="w-24 h-16 bg-cover bg-center rounded flex-shrink-0"
                  style={{ backgroundImage: `url(${image.url})` }}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {image.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{image.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{image.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Camera className="h-3 w-3" />
                    {image.photographer}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ml-4">
                <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'cards':
        return renderCardsView();
      case 'list':
        return renderListView();
      default:
        return renderGridView();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-fit h-auto overflow-hidden">
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
        <div className="relative z-10 flex flex-col justify-between min-h-[50vh] sm:min-h-[45vh] md:min-h-[40vh] lg:min-h-[35vh] xl:min-h-[30vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="flex-1 flex items-center">
            <div className="text-white text-center w-full">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                SB8J-1 Gallery
              </h1>

              <SB8J1Navigation currentPage="gallery" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Photo Gallery</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Capturing key moments and highlights from the historic SB8J-1 meeting in Panama City.
              </p>
            </div>
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SB8J1Gallery;
