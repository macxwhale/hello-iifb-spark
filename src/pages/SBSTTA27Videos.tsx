
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border">
            <h2 className="text-4xl font-bold text-foreground mb-6">Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Video recordings of SBSTTA-27 sessions and presentations will be available here during and after the meeting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-iifb-orange rounded-full animate-pulse"></div>
                <span>Meeting starts October 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
                <span>Videos available post-session</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Videos;
