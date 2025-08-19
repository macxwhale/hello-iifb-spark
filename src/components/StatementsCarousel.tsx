import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, FileText, Download, Star } from 'lucide-react';

const statements = [
  {
    id: 1,
    title: "IIFB Position on SB8J-1 Modus Operandi",
    description: "Comprehensive framework for ensuring meaningful Indigenous participation in the new subsidiary body's operations and decision-making processes.",
    date: "March 2025",
    type: "Position Paper",
    status: "Latest",
    link: "#"
  },
  {
    id: 2,
    title: "Indigenous Territorial Guidelines Statement",
    description: "Detailed recommendations for recognizing and protecting Indigenous territorial rights within the KMGBF implementation framework.",
    date: "February 2025",
    type: "Policy Statement",
    status: "Featured",
    link: "#"
  },
  {
    id: 3,
    title: "Traditional Knowledge Integration Framework",
    description: "Guidelines for incorporating Indigenous traditional ecological knowledge into biodiversity conservation and spatial planning initiatives.",
    date: "January 2025",
    type: "Technical Paper",
    status: "New",
    link: "#"
  },
  {
    id: 4,
    title: "SBSTTA-27 Indigenous Participation Strategy",
    description: "Strategic approach to ensure Indigenous voices are heard and considered in scientific and technical advisory processes.",
    date: "December 2024",
    type: "Strategy Document",
    status: "Updated",
    link: "#"
  },
  {
    id: 5,
    title: "Youth and Women Engagement Protocol",
    description: "Special focus on empowering Indigenous youth and women in biodiversity governance and conservation leadership roles.",
    date: "November 2024",
    type: "Protocol",
    status: "Important",
    link: "#"
  }
];

const StatementsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= statements.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, statements.length - itemsPerView) : prev - 1
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Latest': return 'bg-green-100 text-green-800 border-green-200';
      case 'Featured': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'New': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Updated': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Important': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="statements" className="py-12 lg:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 relative">
          <div className="relative">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Star className="h-4 w-4 text-iifb-forest" />
              <span className="text-sm font-bold text-iifb-forest uppercase tracking-widest">Official Documents</span>
              <Star className="h-4 w-4 text-iifb-forest" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              IIFB Statements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-iifb-sage via-iifb-forest to-iifb-sage mx-auto"></div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-6">
          <div className="flex space-x-3 justify-center lg:justify-start">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-iifb-sage hover:text-white transition-all duration-200 border-2 border-iifb-sage/30 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-iifb-sage hover:text-white transition-all duration-200 border-2 border-iifb-sage/30 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(statements.length / itemsPerView) * 100}%`
            }}
          >
            {statements.map((statement) => (
              <div
                key={statement.id}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / statements.length}%` }}
              >
                <Card className="h-full shadow-medium hover:shadow-strong transition-all duration-300 border-l-4 border-l-iifb-forest bg-gradient-to-br from-card to-iifb-cream/10 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(statement.status)}`}>
                        {statement.status}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm bg-muted/50 rounded-full px-3 py-1">
                        <FileText className="h-3 w-3 mr-1" />
                        {statement.type}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight hover:text-iifb-forest transition-colors group-hover:text-iifb-forest">
                      {statement.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground font-medium">
                      {statement.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-foreground leading-relaxed mb-6">
                      {statement.description}
                    </p>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1 group/btn border-iifb-forest/30 hover:bg-iifb-forest hover:text-white">
                        <Download className="h-4 w-4 mr-2 group-hover/btn:translate-y-1 transition-transform" />
                        Download
                      </Button>
                      <Button variant="ghost" className="flex-1 hover:bg-iifb-sage/10 hover:text-iifb-forest">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: Math.ceil(statements.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-iifb-forest border-iifb-forest shadow-lg scale-125'
                  : 'bg-transparent border-iifb-sage hover:bg-iifb-sage/20 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatementsCarousel;
