
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
    title: "IIFB Guidelines on Indigenous and Traditional Territories (ITTs)",
    description: "Comprehensive framework for recognizing Indigenous Peoples' vital role in biodiversity conservation, sustainable use, and restoration within their territories. Promotes respect for traditional knowledge, governance systems, and culturally appropriate practices.",
    date: "15",
    month: "July",
    year: "2025",
    category: "Guidelines",
    image: indigenousBodyImage,
    link: "https://iifb-indigenous.org/iifb-guidelines-on-indigenous-and-traditional-territories-itts/",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Views of Indigenous Peoples and Local Communities in Preparation to SB8J-1",
    description: "IIFB concludes series of working meetings presenting collective in-depth analysis and contributions from seven socio-cultural regions. Includes endorsed guidelines on territorial rights and spatial planning for biodiversity conservation.",
    date: "02",
    month: "June", 
    year: "2025",
    category: "Regional Views",
    image: panamaMeetingsImage,
    link: "https://iifb-indigenous.org/views-of-indigenous-peoples-and-local-communities-in-preparation-sb8j1/",
    readTime: "6 min read"
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

        {/* News Articles Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newsItems.map((item, index) => (
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
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight transition-colors duration-200 line-clamp-1 truncate" onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--iifb-orange))'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
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
