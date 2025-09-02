import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SBSTTA27SideEvents = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sbstta27-side-events-view');
    return (saved as ViewType) || 'cards';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sbstta27-side-events-view', view);
  };

  const sideEvents = [
    {
      id: 6754,
      title: "Indigenous Peoples and local communities contributions and views on the global review of collective progress in the implementation of the Kunming-Montreal Global Biodiversity Framework",
      description: "Discussion on Indigenous Peoples and local communities perspectives on monitoring and reviewing progress towards the global biodiversity targets, ensuring meaningful participation in assessment processes.",
      date: "20",
      month: "October",
      year: "2025",
      day: "Monday",
      time: "13:15 - 14:45",
      location: "Indigenous Peoples and Local Communities Group meeting room - Ground floor (Capacity 176 People)",
      organizer: "IIFB | IWBN | IUCN | IIN | RMIB-LAC",
      interpretation: "Eng/Sp",
      image: '/lovable-uploads/ec6e375b-657d-445c-9c03-e67802b1955d.png',
      link: "https://www.cbd.int/side-events/6754"
    }
  ];

  const renderCardsView = () => (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
      {sideEvents.map((event) => (
        <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="relative">
            <div 
              className="aspect-video bg-cover bg-center relative"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center shadow-lg">
                <span className="text-2xl font-bold leading-none">{event.date}</span>
                <span className="text-xs font-medium leading-none">{event.month}</span>
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-secondary text-white">#{event.id}</Badge>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground line-clamp-3 group-hover:text-primary transition-colors mb-4">
              {event.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {event.description}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{event.day}, {event.time}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2">{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="text-primary font-medium">{event.organizer}</span>
              </div>
              <div className="text-xs">
                Interpretation: {event.interpretation}
              </div>
            </div>
            <a 
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button className="w-full group/btn text-white hover:opacity-90" style={{ backgroundColor: '#741b00' }}>
                <ExternalLink className="h-4 w-4 mr-2" />
                View Event Details
                <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sideEvents.map((event) => (
        <Card key={event.id} className="hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-2 right-2 bg-primary text-white rounded-full w-12 h-12 flex flex-col items-center justify-center text-xs">
                <span className="font-bold">{event.date}</span>
                <span>{event.month.slice(0, 3)}</span>
              </div>
              <div className="absolute top-2 left-2">
                <Badge className="bg-secondary text-white text-xs">#{event.id}</Badge>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="text-sm font-bold text-foreground line-clamp-2 mb-2">
              {event.title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
              {event.description}
            </p>
            <div className="space-y-1 text-xs text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{event.time}</span>
              </div>
              <div className="line-clamp-1">{event.organizer}</div>
            </div>
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="w-full text-white hover:opacity-90 text-xs" style={{ backgroundColor: '#741b00' }}>
                View Details
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {sideEvents.map((event) => (
        <Card key={event.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-secondary text-white">#{event.id}</Badge>
                  <span className="text-sm text-muted-foreground">{event.day}, {event.date} {event.month} {event.year}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {event.time}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-muted-foreground mb-3">{event.description}</p>
                <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-primary">{event.organizer}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Interpretation: {event.interpretation}
                </div>
              </div>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="ml-4">
                <Button className="text-white hover:opacity-90" style={{ backgroundColor: '#741b00' }}>
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </a>
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
              SBSTTA-27 Side Events
            </h1>

            <SBSTTA27Navigation currentPage="side-events" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Side Events</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Official side events organized alongside SBSTTA-27 to enhance discussions on biodiversity science and policy.
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

export default SBSTTA27SideEvents;
