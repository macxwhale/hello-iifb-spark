import { useState } from 'react';
import { Play, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';

const SB8J1Videos = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j1-videos-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-videos');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j1-videos-view', view);
  };

  const videos = [
    {
      title: "Opening Ceremony Highlights",
      description: "Key moments from the historic opening of SB8J-1",
      duration: "12:45",
      date: "October 27, 2025",
      category: "Event Coverage",
      thumbnail: "/lovable-uploads/ec6e375b-657d-445c-9c03-e67802b1955d.png",
      featured: true
    },
    {
      title: "Indigenous Youth Voices",
      description: "Young Indigenous leaders share their perspectives on biodiversity conservation",
      duration: "18:30",
      date: "October 26, 2025",
      category: "Community Voices",
      thumbnail: "/lovable-uploads/b5f1ddc9-2378-4be9-ac3f-0d14e3249153.png",
      featured: false
    },
    {
      title: "Traditional Knowledge Panel Discussion",
      description: "Elders and knowledge keepers discuss the integration of traditional knowledge systems",
      duration: "45:20",
      date: "October 25, 2025",
      category: "Panel Discussion",
      thumbnail: "/lovable-uploads/96490106-76fa-41f3-9b84-56f75115fa1e.png",
      featured: false
    },
    {
      title: "Panama Cultural Welcome",
      description: "Traditional ceremony welcoming delegates to Panama",
      duration: "8:15",
      date: "October 24, 2025",
      category: "Cultural",
      thumbnail: "/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png",
      featured: false
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
              SB8J-1 Videos
            </h1>

            <SB8J1Navigation currentPage="videos" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Event Videos</h2>
            <p className="text-muted-foreground">Watch highlights and key moments from SB8J-1</p>
          </div>
          
          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div 
                    className="aspect-video bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="icon" className="bg-white/90 text-primary hover:bg-white w-16 h-16 rounded-full shadow-lg">
                        <Play className="h-8 w-8 ml-1" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </span>
                    </div>
                    {video.featured && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-secondary text-white">Featured</Badge>
                      </div>
                    )}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {video.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Duration: {video.duration}</span>
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

export default SB8J1Videos;
