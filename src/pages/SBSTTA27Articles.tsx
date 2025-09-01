
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SBSTTA27Articles = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sbstta27-articles-view');
    return (saved as ViewType) || 'cards';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sbstta27-articles-view', view);
  };

  const articles = [
    {
      title: "SBSTTA-27: Science at the Heart of Biodiversity Policy",
      description: "How scientific evidence guides global biodiversity conservation strategies and policy decisions.",
      author: "Dr. Maria Santos",
      date: "October 21, 2025",
      category: "Science",
      link: "#",
      readTime: "7 min read",
      image: '/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png',
      featured: true
    },
    {
      title: "Monitoring Progress: The KMGBF Assessment Framework",
      description: "Understanding the mechanisms for tracking collective progress toward global biodiversity targets.",
      author: "Prof. James Liu",
      date: "October 20, 2025",
      category: "Assessment",
      link: "#",
      readTime: "5 min read",
      image: '/lovable-uploads/4ce61eb0-9a7e-42be-874b-4ef64ec8d003.png',
      featured: false
    },
    {
      title: "Invasive Species: A Growing Threat to Biodiversity",
      description: "Scientific insights on managing invasive alien species and their ecosystem impacts.",
      author: "Dr. Sarah Johnson",
      date: "October 19, 2025",
      category: "Conservation",
      link: "#",
      readTime: "6 min read",
      image: '/lovable-uploads/52900254-5d2a-47fb-b939-34f5734c2fa1.png',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SBSTTA-27 Articles
            </h1>

            <SBSTTA27Navigation currentPage="articles" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Featured Articles</h2>
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>
          
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
                        <Badge className="bg-primary text-white">Featured</Badge>
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

export default SBSTTA27Articles;
