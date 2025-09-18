
import { useState } from 'react';
import SBSTTA27Hero from '@/components/SBSTTA27Hero';
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
      <SBSTTA27Hero title="SBSTTA-27 Videos" currentPage="videos" />

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-xl text-muted-foreground">Videos will be available soon.</p>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27Videos;
