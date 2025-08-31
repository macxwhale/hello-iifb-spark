
import { useState } from 'react';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Calendar, Clock } from 'lucide-react';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SBSTTA27Videos = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sbstta27-videos-view');
    return (saved as ViewType) || 'cards';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sbstta27-videos-view', view);
  };

  const videos = [
    {
      title: "SBSTTA-27 Opening Ceremony",
      description: "Official opening of the 27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice",
      date: "October 20, 2025",
      duration: "45:30",
      category: "Ceremony",
      thumbnail: "/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png"
    },
    {
      title: "Global Biodiversity Framework Progress Review",
      description: "Scientific assessment of progress toward the Kunming-Montreal Global Biodiversity Framework targets",
      date: "October 21, 2025",
      duration: "38:15",
      category: "Assessment",
      thumbnail: "/lovable-uploads/4ce61eb0-9a7e-42be-874b-4ef64ec8d003.png"
    },
    {
      title: "Invasive Alien Species: Scientific Perspectives",
      description: "Expert panel discussion on invasive species impacts and management strategies",
      date: "October 22, 2025",
      duration: "52:20",
      category: "Panel",
      thumbnail: "/lovable-uploads/52900254-5d2a-47fb-b939-34f5734c2fa1.png"
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
              SBSTTA-27 Videos
            </h1>

            <SBSTTA27Navigation currentPage="videos" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Event Videos</h2>
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="relative">
                  <div 
                    className="aspect-video bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  >
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-secondary text-white">{video.category}</Badge>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="outline" className="bg-black/50 text-white border-white/50">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {video.date}
                    <Clock className="h-3 w-3 ml-2" />
                    {video.duration}
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

export default SBSTTA27Videos;
