import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, Download, Calendar, ChevronDown, ArrowRight, Clock } from 'lucide-react';
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
import indigenousBodyImage from '@/assets/news-indigenous-body.jpg';
import panamaMeetingsImage from '@/assets/news-panama-meetings.jpg';
import ipbesWorkshopImage from '@/assets/news-ipbes-workshop.jpg';

const SB8J1News = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j1-news-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-news');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j1-news-view', view);
  };

  const newsItems = [
    {
      title: "Historic Indigenous Subsidiary Body Approved at CBD COP16",
      description: "The Convention on Biological Diversity takes a groundbreaking step by establishing a permanent subsidiary body for Indigenous Peoples and local communities.",
      summary: "The Convention on Biological Diversity takes a groundbreaking step by establishing a permanent subsidiary body for Indigenous Peoples and local communities.",
      date: "March 15, 2025",
      day: "15",
      month: "Mar",
      category: "Breaking News",
      image: indigenousBodyImage,
      readTime: "5 min read",
      featured: true
    },
    {
      title: "Panama Prepares to Welcome Global Indigenous Leaders",
      description: "Panama City gears up to host the inaugural SB8J-1 meeting, bringing together Indigenous representatives from around the world.",
      summary: "Panama City gears up to host the inaugural SB8J-1 meeting, bringing together Indigenous representatives from around the world.",
      date: "March 10, 2025",
      day: "10",
      month: "Mar",
      category: "Event Update",
      image: panamaMeetingsImage,
      readTime: "3 min read"
    },
    {
      title: "Traditional Knowledge Integration Guidelines Released",
      description: "New framework guidelines outline how traditional ecological knowledge will be incorporated into biodiversity conservation planning.",
      summary: "New framework guidelines outline how traditional ecological knowledge will be incorporated into biodiversity conservation planning.",
      date: "March 8, 2025",
      day: "8",
      month: "Mar",
      category: "Policy",
      image: ipbesWorkshopImage,
      readTime: "4 min read"
    },
    {
      title: "Youth Caucus Mobilizes for SB8J-1 Participation",
      description: "Indigenous youth organizations coordinate global participation in the historic first meeting of the subsidiary body.",
      summary: "Indigenous youth organizations coordinate global participation in the historic first meeting of the subsidiary body.",
      date: "March 5, 2025",
      day: "5",
      month: "Mar",
      category: "Community",
      image: indigenousBodyImage,
      readTime: "3 min read"
    },
    {
      title: "Financial Mechanisms for Indigenous Conservation Discussed",
      description: "Experts explore innovative financing approaches that respect Indigenous rights while supporting biodiversity goals.",
      summary: "Experts explore innovative financing approaches that respect Indigenous rights while supporting biodiversity goals.",
      date: "March 1, 2025",
      day: "1",
      month: "Mar",
      category: "Finance",
      image: panamaMeetingsImage,
      readTime: "6 min read"
    },
    {
      title: "Capacity Building Programs Launched Ahead of SB8J-1",
      description: "Training initiatives help Indigenous representatives prepare for meaningful participation in the subsidiary body meetings.",
      summary: "Training initiatives help Indigenous representatives prepare for meaningful participation in the subsidiary body meetings.",
      date: "February 28, 2025",
      day: "28",
      month: "Feb",
      category: "Education",
      image: ipbesWorkshopImage,
      readTime: "4 min read"
    }
  ];

  const renderCardsView = () => (
    <div className="grid gap-8">
      {newsItems.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {item.category}
                  </span>
                  {item.featured && (
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl md:text-2xl mb-2 leading-tight">
                  {item.title}
                </CardTitle>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {item.date}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed mb-4">
              {item.summary}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{item.readTime}</span>
              </div>
              <Button size="sm" className="bg-secondary text-white hover:bg-secondary/90">
                Read More
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsItems.map((item, index) => (
        <Card key={index} className="overflow-hidden bg-card border-2 border-transparent hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
          <div className="relative h-56 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Date Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-primary">{item.day}</span>
              <span className="text-xs font-medium text-muted-foreground uppercase">{item.month}</span>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                {item.category}
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {item.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
              {item.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{item.readTime}</span>
              <Button variant="ghost" className="group/btn hover:bg-primary/5 p-2">
                <span className="text-primary font-medium mr-2">Learn More</span>
                <ArrowRight className="h-4 w-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {newsItems.map((item, index) => (
        <div key={index} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {item.date}
            </div>
          </div>
          <p className="text-sm text-foreground leading-relaxed mb-4 line-clamp-2">
            {item.summary}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{item.readTime}</span>
            </div>
            <Button size="sm" className="bg-secondary text-white hover:bg-secondary/90">
              Read More
              <ArrowRight className="h-4 w-4 ml-2" />
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

              {/* Navigation */}
              <div className="pt-8">
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                  <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                    <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Home</Link>
                    <Link to="/sb8j-1/about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">About</Link>
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Statements</Link>
                    <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Documents</Link>
                    
                    {/* News & Media Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-xl font-medium">
                          News & Media
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-[220px]">
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/news" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100 bg-gray-100">
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
                          <Link to="/sb8j-1/press-conferences" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
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
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/gallery" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Gallery
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Side Events</Link>
                  </div>
                </nav>

                {/* Mobile Menu Button */}
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

                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <nav className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Home</Link>
                      <Link to="/sb8j-1/about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">About</Link>
                      <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Statements</Link>
                      <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Documents</Link>
                      
                      {/* Mobile News & Media submenu */}
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white bg-white/20 text-lg font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-sm">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Videos</Link>
                        <Link to="/sb8j-1/gallery" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Gallery</Link>
                      </div>
                      
                      <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Side Events</Link>
                    </div>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* View Toggle Controls */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Latest News</h2>
              <p className="text-muted-foreground">Stay updated with the latest developments from SB8J-1</p>
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

export default SB8J1News;
