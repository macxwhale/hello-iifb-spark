
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const SideEventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sideEvents = [
    {
      id: 1,
      title: "Indigenous Knowledge Systems for Biodiversity Conservation",
      date: "October 27, 2025",
      time: "09:00 - 12:00",
      location: "Convention Center - Room A",
      organizer: "International Indigenous Forum on Biodiversity",
      description: "Exploring traditional ecological knowledge and its integration into modern conservation practices. This session will highlight successful case studies from Indigenous communities worldwide.",
      participants: "50",
      tags: ["Traditional Knowledge", "Conservation", "Indigenous Rights"],
      image: "/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png"
    },
    {
      id: 2,
      title: "Community-Based Natural Resource Management",
      date: "October 28, 2025",
      time: "14:00 - 17:00",
      location: "Convention Center - Room B",
      organizer: "Global Indigenous Alliance",
      description: "Discussing community-led approaches to natural resource management and their effectiveness in biodiversity conservation.",
      participants: "75",
      tags: ["Community Management", "Natural Resources", "Sustainability"],
      image: "/lovable-uploads/491c8948-0c3c-454d-a003-f3b7a5662af5.png"
    },
    {
      id: 3,
      title: "Digital Tools for Indigenous Territory Mapping",
      date: "October 29, 2025",
      time: "10:00 - 13:00",
      location: "Convention Center - Room C",
      organizer: "Indigenous Technology Network",
      description: "Hands-on workshop on using digital mapping tools to document and protect Indigenous territories and sacred sites.",
      participants: "30",
      tags: ["Digital Tools", "Territory Mapping", "Technology"],
      image: "/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sideEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sideEvents.length) % sideEvents.length);
  };

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-secondary rotate-45"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-accent rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Side Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-secondary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join specialized sessions and workshops that complement the main meetings
          </p>
        </div>

        {/* Events Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between z-20 pointer-events-none">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="pointer-events-auto -translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="pointer-events-auto translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white shadow-lg"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Event Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {sideEvents.map((event) => (
                <div key={event.id} className="w-full flex-shrink-0 px-4">
                  <Card className="overflow-hidden shadow-strong hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/80">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Event Image */}
                      <div className="relative h-80 lg:h-full overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-secondary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Side Event
                          </span>
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
                              <Calendar className="h-5 w-5 text-secondary flex-shrink-0" />
                              <span className="font-medium">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-3 text-foreground">
                              <Clock className="h-5 w-5 text-secondary flex-shrink-0" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-3 text-foreground">
                              <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-foreground">
                              <Users className="h-5 w-5 text-secondary flex-shrink-0" />
                              <span>{event.participants} participants expected</span>
                            </div>
                          </div>

                          {/* Organizer */}
                          <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                            <p className="text-sm text-muted-foreground mb-1">Organized by</p>
                            <p className="font-medium text-foreground">{event.organizer}</p>
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
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {sideEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-secondary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <Link to="/sb8j-1/side-events/all">
            <Button 
              className="bg-secondary hover:bg-secondary-hover text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Events
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SideEventsCarousel;
