import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calendar, Clock, Tag, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

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
      title: "SB8J-1 Meeting Officially Opens in Panama City",
      date: "October 27, 2025",
      category: "Breaking News",
      summary: "The historic first meeting of the Subsidiary Body on Implementation of Article 8(j) officially commenced with delegates from Indigenous Peoples and local communities worldwide.",
      readTime: "3 min read",
      featured: true
    },
    {
      title: "Indigenous Youth Voices Take Center Stage",
      date: "October 26, 2025",
      category: "Community",
      summary: "Young Indigenous leaders present their vision for biodiversity conservation and intergenerational knowledge transfer at pre-meeting consultations.",
      readTime: "4 min read",
      featured: false
    },
    {
      title: "Traditional Knowledge Systems Recognition Framework Unveiled",
      date: "October 25, 2025",
      category: "Policy",
      summary: "A new framework for recognizing and protecting Indigenous traditional knowledge systems in biodiversity governance has been presented to delegates.",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Panama Welcomes Global Indigenous Representatives",
      date: "October 24, 2025",
      category: "Event News",
      summary: "Panama City officially welcomes hundreds of Indigenous representatives from seven regions for the landmark SB8J-1 meeting.",
      readTime: "2 min read",
      featured: false
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
              <Calendar className="h-3 w-3" />
              {item.date}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                {item.category}
              </span>
              {item.featured && (
                <span className="bg-secondary/10 text-secondary px-1 py-0.5 rounded-full text-xs font-medium">
                  Featured
                </span>
              )}
            </div>
            <CardTitle className="text-lg leading-tight line-clamp-2">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <p className="text-sm text-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
              {item.summary}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{item.readTime}</span>
              </div>
              <Button size="sm" className="bg-secondary text-white hover:bg-secondary/90">
                Read More
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-between min-h-[50vh] sm:min-h-[45vh] md:min-h-[40vh] lg:min-h-[35vh] xl:min-h-[30vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="flex-1 flex items-center">
            <div className="text-white text-center w-full">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                News
                <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                  Latest SB8J-1 Updates
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Stay informed with the latest developments from the first Article 8(j) subsidiary body meeting
              </p>

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
                      
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white/70 text-lg font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-sm">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">Videos</Link>
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
