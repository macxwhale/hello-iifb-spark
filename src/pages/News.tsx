import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, Tag, Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

// Using uploaded Indigenous community photos
const indigenousBodyImage = '/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png';
const panamaMeetingsImage = '/lovable-uploads/b7281f13-2171-4001-9f67-c994f5c9fb35.png';
const ipbesWorkshopImage = '/lovable-uploads/96490106-76fa-41f3-9b84-56f75115fa1e.png';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('news-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('news');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('news-view', view);
  };

  const newsItems = [
    {
      id: 1,
      title: "CBD COP16 Establishes Historic Indigenous Subsidiary Body",
      description: "Parties to the Convention on Biological Diversity made the groundbreaking decision to create a permanent subsidiary body dedicated to Indigenous Peoples and local communities.",
      date: "06",
      month: "March",
      year: "2025",
      category: "Policy Update",
      image: indigenousBodyImage,
      link: "#",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Panama to Host Crucial Biodiversity Meetings",
      description: "Panama City will welcome global experts for SBSTTA-27 and the inaugural SB8J-1 meeting, marking a new era in biodiversity governance.",
      date: "15",
      month: "February",
      year: "2025",
      category: "Event News",
      image: panamaMeetingsImage,
      link: "#",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "IPBES Workshop Prepares for SBSTTA-27",
      description: "Latest IPBES assessments will inform scientific recommendations at the upcoming SBSTTA meeting, providing crucial data for biodiversity framework implementation.",
      date: "22",
      month: "January",
      year: "2025",
      category: "Research",
      image: ipbesWorkshopImage,
      link: "#",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "New Conservation Finance Mechanisms Unveiled",
      description: "Innovative financial tools are being developed to support Indigenous-led conservation efforts and promote sustainable biodiversity management.",
      date: "10",
      month: "April",
      year: "2025",
      category: "Finance",
      image: indigenousBodyImage,
      link: "#",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Indigenous Knowledge to Inform Global Biodiversity Strategy",
      description: "Traditional ecological knowledge is increasingly recognized as a vital component of effective biodiversity conservation strategies worldwide.",
      date: "01",
      month: "May",
      year: "2025",
      category: "Traditional Knowledge",
      image: panamaMeetingsImage,
      link: "#",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Youth Leadership in Biodiversity Conservation",
      description: "Young Indigenous leaders are taking on prominent roles in shaping the future of biodiversity conservation and sustainable development.",
      date: "18",
      month: "June",
      year: "2025",
      category: "Youth Empowerment",
      image: ipbesWorkshopImage,
      link: "#",
      readTime: "5 min read"
    },
  ];

  const filteredNews = newsItems.filter(item => {
    const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = categoryFilter ? item.category === categoryFilter : true;
    return searchMatch && categoryMatch;
  });

  const sortedNews = [...filteredNews].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.year + '-' + b.month + '-' + b.date).getTime() - new Date(a.year + '-' + a.month + '-' + a.date).getTime();
    }
    return 0;
  });

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
              Latest News
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest developments in biodiversity conservation, Indigenous rights, and environmental policy.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">News & Updates</h2>
          <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-card border-input rounded-md shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Select onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48 bg-card border-input rounded-md shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="Policy Update">Policy Update</SelectItem>
                <SelectItem value="Event News">Event News</SelectItem>
                <SelectItem value="Research">Research</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Traditional Knowledge">Traditional Knowledge</SelectItem>
                <SelectItem value="Youth Empowerment">Youth Empowerment</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-40 bg-card border-input rounded-md shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Relevance</SelectItem>
                <SelectItem value="date">Date</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* News Grid */}
        <div className={`grid ${currentView === 'list' ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
          {sortedNews.map(item => (
            <Card key={item.id} className="bg-card border-2 border-transparent shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-white">{item.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{item.month} {item.date}, {item.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                  {item.description}
                </CardDescription>
                <Link to={item.link}>
                  <Button variant="ghost" className="w-full justify-start mt-4 group/btn">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedNews.length === 0 && (
          <div className="text-center mt-8">
            <p className="text-muted-foreground">No articles found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
