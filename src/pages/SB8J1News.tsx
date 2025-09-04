
import { useState } from 'react';
import { ExternalLink, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SB8J1Navigation from '@/components/SB8J1Navigation';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SB8J1News = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-news-view');
    return (saved as ViewType) || 'grid';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j-news-view', view);
  };

  const newsItems = [
    {
      id: 1,
      title: "IIFB Guidelines on Indigenous and Traditional Territories (ITTs)",
      description: "Comprehensive framework for recognizing Indigenous Peoples' vital role in biodiversity conservation, sustainable use, and restoration within their territories. Promotes respect for traditional knowledge, governance systems, and culturally appropriate practices.",
      date: "July 15, 2025",
      category: "Guidelines",
      image: '/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png',
      link: "https://iifb-indigenous.org/iifb-guidelines-on-indigenous-and-traditional-territories-itts/",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Views of Indigenous Peoples and Local Communities in Preparation to SB8J-1",
      description: "IIFB concludes series of working meetings presenting collective in-depth analysis and contributions from seven socio-cultural regions. Includes endorsed guidelines on territorial rights and spatial planning for biodiversity conservation.",
      date: "June 2, 2025",
      category: "Regional Views",
      image: '/lovable-uploads/b7281f13-2171-4001-9f67-c994f5c9fb35.png',
      link: "https://iifb-indigenous.org/views-of-indigenous-peoples-and-local-communities-in-preparation-sb8j1/",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "CBD COP16 Establishes Historic Indigenous Subsidiary Body",
      description: "Parties to the Convention on Biological Diversity made the groundbreaking decision to create a permanent subsidiary body dedicated to Indigenous Peoples and local communities.",
      date: "March 6, 2025",
      category: "Policy Update",
      image: '/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png',
      link: "#",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Panama to Host Crucial Biodiversity Meetings",
      description: "Panama City will welcome global experts for SBSTTA-27 and the inaugural SB8J-1 meeting, marking a new era in biodiversity governance.",
      date: "February 15, 2025",
      category: "Event News",
      image: '/lovable-uploads/b7281f13-2171-4001-9f67-c994f5c9fb35.png',
      link: "#",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "IPBES Workshop Prepares for SBSTTA-27",
      description: "Latest IPBES assessments will inform scientific recommendations at the upcoming SBSTTA meeting, providing crucial data for biodiversity framework implementation.",
      date: "January 22, 2025",
      category: "Research",
      image: '/lovable-uploads/96490106-76fa-41f3-9b84-56f75115fa1e.png',
      link: "#",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "New Conservation Finance Mechanisms Unveiled",
      description: "Innovative financial tools are being developed to support Indigenous-led conservation efforts and promote sustainable biodiversity management.",
      date: "April 10, 2025",
      category: "Finance",
      image: '/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png',
      link: "#",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Indigenous Knowledge to Inform Global Biodiversity Strategy",
      description: "Traditional ecological knowledge is increasingly recognized as a vital component of effective biodiversity conservation strategies worldwide.",
      date: "May 1, 2025",
      category: "Traditional Knowledge",
      image: '/lovable-uploads/b7281f13-2171-4001-9f67-c994f5c9fb35.png',
      link: "#",
      readTime: "4 min read"
    }
  ];

  const renderCardsView = () => (
    <div className="grid gap-6">
      {newsItems.map((item) => (
        <Card key={item.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <Badge variant="outline">{item.readTime}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                <CardDescription className="text-base font-medium">SB8J-1 News</CardDescription>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {item.date}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-foreground leading-relaxed mb-4">{item.description}</p>
                <Button 
                  className="bg-secondary text-white hover:bg-secondary-hover"
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Article
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item) => (
        <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute top-4 left-4">
              <Badge variant="secondary">{item.category}</Badge>
            </div>
          </div>
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-xs">{item.readTime}</Badge>
            </div>
            <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{item.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {item.date}
              </div>
              <Button 
                size="sm" 
                className="bg-secondary text-white hover:bg-secondary-hover"
                onClick={() => window.open(item.link, '_blank')}
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                Read
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderListView = () => (
    <div className="space-y-4">
      {newsItems.map((item) => (
        <Card key={item.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-4 flex-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <Badge variant="outline">{item.readTime}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <Button 
                className="bg-secondary text-white hover:bg-secondary-hover ml-4"
                onClick={() => window.open(item.link, '_blank')}
              >
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
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/081c59be-4485-4784-bbad-20d932375bbd.png)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SB8J-1 News
            </h1>

            <SB8J1Navigation currentPage="news" />
          </div>
        </div>
      </section>

      {/* News Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Latest News & Updates</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay informed about the latest developments from the Subsidiary Body on Article 8(j) and related provisions.
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
