import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, User, ExternalLink, BookOpen } from 'lucide-react';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';

// Using uploaded Indigenous community photos
const indigenousBodyImage = '/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png';
const panamaMeetingsImage = '/lovable-uploads/b7281f13-2171-4001-9f67-c994f5c9fb35.png';
const ipbesWorkshopImage = '/lovable-uploads/96490106-76fa-41f3-9b84-56f75115fa1e.png';

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
      title: "SB8J-1: A New Era for Indigenous Biodiversity Governance",
      description: "The inaugural meeting marks a turning point for Indigenous inclusion in global conservation efforts.",
      author: "Dr. Leilani Nakashima",
      date: "October 28, 2025",
      category: "Policy",
      link: "#",
      readTime: "8 min read",
      image: indigenousBodyImage,
      featured: true
    },
    {
      title: "Traditional Knowledge: The Key to Biodiversity Conservation",
      description: "How traditional ecological knowledge is informing conservation strategies worldwide.",
      author: "Kaimana Silva",
      date: "October 27, 2025",
      category: "Conservation",
      link: "#",
      readTime: "6 min read",
      image: ipbesWorkshopImage,
      featured: false
    },
    {
      title: "Youth Leading the Way: Indigenous Voices for the Future",
      description: "Young Indigenous leaders are stepping up to protect biodiversity and cultural heritage.",
      author: "Pulan'i Forrester",
      date: "October 26, 2025",
      category: "Community",
      link: "#",
      readTime: "5 min read",
      image: panamaMeetingsImage,
      featured: false
    }
  ];

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
              SB8J-1 Articles
            </h1>

            <SB8J1Navigation currentPage="articles" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
            <ViewToggle view={currentView} setView={handleViewChange} />
          </div>
          
          {/* Articles Grid */}
          <div className={`grid ${currentView === 'list' ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
            {articles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div 
                    className="aspect-video bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${article.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    {article.featured && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-secondary text-white">Featured</Badge>
                      </div>
                    )}
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1Articles;
