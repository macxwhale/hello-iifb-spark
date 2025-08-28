import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Mic, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';
import sb8jEventImage from '@/assets/sb8j-event.jpg';
import sbsttaEventImage from '@/assets/sbstta-event.jpg';

const SB8J1SideEvents = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-side-events-view');
    return (saved as ViewType) || 'cards';
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { imageUrl, isLoading } = usePexelsImage('sb8j-side-events');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j-side-events-view', view);
  };

  const sideEvents = [
    {
      title: "Indigenous Women's Knowledge Systems Workshop",
      date: "27",
      month: "October",
      year: "2025",
      fullDate: "October 27, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Conference Room A",
      organizer: "Indigenous Women's Network",
      summary: "Interactive workshop exploring the critical role of Indigenous women as knowledge keepers and environmental stewards in biodiversity conservation.",
      capacity: "50 participants",
      status: "Open Registration",
      image: sb8jEventImage,
      keynoteSpeakers: [
        {
          name: "Dr. María Xólotl Gonzalez",
          title: "Traditional Knowledge Keeper",
          affiliation: "Nahua Nation, Mexico",
          bio: "Leading expert in traditional ecological knowledge and sustainable forest management practices."
        },
        {
          name: "Patricia Gualinga",
          title: "Indigenous Rights Advocate",
          affiliation: "Kichwa People, Ecuador", 
          bio: "Internationally recognized leader in Indigenous women's rights and environmental protection."
        }
      ]
    },
    {
      title: "Youth Voices for Intergenerational Equity",
      date: "28",
      month: "October", 
      year: "2025",
      fullDate: "October 28, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Cultural Center Hall",
      organizer: "Global Indigenous Youth Caucus",
      summary: "Forum for Indigenous youth to share their perspectives on climate action and biodiversity protection for future generations.",
      capacity: "100 participants",
      status: "Registration Full",
      image: sbsttaEventImage,
      keynoteSpeakers: [
        {
          name: "Autumn Peltier",
          title: "Water Protector",
          affiliation: "Anishinaabe Nation, Canada",
          bio: "Young water activist advocating for Indigenous water rights and environmental justice."
        },
        {
          name: "Txai Suruí",
          title: "Climate Activist",
          affiliation: "Paiter Suruí People, Brazil",
          bio: "Youth climate leader fighting for Amazon protection and Indigenous land rights."
        }
      ]
    },
    {
      title: "Traditional Ecological Knowledge Documentation",
      date: "29",
      month: "October",
      year: "2025", 
      fullDate: "October 29, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Workshop Room B",
      organizer: "Knowledge Holders Alliance",
      summary: "Collaborative session on best practices for documenting and protecting traditional ecological knowledge systems.",
      capacity: "30 participants",
      status: "Open Registration",
      image: sb8jEventImage,
      keynoteSpeakers: [
        {
          name: "Dr. Robin Wall Kimmerer",
          title: "Botanist & Author",
          affiliation: "Citizen Potawatomi Nation, USA",
          bio: "Distinguished scholar integrating Indigenous wisdom with scientific knowledge."
        }
      ]
    },
    {
      title: "Community-Based Conservation Success Stories",
      date: "30",
      month: "October",
      year: "2025",
      fullDate: "October 30, 2025", 
      time: "3:00 PM - 6:00 PM",
      location: "Main Auditorium",
      organizer: "IPLC Conservation Network",
      summary: "Showcase of successful community-led conservation initiatives from Indigenous Peoples and local communities worldwide.",
      capacity: "200 participants",
      status: "Open Registration",
      image: sbsttaEventImage,
      keynoteSpeakers: [
        {
          name: "Hindou Oumarou Ibrahim",
          title: "Climate Researcher",
          affiliation: "Mbororo Pastoralist Community, Chad",
          bio: "Expert in Indigenous knowledge systems for climate adaptation and environmental conservation."
        },
        {
          name: "Dr. Darren Walker",
          title: "Conservation Biologist",
          affiliation: "Māori, New Zealand",
          bio: "Leading researcher in community-based conservation and traditional management systems."
        }
      ]
    }
  ];

  const renderCardsView = () => (
    <div className="grid gap-8">
      {sideEvents.map((event, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'Open Registration' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
                <CardTitle className="text-xl md:text-2xl mb-2 leading-tight">
                  {event.title}
                </CardTitle>
                <CardDescription>
                  Organized by {event.organizer}
                </CardDescription>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div className="flex items-center gap-1 mb-1">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {event.time}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>{event.capacity}</span>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              {event.summary}
            </p>
            
            {/* Keynote Speakers Section */}
            <div className="border-t border-border pt-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Mic className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-semibold text-foreground">Keynote Speakers</h4>
              </div>
              <div className="space-y-3">
                {event.keynoteSpeakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex} className="bg-muted/30 p-3 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground">{speaker.name}</h5>
                        <p className="text-sm text-primary font-medium">{speaker.title}</p>
                        <p className="text-xs text-muted-foreground">{speaker.affiliation}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{speaker.bio}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                size="sm" 
                className="bg-secondary text-white hover:bg-secondary/90"
                disabled={event.status === 'Registration Full'}
              >
                {event.status === 'Registration Full' ? 'Registration Full' : 'Register Now'}
              </Button>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sideEvents.map((event, index) => (
        <Card key={index} className="h-full bg-card border-2 border-transparent hover:border-secondary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer">
          {/* Featured Image */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Date Badge */}
            <div className="absolute top-4 right-4 bg-primary text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-2xl font-bold leading-none">{event.date}</span>
              <span className="text-xs font-medium leading-none">{event.month}</span>
              <span className="text-xs leading-none opacity-90">{event.year}</span>
            </div>
          </div>
          
          {/* Content */}
          <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {event.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed line-clamp-2 flex-1">
              {event.summary}
            </p>
            
            {/* Event Details */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="text-primary font-medium">
                Organized by: {event.organizer}
              </div>
            </div>
            
            {/* Learn More Button */}
            <div className="pt-4 border-t border-border/50 mt-auto">
              <Button 
                variant="ghost" 
                className="w-full justify-start group/btn hover:bg-primary/5 p-0"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-primary font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {sideEvents.map((event, index) => (
        <div key={index} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  event.status === 'Open Registration' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {event.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-muted-foreground">Organized by {event.organizer}</p>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <div className="flex items-center gap-1 mb-1">
                <Calendar className="h-4 w-4" />
                {event.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {event.time}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{event.capacity}</span>
            </div>
          </div>
          <p className="text-sm text-foreground leading-relaxed mb-4 line-clamp-2">
            {event.summary}
          </p>
          
          {/* Keynote Speakers - List Version */}
          <div className="border-t border-border pt-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Mic className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-semibold text-foreground">Keynote Speakers</h4>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {event.keynoteSpeakers.map((speaker, speakerIndex) => (
                <div key={speakerIndex} className="bg-muted/30 p-3 rounded-md">
                  <h5 className="text-sm font-medium text-foreground">{speaker.name}</h5>
                  <p className="text-xs text-primary font-medium">{speaker.title}</p>
                  <p className="text-xs text-muted-foreground">{speaker.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              size="sm" 
              className="bg-secondary text-white hover:bg-secondary/90"
              disabled={event.status === 'Registration Full'}
            >
              {event.status === 'Registration Full' ? 'Registration Full' : 'Register Now'}
            </Button>
            <Button size="sm" variant="outline">
              View Details
            </Button>
          </div>
        </div>
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
                SB8J-1 Side Events
              </h1>

              <SB8J1Navigation currentPage="side-events" />
            </div>
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
                Interactive workshops and community forums happening alongside SB8J-1 in Panama City.
              </p>
            </div>
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>
          
          {/* Content based on selected view */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SB8J1SideEvents;
