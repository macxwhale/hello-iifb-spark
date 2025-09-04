
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download, ExternalLink, FileText, Video, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    id: 1,
    title: "CBD Strategic Plan 2021-2030",
    description: "The Kunming-Montreal Global Biodiversity Framework and its implementation guidelines for achieving nature-positive outcomes by 2030.",
    type: "Document",
    category: "Policy Framework",
    icon: FileText,
    downloadUrl: "#",
    viewUrl: "#"
  },
  {
    id: 2,
    title: "IPBES Global Assessment Report",
    description: "Comprehensive assessment of biodiversity and ecosystem services, providing scientific foundation for conservation decisions.",
    type: "Report", 
    category: "Scientific Assessment",
    icon: BookOpen,
    downloadUrl: "#",
    viewUrl: "#"
  },
  {
    id: 3,
    title: "Indigenous Knowledge Systems Guide",
    description: "Best practices for integrating traditional ecological knowledge into biodiversity conservation and sustainable development.",
    type: "Guide",
    category: "Traditional Knowledge",
    icon: FileText,
    downloadUrl: "#",
    viewUrl: "#"
  },
  {
    id: 4,
    title: "SBSTTA-27 Preparatory Materials",
    description: "Technical documents, scientific reviews, and meeting preparations for the 27th Subsidiary Body on Scientific, Technical and Technological Advice.",
    type: "Document Set",
    category: "Meeting Prep",
    icon: FileText,
    downloadUrl: "#",
    viewUrl: "#"
  },
  {
    id: 5,
    title: "SB8J-1 Establishment Video",
    description: "Documentary explaining the historic establishment of the first subsidiary body dedicated to Indigenous Peoples and local communities.",
    type: "Video",
    category: "Educational",
    icon: Video,
    downloadUrl: "#",
    viewUrl: "#"
  },
  {
    id: 6,
    title: "Panama Biodiversity Profile",
    description: "Comprehensive overview of Panama's rich biodiversity, conservation efforts, and Indigenous territories hosting critical ecosystems.",
    type: "Profile",
    category: "Country Report",
    icon: BookOpen,
    downloadUrl: "#",
    viewUrl: "#"
  }
];

const KeyResourcesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
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
      prev + itemsPerView >= resources.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, resources.length - itemsPerView) : prev - 1
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Key Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Essential documents and materials for CBD Panama 2025
            </p>
          </div>
          
          <div className="flex space-x-3 justify-center lg:justify-end">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-iifb-orange hover:text-white transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-iifb-orange hover:text-white transition-all duration-200"
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
              width: `${(resources.length / itemsPerView) * 100}%`
            }}
          >
            {resources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / resources.length}%` }}
                >
                  <Card className="h-full shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-iifb-orange/10 rounded-lg group-hover:bg-iifb-orange/20 transition-colors">
                            <IconComponent className="h-5 w-5 text-iifb-orange" />
                          </div>
                          <div>
                            <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                              {resource.category}
                            </span>
                            <p className="text-xs text-muted-foreground mt-1">{resource.type}</p>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-iifb-orange transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 flex-1 flex flex-col">
                      <CardDescription className="text-sm leading-relaxed mb-6 flex-1">
                        {resource.description}
                      </CardDescription>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          View
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: Math.ceil(resources.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerView)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-iifb-orange shadow-md'
                  : 'bg-muted hover:bg-iifb-orange/50 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* View All Resources Button */}
        <div className="text-center mt-8">
          <Link to="/resources">
            <Button className="group/btn px-6 py-3 rounded-lg font-medium transition-all duration-200 border text-white hover:shadow-lg hover:scale-105" style={{ backgroundColor: 'hsl(var(--iifb-orange))', borderColor: 'hsl(var(--iifb-orange))' }}>
              <FileText className="h-4 w-4 mr-2" />
              <span>View All Resources</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeyResourcesSection;
