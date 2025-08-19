
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import indigenousBodyImage from '@/assets/news-indigenous-body.jpg';
import panamaMeetingsImage from '@/assets/news-panama-meetings.jpg';
import ipbesWorkshopImage from '@/assets/news-ipbes-workshop.jpg';

const newsItems = [
  {
    id: 1,
    title: "CBD COP16 Establishes Historic Indigenous Subsidiary Body",
    description: "Parties to the Convention on Biological Diversity made the groundbreaking decision to create a permanent subsidiary body dedicated to Indigenous Peoples and local communities, marking a new era in biodiversity governance.",
    date: "06",
    month: "March",
    year: "2025",
    category: "Policy Update",
    image: indigenousBodyImage,
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Panama to Host Crucial Biodiversity Meetings",
    description: "Panama City will welcome global experts for SBSTTA-27 and the inaugural SB8J-1 meeting, representing unprecedented collaboration between scientific and Indigenous knowledge systems.",
    date: "15",
    month: "February", 
    year: "2025",
    category: "Event News",
    image: panamaMeetingsImage,
    readTime: "3 min read",
    featured: false
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
    readTime: "4 min read",
    featured: false
  },
  {
    id: 4,
    title: "Indigenous Youth Leaders Prepare for SB8J-1",
    description: "Young Indigenous voices from around the world are organizing to ensure their perspectives are heard at the historic first meeting of the new subsidiary body.",
    date: "10",
    month: "January",
    year: "2025",
    category: "Community",
    image: indigenousBodyImage,
    readTime: "3 min read",
    featured: false
  },
  {
    id: 5,
    title: "Traditional Knowledge Integration Guidelines Released",
    description: "New guidelines for incorporating Indigenous traditional ecological knowledge into biodiversity conservation and spatial planning initiatives have been published.",
    date: "28",
    month: "December",
    year: "2024",
    category: "Guidelines",
    image: panamaMeetingsImage,
    readTime: "6 min read",
    featured: false
  }
];

const News = () => {
  const featuredArticle = newsItems.find(item => item.featured);
  const regularArticles = newsItems.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            News & Media
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments in biodiversity conservation and Indigenous rights
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden bg-card border-2 border-transparent hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:from-transparent lg:to-black/20"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredArticle.month} {featuredArticle.date}, {featuredArticle.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      <span>{featuredArticle.category}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {featuredArticle.description}
                  </p>
                  
                  <Button className="w-fit group/btn bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((item) => (
              <Card key={item.id} className="overflow-hidden bg-card border-2 border-transparent hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.month} {item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <Button variant="ghost" className="w-full justify-between group/btn hover:bg-primary/5 p-0">
                    <span className="text-primary font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4 text-primary group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
