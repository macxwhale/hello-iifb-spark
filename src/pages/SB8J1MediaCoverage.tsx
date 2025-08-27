
import { useState } from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';

const SB8J1MediaCoverage = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-media-coverage-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-media-coverage');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j-media-coverage-view', view);
  };

  const mediaItems = [
    {
      title: "BBC World Service - Indigenous Rights in Focus",
      type: "Podcast",
      source: "BBC World Service",
      date: "October 15, 2025",
      duration: "28 minutes",
      url: "#",
      description: "Deep dive into the significance of SB8J-1 and its potential impact on global biodiversity governance."
    },
    {
      title: "CNN International - Panama Prepares for Historic Meeting",
      type: "News Article",
      source: "CNN International",
      date: "October 12, 2025",
      url: "#",
      description: "Coverage of Panama's preparations to host the first meeting of the Subsidiary Body on Article 8(j)."
    },
    {
      title: "Indigenous Voice Radio - IIFB Leaders Interview",
      type: "Radio Interview",
      source: "Indigenous Voice Radio",
      date: "October 10, 2025",
      duration: "45 minutes",
      url: "#",
      description: "Exclusive interview with IIFB leaders discussing expectations and goals for SB8J-1."
    },
    {
      title: "The Guardian - Traditional Knowledge Protection",
      type: "Feature Article",
      source: "The Guardian",
      date: "October 8, 2025",
      url: "#",
      description: "In-depth analysis of traditional knowledge protection mechanisms being discussed at SB8J-1."
    },
    {
      title: "Al Jazeera English - Indigenous Women's Perspectives",
      type: "Documentary",
      source: "Al Jazeera English",
      date: "October 5, 2025",
      duration: "22 minutes",
      url: "#",
      description: "Documentary featuring Indigenous women leaders and their roles in biodiversity conservation."
    }
  ];

  const renderCardsView = () => (
    <div className="grid gap-6">
      {mediaItems.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{item.type}</Badge>
                  {item.duration && (
                    <Badge variant="outline">{item.duration}</Badge>
                  )}
                </div>
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                <CardDescription className="text-base font-medium">{item.source}</CardDescription>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {item.date}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed mb-4">{item.description}</p>
            <Button className="bg-secondary text-white hover:bg-secondary-hover">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Coverage
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mediaItems.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{item.type}</Badge>
              {item.duration && (
                <Badge variant="outline" className="text-xs">{item.duration}</Badge>
              )}
            </div>
            <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
            <CardDescription className="text-sm">{item.source}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {item.date}
              </div>
              <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                <ExternalLink className="h-3 w-3 mr-1" />
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {mediaItems.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary">{item.type}</Badge>
                  {item.duration && <Badge variant="outline">{item.duration}</Badge>}
                  <span className="text-sm font-medium">{item.source}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <Button className="bg-secondary text-white hover:bg-secondary-hover ml-4">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Coverage
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'grid':
        return renderGridView();
      case 'list':
        return renderListView();
      default:
        return renderCardsView();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-fit h-auto overflow-hidden">
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

        <div className="relative z-10 flex flex-col justify-between min-h-[50vh] sm:min-h-[45vh] md:min-h-[40vh] lg:min-h-[35vh] xl:min-h-[30vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="flex-1 flex items-center">
            <div className="text-white text-center w-full">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                SB8J-1 Media Coverage
                <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                  External News & Media Links
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                External coverage and analysis from global media outlets
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-lg">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>October 27-30, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-lg">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Panama City, Panama</span>
                </div>
              </div>

              <SB8J1Navigation currentPage="media-coverage" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Media Coverage Links</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                External news coverage, podcasts, and interviews about SB8J-1 and Indigenous Peoples' participation in biodiversity governance.
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

export default SB8J1MediaCoverage;
