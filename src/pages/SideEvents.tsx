import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, ArrowRight, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

// Using uploaded Indigenous community photos
const sb8jEventImage = '/lovable-uploads/92063f54-04a6-4747-9804-6d8f59490788.png';
const sbsttaEventImage = '/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png';

const SideEvents = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('side-events-view');
    return (saved as ViewType) || 'grid';
  });
  const { imageUrl, isLoading } = usePexelsImage('side-events');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('side-events-view', view);
  };

  const events = [
    {
      id: 1,
      title: "Indigenous Knowledge Systems in Biodiversity Conservation",
      description: "A collaborative dialogue exploring how traditional ecological knowledge can inform modern conservation strategies and policy frameworks.",
      date: "October 25, 2025",
      time: "09:00 - 11:00",
      location: "Panama Convention Center - Room A",
      organizer: "IIFB & CBD Secretariat",
      category: "Conservation",
      tags: ["Traditional Knowledge", "Biodiversity", "Policy"],
      image: "/lovable-uploads/ec6e375b-657d-445c-9c03-e67802b1955d.png"
    },
    {
      id: 2,
      title: "Digital Sequence Information: Bridging Science and Rights",
      description: "Technical workshop on digital sequence information implications for Indigenous Peoples' rights and benefit-sharing mechanisms.",
      date: "October 26, 2025",
      time: "14:00 - 16:00",
      location: "Panama Convention Center - Room B",
      organizer: "Scientific Partners Consortium",
      category: "Technology",
      tags: ["DSI", "Rights", "Benefit-Sharing"],
      image: "/lovable-uploads/4ce61eb0-9a7e-42be-874b-4ef64ec8d003.png"
    },
    {
      id: 3,
      title: "Youth Voices in Biodiversity Governance",
      description: "Interactive session featuring Indigenous youth leaders sharing perspectives on biodiversity conservation and traditional knowledge preservation.",
      date: "October 27, 2025",
      time: "16:30 - 18:00",
      location: "Panama Convention Center - Main Hall",
      organizer: "Indigenous Youth Network",
      category: "Youth",
      tags: ["Youth", "Governance", "Conservation"],
      image: "/lovable-uploads/b5f1ddc9-2378-4be9-ac3f-0d14e3249153.png"
    },
    {
      id: 4,
      title: "Community-Based Monitoring Systems",
      description: "Hands-on workshop demonstrating how Indigenous communities are using technology to monitor biodiversity and environmental changes.",
      date: "October 28, 2025",
      time: "10:00 - 12:00",
      location: "Panama Convention Center - Room C",
      organizer: "Community Monitoring Alliance",
      category: "Monitoring",
      tags: ["Community", "Technology", "Biodiversity"],
      image: "/lovable-uploads/52900254-5d2a-47fb-b939-34f5734c2fa1.png"
    },
    {
      id: 5,
      title: "Financing Indigenous-Led Conservation",
      description: "Panel discussion on innovative funding mechanisms and partnerships to support Indigenous-led biodiversity conservation initiatives.",
      date: "October 29, 2025",
      time: "13:00 - 15:00",
      location: "Panama Convention Center - Room A",
      organizer: "Conservation Finance Network",
      category: "Finance",
      tags: ["Finance", "Conservation", "Partnerships"],
      image: "/lovable-uploads/e7288d9d-1175-4f7d-8c6a-098b2ba82056.png"
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const filteredEvents = events.filter(event => {
    const searchMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = !categoryFilter || categoryFilter === 'all' || event.category === categoryFilter;
    return searchMatch && categoryMatch;
  });

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
              Side Events & Workshops
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Explore a diverse range of side events and workshops at SB8J-1
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Filters and View Toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Input
                type="search"
                placeholder="Search events..."
                className="w-full md:w-64 lg:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {[...new Set(events.map(event => event.category))].map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>

          {/* Event Listing */}
          {filteredEvents.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No events found matching your criteria.
            </div>
          ) : (
            <div className={currentView === 'cards' ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "grid grid-cols-1 gap-4"}>
              {filteredEvents.map(event => (
                <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div 
                      className="aspect-video bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${event.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-secondary text-white">{event.category}</Badge>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {event.organizer}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideEvents;
