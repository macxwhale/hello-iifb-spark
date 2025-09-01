
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ExternalLink, Globe } from 'lucide-react';
import { usePexelsImage } from '@/hooks/usePexelsImage';

const SBSTTA27SideEvents = () => {
  const { imageUrl, isLoading } = usePexelsImage('sbstta-27-side-events');

  const events = [
    {
      id: 6754,
      title: "Indigenous Peoples and local communities contributions and views on the global review of collective progress in the implementation of the Kunming-Montreal Global Biodiversity Framework",
      description: "A comprehensive dialogue on Indigenous Peoples and local communities' perspectives on monitoring and reviewing progress toward achieving the global biodiversity targets.",
      date: "Monday, 20 October 2025",
      time: "13:15 - 14:45",
      location: "Indigenous Peoples and Local Communities Group meeting room Ground floor (Capacity 176 People)",
      organizers: ["IIFB", "IWBN", "IUCN", "IIN", "RMIB-LAC"],
      languages: ["English", "Spanish"],
      url: "https://www.cbd.int/side-events/6754",
      category: "Indigenous Rights",
      tags: ["KMGBF", "Global Review", "Indigenous Knowledge", "Collective Progress"],
      image: "/lovable-uploads/491c8948-0c3c-454d-a003-f3b7a5662af5.png"
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
              SBSTTA-27 Side Events
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Side events and workshops during the 27th Scientific Advisory Meeting
            </p>

            <SBSTTA27Navigation currentPage="side-events" />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {events.length === 0 ? (
            <div className="text-center text-muted-foreground">
              More side events will be announced soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {events.map(event => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Event Image */}
                    <div className="relative h-80 lg:h-full overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-white">
                          {event.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-8 lg:p-10 flex flex-col">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-base text-muted-foreground leading-relaxed">
                          {event.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-6 flex-grow">
                        {/* Event Info */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-foreground">
                            <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-3 text-foreground">
                            <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-start gap-3 text-foreground">
                            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-foreground">
                            <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>{event.languages.join(' / ')}</span>
                          </div>
                        </div>

                        {/* Organizers */}
                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                          <p className="text-sm text-muted-foreground mb-2">Organized by</p>
                          <div className="flex flex-wrap gap-2">
                            {event.organizers.map((org, index) => (
                              <span
                                key={index}
                                className="bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded text-sm font-medium"
                              >
                                {org}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Button */}
                        <div className="pt-4">
                          <a href={event.url} target="_blank" rel="noopener noreferrer">
                            <Button className="w-full group bg-primary hover:bg-primary/90 text-white">
                              View Event Details
                              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </a>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* More Events Coming Soon */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-subtle p-8 rounded-lg border border-border/30">
              <h3 className="text-xl font-bold text-foreground mb-4">More Events Coming Soon</h3>
              <p className="text-muted-foreground">
                Additional side events for SBSTTA-27 will be announced as they are confirmed. 
                Please check back regularly for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27SideEvents;
