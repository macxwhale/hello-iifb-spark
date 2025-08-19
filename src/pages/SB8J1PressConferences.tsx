import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, Clock, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SB8J1PressConferences = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-press-conferences-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-press-conferences');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j-press-conferences-view', view);
  };

  const pressConferences = [
    {
      title: "Opening Press Conference - IIFB Leadership",
      date: "October 27, 2025",
      time: "10:00 AM",
      location: "Panama Convention Center - Press Room A",
      speakers: ["Maria Santos", "Dr. James Anaya", "Rosa Tanguila"],
      status: "Upcoming",
      description: "IIFB leadership will outline key priorities and expectations for the first meeting of the Subsidiary Body on Article 8(j)."
    },
    {
      title: "Traditional Knowledge Protection Framework",
      date: "October 28, 2025",
      time: "2:00 PM",
      location: "Panama Convention Center - Press Room B",
      speakers: ["Dr. Patricia Gualinga", "Chief Robert Joseph"],
      status: "Upcoming",
      description: "Experts discuss the proposed framework for protecting traditional knowledge and ensuring Indigenous intellectual property rights."
    },
    {
      title: "Indigenous Women and Biodiversity Conservation",
      date: "October 29, 2025",
      time: "11:00 AM",
      location: "Panama Convention Center - Main Auditorium",
      speakers: ["Hindou Oumarou Ibrahim", "Victoria Tauli-Corpuz", "Galina Angarova"],
      status: "Upcoming",
      description: "Indigenous women leaders highlight their crucial role in biodiversity conservation and environmental stewardship."
    },
    {
      title: "Daily Briefing - Day 1 Outcomes",
      date: "October 27, 2025",
      time: "6:00 PM",
      location: "Panama Convention Center - Press Room A",
      speakers: ["IIFB Communications Team"],
      status: "Scheduled",
      description: "Daily briefing on the first day's negotiations, key decisions, and upcoming agenda items."
    },
    {
      title: "Youth Perspectives on Article 8(j) Implementation",
      date: "October 30, 2025",
      time: "9:00 AM",
      location: "Panama Convention Center - Press Room C",
      speakers: ["Indigenous Youth Caucus Representatives"],
      status: "Upcoming",
      description: "Young Indigenous leaders share their vision for the future implementation of Article 8(j) and intergenerational knowledge transfer."
    },
    {
      title: "Closing Press Conference - Meeting Outcomes",
      date: "October 30, 2025",
      time: "5:00 PM",
      location: "Panama Convention Center - Main Auditorium",
      speakers: ["IIFB Co-Chairs", "Key Negotiators"],
      status: "Upcoming",
      description: "Comprehensive overview of meeting outcomes, agreements reached, and next steps for Article 8(j) implementation."
    }
  ];

  const renderCardsView = () => (
    <div className="grid gap-6">
      {pressConferences.map((conference, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={conference.status === 'Upcoming' ? 'default' : 'secondary'} 
                         className={conference.status === 'Upcoming' ? 'bg-secondary' : ''}>
                    {conference.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{conference.title}</CardTitle>
                <CardDescription className="text-base">
                  Speakers: {conference.speakers.join(', ')}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed mb-4">{conference.description}</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {conference.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {conference.time}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {conference.location}
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="bg-secondary text-white hover:bg-secondary-hover">
                Register for Media Access
              </Button>
              <Button variant="outline">
                Add to Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pressConferences.map((conference, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Badge variant={conference.status === 'Upcoming' ? 'default' : 'secondary'} 
                   className={`w-fit mb-2 ${conference.status === 'Upcoming' ? 'bg-secondary' : ''}`}>
              {conference.status}
            </Badge>
            <CardTitle className="text-lg line-clamp-2">{conference.title}</CardTitle>
            <CardDescription className="text-sm line-clamp-2">
              Speakers: {conference.speakers.join(', ')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{conference.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {conference.date}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {conference.time}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span className="line-clamp-1">{conference.location}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
                Register
              </Button>
              <Button size="sm" variant="outline">
                Add to Calendar
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {pressConferences.map((conference, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant={conference.status === 'Upcoming' ? 'default' : 'secondary'} 
                         className={conference.status === 'Upcoming' ? 'bg-secondary' : ''}>
                    {conference.status}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {conference.date}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {conference.time}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{conference.title}</h3>
                <p className="text-muted-foreground mb-2">{conference.description}</p>
                <div className="text-sm text-muted-foreground mb-2">
                  <strong>Speakers:</strong> {conference.speakers.join(', ')}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {conference.location}
                </div>
              </div>
              <div className="flex flex-col gap-2 ml-4">
                <Button className="bg-secondary text-white hover:bg-secondary-hover">
                  Register for Media Access
                </Button>
                <Button variant="outline">
                  Add to Calendar
                </Button>
              </div>
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
                SB8J-1
                <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                  First Meeting on Article 8(j)
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Historic milestone for Indigenous Peoples and local communities in biodiversity governance
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

              <div className="pt-8">
                <nav className="hidden md:block">
                  <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                    <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Home</Link>
                    <Link to="/sb8j-1/about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">About</Link>
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Statements</Link>
                    <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Documents</Link>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-xl font-medium">
                          News & Media
                          <ChevronDown className="ml-1 h-3 w-3" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-[220px]">
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/news" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            General News
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/media-coverage" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Media Coverage Links
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/social-toolkit" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            IIFB Social Media Toolkit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/press-conferences" className="w-full px-3 py-2 text-gray-700 bg-gray-100">
                            Press Conferences
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/articles" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Articles
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/videos" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Videos
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Side Events</Link>
                  </div>
                </nav>

                <div className="md:hidden flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
                    onClick={toggleMenu}
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>

                {isMenuOpen && (
                  <nav className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-xl">Home</Link>
                      <Link to="/sb8j-1/about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-xl">About</Link>
                      <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-xl">Statements</Link>
                      <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-xl">Documents</Link>
                      
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white bg-white/20 text-xl font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-lg">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Videos</Link>
                      </div>
                      
                      <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-xl">Side Events</Link>
                    </div>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Press Conferences</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Scheduled press conferences and media briefings during SB8J-1 meeting in Panama City.
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

export default SB8J1PressConferences;
