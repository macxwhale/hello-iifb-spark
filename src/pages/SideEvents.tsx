
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import sb8jEventImage from '@/assets/sb8j-event.jpg';
import sbsttaEventImage from '@/assets/sbstta-event.jpg';

const sideEvents = [
  {
    id: 1,
    title: "Indigenous Women's Leadership in Biodiversity Conservation",
    description: "A panel discussion highlighting the critical role of Indigenous women in protecting and managing biodiversity, featuring leaders from across the Americas.",
    date: "October 21, 2025",
    time: "14:00 - 16:00",
    location: "Panama Convention Center - Room A",
    organizer: "International Indigenous Women's Forum",
    participants: "50-75",
    category: "Panel Discussion",
    featured: true,
    image: sb8jEventImage
  },
  {
    id: 2,
    title: "Traditional Ecological Knowledge Workshop",
    description: "Hands-on workshop demonstrating how traditional knowledge systems can inform modern conservation practices and spatial planning.",
    date: "October 22, 2025",
    time: "09:00 - 12:00",
    location: "Panama Convention Center - Room B",
    organizer: "IIFB Knowledge Systems Working Group",
    participants: "30-40",
    category: "Workshop",
    image: sbsttaEventImage
  },
  {
    id: 3,
    title: "Youth Voices for Biodiversity",
    description: "Interactive session where Indigenous youth share their vision for the future of biodiversity conservation and their role in implementing the Global Biodiversity Framework.",
    date: "October 23, 2025",
    time: "16:00 - 18:00",
    location: "Panama Convention Center - Main Hall",
    organizer: "Global Youth Biodiversity Network",
    participants: "100-150",
    category: "Interactive Session",
    image: sb8jEventImage
  },
  {
    id: 4,
    title: "Territorial Rights and Conservation Finance",
    description: "Exploring innovative financing mechanisms that respect Indigenous territorial rights while supporting biodiversity conservation goals.",
    date: "October 24, 2025",
    time: "10:00 - 12:00",
    location: "Panama Convention Center - Room C",
    organizer: "Indigenous Conservation Finance Coalition",
    participants: "40-60",
    category: "Roundtable",
    image: sbsttaEventImage
  },
  {
    id: 5,
    title: "Technology and Traditional Knowledge Integration",
    description: "Demonstrating how modern technology can support and enhance traditional knowledge systems without compromising their integrity.",
    date: "October 28, 2025",
    time: "14:00 - 17:00",
    location: "Panama Convention Center - Tech Lab",
    organizer: "Digital Indigenous Knowledge Alliance",
    participants: "25-35",
    category: "Demo Session",
    image: sb8jEventImage
  },
  {
    id: 6,
    title: "Community-Based Monitoring Networks",
    description: "Showcasing successful community-based biodiversity monitoring initiatives and how they contribute to global biodiversity assessments.",
    date: "October 29, 2025",
    time: "09:00 - 11:00",
    location: "Panama Convention Center - Room D",
    organizer: "Community Monitoring Alliance",
    participants: "60-80",
    category: "Showcase",
    image: sbsttaEventImage
  }
];

const SideEvents = () => {
  const featuredEvent = sideEvents.find(event => event.featured);
  const regularEvents = sideEvents.filter(event => !event.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Side Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complementary events that enrich the CBD Panama 2025 experience with diverse perspectives and innovative approaches
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Event</h2>
            </div>
            <Card className="overflow-hidden bg-card border-2 border-primary shadow-xl">
              {/* Featured Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                      <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {featuredEvent.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl mb-4">{featuredEvent.title}</CardTitle>
                    <CardDescription className="text-lg">{featuredEvent.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{featuredEvent.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Time</p>
                      <p className="font-medium">{featuredEvent.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{featuredEvent.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Capacity</p>
                      <p className="font-medium">{featuredEvent.participants}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    Register Now
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">All Side Events</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {regularEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden bg-card border border-border hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{event.participants}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:col-span-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1">
                      Register
                    </Button>
                    <Button variant="ghost" className="flex-1">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SideEvents;
