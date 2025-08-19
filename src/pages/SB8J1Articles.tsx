import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink, Calendar, User, ChevronDown } from 'lucide-react';
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

const SB8J1Articles = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-articles-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-articles');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j-articles-view', view);
  };

  const articles = [
    {
      title: "The Path to SB8J-1: A Historic Milestone for Indigenous Rights",
      author: "Maria Santos, IIFB Coordinator",
      date: "October 20, 2025",
      readTime: "8 min read",
      category: "Analysis",
      excerpt: "Exploring the significance of establishing the first Subsidiary Body on Article 8(j) and what it means for Indigenous Peoples' participation in global biodiversity governance.",
      featured: true,
      url: "#"
    },
    {
      title: "Traditional Knowledge Systems in Modern Conservation",
      author: "Dr. James Running Bear",
      date: "October 18, 2025",
      readTime: "12 min read",
      category: "Research",
      excerpt: "How Indigenous traditional knowledge systems can inform and enhance contemporary biodiversity conservation strategies and spatial planning initiatives.",
      url: "#"
    },
    {
      title: "Women as Guardians: Indigenous Women's Role in Biodiversity",
      author: "Ana Tuxá, Indigenous Women's Network",
      date: "October 15, 2025",
      readTime: "10 min read",
      category: "Perspective",
      excerpt: "Highlighting the crucial role of Indigenous women as knowledge keepers and environmental stewards in biodiversity conservation efforts worldwide.",
      url: "#"
    },
    {
      title: "Youth Voices: The Next Generation of Indigenous Leaders",
      author: "Global Indigenous Youth Caucus",
      date: "October 12, 2025",
      readTime: "6 min read",
      category: "Interview",
      excerpt: "Conversations with young Indigenous leaders about their vision for the future of biodiversity governance and their expectations for SB8J-1.",
      url: "#"
    },
    {
      title: "Territorial Rights and Biodiversity Conservation: Finding Balance",
      author: "Prof. Elena Vargas",
      date: "October 10, 2025",
      readTime: "15 min read",
      category: "Academic",
      excerpt: "An academic examination of how Indigenous territorial rights intersect with biodiversity conservation goals and international environmental law.",
      url: "#"
    },
    {
      title: "Panama Prepares: Hosting the Historic SB8J-1 Meeting",
      author: "Panama Ministry of Environment",
      date: "October 8, 2025",
      readTime: "5 min read",
      category: "News",
      excerpt: "Panama's preparations for hosting the first meeting of the Subsidiary Body on Article 8(j) and the country's commitment to Indigenous rights.",
      url: "#"
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  const renderCardsView = () => (
    <div>
      {/* Featured Article */}
      {featuredArticle && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">Featured Article</h3>
          <Card className="overflow-hidden bg-card border-2 border-primary shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-8">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-primary text-white">Featured</Badge>
                <Badge variant="outline">{featuredArticle.category}</Badge>
              </div>
              <CardTitle className="text-2xl lg:text-3xl mb-4">{featuredArticle.title}</CardTitle>
              <CardDescription className="text-lg">{featuredArticle.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {featuredArticle.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredArticle.date}
                </div>
                <span>{featuredArticle.readTime}</span>
              </div>
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary-hover">
                <ExternalLink className="h-4 w-4 mr-2" />
                Read Full Article
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Articles Grid */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">All Articles</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {regularArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <Card key={index} className={`hover:shadow-lg transition-shadow ${article.featured ? 'border-2 border-primary' : ''}`}>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {article.featured && <Badge className="bg-primary text-white text-xs">Featured</Badge>}
                <Badge variant="secondary" className="text-xs">{article.category}</Badge>
              </div>
              <span className="text-xs text-muted-foreground">{article.readTime}</span>
            </div>
            <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
            <CardDescription className="text-sm line-clamp-3">{article.excerpt}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span className="line-clamp-1">{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {article.date}
              </div>
            </div>
            <Button size="sm" variant="outline" className="w-full">
              <ExternalLink className="h-3 w-3 mr-1" />
              Read
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <Card key={index} className={`hover:shadow-lg transition-shadow ${article.featured ? 'border-2 border-primary' : ''}`}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {article.featured && <Badge className="bg-primary text-white">Featured</Badge>}
                  <Badge variant="secondary">{article.category}</Badge>
                  <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-muted-foreground mb-2">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {article.author}
                </div>
              </div>
              <Button className="bg-secondary text-white hover:bg-secondary-hover ml-4">
                <ExternalLink className="h-4 w-4 mr-2" />
                Read Article
              </Button>
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
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Statements</Link>
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
                          <Link to="/sb8j-1/articles" className="w-full px-3 py-2 text-gray-700 bg-gray-100">
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
                      
                      {/* Mobile News & Media submenu */}
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white/70 text-lg font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-base">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Videos</Link>
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Articles</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In-depth articles, analysis, and perspectives on Indigenous rights, traditional knowledge, and biodiversity governance related to SB8J-1.
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

export default SB8J1Articles;
