
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
// Using uploaded Indigenous community photos
const indigenousBodyImage = '/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png';
const panamaMeetingsImage = '/lovable-uploads/b7281f13-2171-4001-9f67-c994f5c9fb35.png';
const ipbesWorkshopImage = '/lovable-uploads/96490106-76fa-41f3-9b84-56f75115fa1e.png';

const newsItems = [
  {
    id: 1,
    title: "Views of Indigenous Peoples and Local Communities in Preparation to SB8J-1",
    description: "IIFB concludes series of working meetings presenting collective in-depth analysis and contributions from seven socio-cultural regions. Includes endorsed guidelines on territorial rights and spatial planning for biodiversity conservation.",
    date: "02",
    month: "June", 
    year: "2025",
    category: "Regional Views",
    image: panamaMeetingsImage,
    link: "https://iifb-indigenous.org/views-of-indigenous-peoples-and-local-communities-in-preparation-sb8j1/",
    readTime: "6 min read"
  },
  {
    id: 2,
    title: "CBD COP16 Establishes Historic Indigenous Subsidiary Body",
    description: "Parties to the Convention on Biological Diversity made the groundbreaking decision to create a permanent subsidiary body dedicated to Indigenous Peoples and local communities.",
    date: "06",
    month: "March",
    year: "2025",
    category: "Policy Update",
    image: ipbesWorkshopImage,
    link: "#",
    readTime: "5 min read"
  }
];

const NewsCarousel = () => {
  return (
    <section id="news" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}></div>
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: 'hsl(var(--iifb-orange))' }}>Stay Updated</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest News and Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest developments in biodiversity conservation and Indigenous rights
          </p>
        </div>

        {/* Featured Article (First Item) */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-card border-2 border-transparent shadow-xl hover:shadow-2xl transition-all duration-500 group" style={{ borderColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(var(--iifb-orange))'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:from-transparent lg:to-black/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}>
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{newsItems[0].month} {newsItems[0].date}, {newsItems[0].year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{newsItems[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    <span>{newsItems[0].category}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--iifb-orange))'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  {newsItems[0].title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {newsItems[0].description}
                </p>
                
                <Button 
                  className="w-fit group/btn text-lg px-8 py-3 text-white" 
                  style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}
                  onClick={() => window.open(newsItems[0].link, '_blank')}
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Secondary Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newsItems.slice(1, 3).map((item, index) => (
            <Card key={item.id} className="overflow-hidden bg-card border-2 border-transparent shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(var(--iifb-orange))'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-white px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'hsl(var(--iifb-orange) / 0.9)' }}>
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
                
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight transition-colors duration-200 line-clamp-2" onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--iifb-orange))'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                <Button 
                  className="w-full group/btn px-6 py-3 rounded-lg font-medium transition-all duration-200 border text-white hover:shadow-lg hover:scale-105" 
                  style={{ backgroundColor: 'hsl(var(--iifb-orange))', borderColor: 'hsl(var(--iifb-orange))' }}
                  onClick={() => window.open(item.link, '_blank')}
                >
                  <span>Read More</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/sb8j-1/news">
            <Button variant="outline" size="lg" className="border-2 px-8 py-3 text-white" style={{ borderColor: 'hsl(var(--iifb-orange))', color: 'hsl(var(--iifb-orange))', backgroundColor: 'transparent' }}>
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
