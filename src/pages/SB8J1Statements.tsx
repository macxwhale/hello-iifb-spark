
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText, Download, Calendar, ChevronDown } from 'lucide-react';
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

const SB8J1Statements = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j1-statements-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-statements');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j1-statements-view', view);
  };

  const statements = [
    {
      title: "Opening Statement by the IIFB",
      date: "October 27, 2025",
      author: "International Indigenous Forum on Biodiversity",
      summary: "The IIFB delivers a powerful opening statement, emphasizing the critical role of Indigenous Peoples in achieving global biodiversity targets and calling for the recognition of Indigenous rights and traditional knowledge.",
      file: "/assets/iifb-opening-statement.pdf"
    },
    {
      title: "Intervention on Traditional Knowledge",
      date: "October 28, 2025",
      author: "Indigenous Knowledge Holders",
      summary: "A panel of Indigenous Knowledge Holders shares profound insights on the importance of protecting and promoting traditional knowledge for effective biodiversity conservation and sustainable resource management.",
      file: "/assets/traditional-knowledge-intervention.pdf"
    },
    {
      title: "Statement on Gender and Biodiversity",
      date: "October 29, 2025",
      author: "Indigenous Women's Network",
      summary: "The Indigenous Women's Network delivers a compelling statement, highlighting the crucial role of Indigenous women as knowledge keepers and environmental stewards, and advocating for gender-responsive approaches in biodiversity policies.",
      file: "/assets/gender-biodiversity-statement.pdf"
    },
    {
      title: "Youth Statement on Intergenerational Equity",
      date: "October 30, 2025",
      author: "Global Indigenous Youth Caucus",
      summary: "The Global Indigenous Youth Caucus presents a passionate statement, urging decision-makers to ensure intergenerational equity and meaningful participation of Indigenous youth in biodiversity governance and decision-making processes.",
      file: "/assets/youth-statement-equity.pdf"
    }
  ];

  const renderCardsView = () => (
    <div className="grid gap-8">
      {statements.map((statement, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl md:text-2xl mb-2 leading-tight">
                  {statement.title}
                </CardTitle>
                <CardDescription>
                  {statement.author}
                </CardDescription>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {statement.date}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed mb-4">
              {statement.summary}
            </p>
            <div className="flex gap-3">
              <Button size="sm" className="bg-secondary text-white hover:bg-secondary/80">
                <FileText className="h-4 w-4 mr-2" />
                Read Full Statement
              </Button>
              <Button size="sm" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statements.map((statement, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
              <Calendar className="h-3 w-3" />
              {statement.date}
            </div>
            <CardTitle className="text-lg leading-tight line-clamp-2">
              {statement.title}
            </CardTitle>
            <CardDescription className="line-clamp-1">
              {statement.author}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <p className="text-sm text-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
              {statement.summary}
            </p>
            <div className="flex flex-col gap-2 mt-auto">
              <Button size="sm" className="bg-secondary text-white hover:bg-secondary/80 w-full">
                <FileText className="h-4 w-4 mr-2" />
                Read Statement
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {statements.map((statement, index) => (
        <div key={index} className="border border-border rounded-lg p-6 hover:bg-muted/50 transition-colors">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{statement.title}</h3>
              <p className="text-sm text-muted-foreground">{statement.author}</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {statement.date}
            </div>
          </div>
          <p className="text-sm text-foreground leading-relaxed mb-4 line-clamp-2">
            {statement.summary}
          </p>
          <div className="flex gap-3">
            <Button size="sm" className="bg-secondary text-white hover:bg-secondary/80">
              <FileText className="h-4 w-4 mr-2" />
              Read Full Statement
            </Button>
            <Button size="sm" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
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
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
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
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white bg-white/20 rounded-full transition-all duration-300 text-xl font-medium">Statements</Link>
                    <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Documents</Link>
                    
                    {/* News & Media Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">
                          News & Media
                          <ChevronDown className="ml-1 h-4 w-4" />
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
                      <Link to="/sb8j-1/statements" className="px-6 py-4 text-white bg-white/20 transition-all duration-300 border-b border-white/10 text-lg">Statements</Link>
                      <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Documents</Link>
                      
                      {/* Mobile News & Media submenu */}
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white/70 text-lg font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm">General News</Link>
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
              <h2 className="text-2xl font-bold text-foreground mb-2">Official Statements</h2>
              <p className="text-muted-foreground">Browse through our collection of statements and interventions</p>
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

export default SB8J1Statements;
