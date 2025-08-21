
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import indigenousBodyImage from '@/assets/news-indigenous-body.jpg';
import panamaMeetingsImage from '@/assets/news-panama-meetings.jpg';
import ipbesWorkshopImage from '@/assets/news-ipbes-workshop.jpg';

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
  }
];

const NewsCarousel = () => {
  return (
    <section id="news" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#741b00' }}></div>
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#741b00' }}>Stay Updated</span>
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
          <Card className="overflow-hidden bg-card border-2 border-transparent shadow-xl hover:shadow-2xl transition-all duration-500 group" style={{ borderColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#741b00'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-full overflow-hidden">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:from-transparent lg:to-black/20"></div>
                <div className="absolute top-6 left-6">
                  <span className="text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg" style={{ backgroundColor: '#741b00' }}>
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
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight transition-colors duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#741b00'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  {newsItems[0].title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {newsItems[0].description}
                </p>
                
                <Button className="w-fit group/btn text-lg px-8 py-3 text-white hover:opacity-90" style={{ backgroundColor: '#741b00' }}>
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Secondary Articles */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {newsItems.slice(1, 3).map((item, index) => (
            <Card key={item.id} className="overflow-hidden bg-card border-2 border-transparent shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer" onMouseEnter={(e) => e.currentTarget.style.borderColor = '#741b00'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-white px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: 'rgba(116, 27, 0, 0.9)' }}>
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
                
                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight transition-colors duration-200 line-clamp-2" onMouseEnter={(e) => e.currentTarget.style.color = '#741b00'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                <Button variant="ghost" className="w-full justify-between group/btn p-0" style={{ backgroundColor: 'rgba(116, 27, 0, 0.05)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(116, 27, 0, 0.05)'}>
                  <span className="font-medium" style={{ color: '#741b00' }}>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" style={{ color: '#741b00' }} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/news">
            <Button variant="outline" size="lg" className="border-2 transition-all duration-300 px-8 py-3 text-white hover:text-white" style={{ borderColor: '#741b00', color: '#741b00', backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#741b00'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#741b00'; }}>
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
