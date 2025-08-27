import { useState } from 'react';
import { Calendar, User, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';
import indigenousBodyImage from '@/assets/news-indigenous-body.jpg';
import panamaMeetingsImage from '@/assets/news-panama-meetings.jpg';
import ipbesWorkshopImage from '@/assets/news-ipbes-workshop.jpg';

const SB8J1Articles = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j1-articles-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-articles');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j1-articles-view', view);
  };

  const articles = [
    {
      title: "The Path to SB8J-1: A Historic Milestone for Indigenous Rights",
      description: "An in-depth analysis of the journey leading to the establishment of the first subsidiary body dedicated to Article 8(j) implementation.",
      excerpt: "An in-depth analysis of the journey leading to the establishment of the first subsidiary body dedicated to Article 8(j) implementation.",
      date: "March 20, 2025",
      day: "20",
      month: "Mar",
      author: "Dr. Maria Santos, Indigenous Rights Scholar",
      category: "Analysis",
      image: indigenousBodyImage,
      readTime: "12 min read",
      featured: true
    },
    {
      title: "Traditional Knowledge Systems in Modern Conservation",
      description: "Exploring how ancestral wisdom is being integrated into contemporary biodiversity protection strategies.",
      excerpt: "Exploring how ancestral wisdom is being integrated into contemporary biodiversity protection strategies.",
      date: "March 18, 2025",
      day: "18",
      month: "Mar",
      author: "James Whitehorse, Environmental Anthropologist",
      category: "Research",
      image: ipbesWorkshopImage,
      readTime: "15 min read"
    },
    {
      title: "Panama's Role as Host: Bridging Cultures for Biodiversity",
      description: "How Panama's unique position as a biodiversity hotspot makes it the ideal location for this groundbreaking meeting.",
      excerpt: "How Panama's unique position as a biodiversity hotspot makes it the ideal location for this groundbreaking meeting.",
      date: "March 15, 2025",
      day: "15",
      month: "Mar",
      author: "Carlos Mendez, Panama Biodiversity Institute",
      category: "Feature",
      image: panamaMeetingsImage,
      readTime: "8 min read"
    },
    {
      title: "Youth Voices in Indigenous Governance: The Next Generation",
      description: "Young Indigenous leaders share their perspectives on participating in global biodiversity decision-making processes.",
      excerpt: "Young Indigenous leaders share their perspectives on participating in global biodiversity decision-making processes.",
      date: "March 12, 2025",
      day: "12",
      month: "Mar",
      author: "Aiyana Thompson, Indigenous Youth Network",
      category: "Interview",
      image: indigenousBodyImage,
      readTime: "10 min read"
    },
    {
      title: "Financial Frameworks for Indigenous Conservation",
      description: "Examining innovative funding mechanisms that support Indigenous-led conservation while respecting territorial rights.",
      excerpt: "Examining innovative funding mechanisms that support Indigenous-led conservation while respecting territorial rights.",
      date: "March 10, 2025",
      day: "10",
      month: "Mar",
      author: "Prof. Elena Rodriguez, Conservation Finance Expert",
      category: "Policy",
      image: panamaMeetingsImage,
      readTime: "14 min read"
    },
    {
      title: "Technology and Tradition: Digital Tools for Knowledge Preservation",
      description: "How modern technology is helping Indigenous communities document and protect their traditional ecological knowledge.",
      excerpt: "How modern technology is helping Indigenous communities document and protect their traditional ecological knowledge.",
      date: "March 8, 2025",
      day: "8",
      month: "Mar",
      author: "David Kim, Digital Heritage Specialist",
      category: "Technology",
      image: ipbesWorkshopImage,
      readTime: "11 min read"
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
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <Card key={index} className="overflow-hidden bg-card border-2 border-transparent hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
          <div className="relative h-56 overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Date Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-lg">
              <span className="text-lg font-bold text-primary">{article.day}</span>
              <span className="text-xs font-medium text-muted-foreground uppercase">{article.month}</span>
            </div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {article.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
              {article.description}
            </p>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <User className="h-4 w-4 mr-2" />
              <span className="line-clamp-1">{article.author}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{article.readTime}</span>
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
              <Button className="bg-secondary text-white hover:bg-secondary/90 ml-4">
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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-[50vh] sm:min-h-[45vh] md:min-h-[40vh] lg:min-h-[35vh] xl:min-h-[30vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="flex-1 flex items-center">
            <div className="text-white text-center w-full">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                SB8J-1 Articles
                <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                  Analysis & Perspectives
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                In-depth articles and analysis on Indigenous rights and biodiversity governance
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

              <SB8J1Navigation currentPage="articles" />
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
