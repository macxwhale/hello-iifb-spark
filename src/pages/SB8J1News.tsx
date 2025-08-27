import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';
import indigenousBodyImage from '@/assets/news-indigenous-body.jpg';
import panamaMeetingsImage from '@/assets/news-panama-meetings.jpg';
import ipbesWorkshopImage from '@/assets/news-ipbes-workshop.jpg';

const SB8J1News = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j1-news-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-news');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j1-news-view', view);
  };

  const news = [
    {
      title: "Panama to Host Historic SB8J-1 Meeting",
      description: "Panama City will welcome Indigenous leaders from around the world for the first meeting of the Subsidiary Body on Article 8(j).",
      date: "March 20, 2025",
      day: "20",
      month: "Mar",
      author: "IIFB Secretariat",
      category: "Official",
      image: panamaMeetingsImage,
      featured: true
    },
    {
      title: "IIFB Prepares Comprehensive Position Papers",
      description: "The International Indigenous Forum on Biodiversity finalizes key position papers for the upcoming SB8J-1 meeting.",
      date: "March 18, 2025",
      day: "18",
      month: "Mar",
      author: "IIFB Communications",
      category: "Preparation",
      image: indigenousBodyImage
    },
    {
      title: "Traditional Knowledge Protection Framework Released",
      description: "New framework for protecting Indigenous traditional knowledge systems in biodiversity conservation efforts.",
      date: "March 15, 2025",
      day: "15",
      month: "Mar",
      author: "Technical Working Group",
      category: "Framework",
      image: ipbesWorkshopImage
    },
    {
      title: "Youth Representatives Selected for SB8J-1",
      description: "Indigenous youth leaders from seven regions selected to participate in the historic meeting.",
      date: "March 12, 2025",
      day: "12",
      month: "Mar",
      author: "Youth Network",
      category: "Participation",
      image: indigenousBodyImage
    }
  ];

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  const renderCardsView = () => (
    <div>
      {featuredNews && (
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">Featured News</h3>
          <Card className="overflow-hidden bg-card border-2 border-primary shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-8">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-primary text-white">Featured</Badge>
                <Badge variant="outline">{featuredNews.category}</Badge>
              </div>
              <CardTitle className="text-2xl lg:text-3xl mb-4">{featuredNews.title}</CardTitle>
              <CardDescription className="text-lg">{featuredNews.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {featuredNews.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredNews.date}
                </div>
              </div>
              <Button size="lg" className="bg-secondary text-white hover:bg-secondary/90">
                <ArrowRight className="h-4 w-4 mr-2" />
                Read More
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Latest News</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {regularNews.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {item.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Read More
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
      {news.map((item, index) => (
        <Card key={index} className="overflow-hidden bg-card border-2 border-transparent hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-lg">
              <span className="text-sm font-bold text-primary">{item.day}</span>
              <span className="text-xs font-medium text-muted-foreground uppercase">{item.month}</span>
            </div>
            
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                {item.category}
              </Badge>
            </div>
          </div>
          
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
              {item.title}
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
              {item.description}
            </p>
            
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <User className="h-4 w-4 mr-2" />
              <span className="line-clamp-1">{item.author}</span>
            </div>
            
            <Button variant="ghost" className="w-full group/btn hover:bg-primary/5">
              <span className="text-primary font-medium mr-2">Read More</span>
              <ArrowRight className="h-4 w-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {news.map((item, index) => (
        <Card key={index} className={`hover:shadow-lg transition-shadow ${item.featured ? 'border-2 border-primary' : ''}`}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {item.featured && <Badge className="bg-primary text-white">Featured</Badge>}
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-2">{item.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  {item.author}
                </div>
              </div>
              <Button className="bg-secondary text-white hover:bg-secondary/90 ml-4">
                <ArrowRight className="h-4 w-4 mr-2" />
                Read More
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
                SB8J-1 News
                <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                  Latest Updates & Announcements
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Stay informed with the latest news and updates about SB8J-1
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

              <SB8J1Navigation currentPage="news" />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">News</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Latest news, updates, and announcements about the first meeting of the Subsidiary Body on Article 8(j).
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

export default SB8J1News;
