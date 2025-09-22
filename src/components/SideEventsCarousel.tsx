import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, MapPin } from 'lucide-react';

const sideEvents = [
  {
    id: 6762,
    title: "Modus operandi of the Subsidiary Body on Article 8(j) and Other Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities",
    description: "Discussion on the operational framework and working methods for the new Subsidiary Body on Article 8(j), establishing clear procedures for effective governance and meaningful participation.",
    date: "27",
    month: "October",
    year: "2025",
    time: "13:15 - 14:45",
    location: "Indigenous Peoples and Local Communities Group meeting room - Ground floor (Capacity 176 People)",
    organizer: "IIFB | SCBD | IWBN | CBD | IIN | RMIB-LAC",
    interpretation: "Eng/Sp",
    image: '/iifb-uploads/ec6e375b-657d-445c-9c03-e67802b1955d.png',
    link: "https://www.cbd.int/side-events/6762"
  },
  {
    id: 6756,
    title: "Indigenous and Traditional Territories (ITTs) for conservation, restoration and spatial planning of biodiversity",
    description: "Exploring how Indigenous and Traditional Territories contribute to biodiversity conservation and restoration efforts, and their integration into spatial planning processes.",
    date: "28",
    month: "October",
    year: "2025",
    time: "13:15 - 14:45",
    location: "Indigenous Peoples and Local Communities Group meeting room - Ground floor (Capacity 176 People)",
    organizer: "IIFB | IWBN | IIN | RMIB-LAC | IUCN | BMZ | HAC N&P",
    interpretation: "Eng/Sp",
    image: '/iifb-uploads/4ce61eb0-9a7e-42be-874b-4ef64ec8d003.png',
    link: "https://www.cbd.int/side-events/6756"
  },
  {
    id: 6758,
    title: "Evaluating effectiveness of marine Other Effective Area-based Conservation Measures (mOECMs) in the ocean, from an Indigenous Peoples and local communities perspective",
    description: "Assessment of marine conservation measures from Indigenous Peoples and local communities perspectives, examining effectiveness and community involvement in ocean conservation.",
    date: "29",
    month: "October",
    year: "2025",
    time: "13:15 - 14:45",
    location: "Indigenous Peoples and Local Communities Group meeting room - Ground floor (Capacity 176 People)",
    organizer: "IIFB | IWBN | RMIB-LAC | IIN | Oregon State University",
    interpretation: "Eng/Sp",
    image: '/iifb-uploads/b5f1ddc9-2378-4be9-ac3f-0d14e3249153.png',
    link: "https://www.cbd.int/side-events/6758"
  },
  {
    id: 6763,
    title: "Enabling direct access for Indigenous Peoples and Local Communities to achieve the KMGBF",
    description: "Panel discussion on mechanisms for direct access funding and support systems to enable Indigenous Peoples and Local Communities to contribute to achieving the Kunming-Montreal Global Biodiversity Framework targets.",
    date: "29",
    month: "October",
    year: "2025",
    time: "18:15 - 19:45",
    location: "Africa Regional Group Room - 1st floor (Capacity: 84 people)",
    organizer: "IUCN | IIFB | GAC",
    interpretation: "Eng/Sp/Fr",
    image: '/iifb-uploads/52900254-5d2a-47fb-b939-34f5734c2fa1.png',
    link: "https://www.cbd.int/side-events/6763"
  }
];

const SideEventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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
      prev + itemsPerView >= sideEvents.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, sideEvents.length - itemsPerView) : prev - 1
    );
  };

  return (
    <section id="side-events" className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 lg:mb-10">
            Side Events
          </h2>
        </div>

        <div className="flex items-center justify-between mb-12 lg:mb-16">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <Link to="/sb8j-1/side-events">
            <Button variant="ghost" className="group text-primary hover:text-primary-hover">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(sideEvents.length / itemsPerView) * 100}%`
            }}
          >
            {sideEvents.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / sideEvents.length}%` }}
              >
                <Card className="h-full bg-card border-2 border-transparent hover:shadow-xl hover:scale-105 transition-all duration-300 group overflow-hidden cursor-pointer flex flex-col" style={{ '--hover-border-color': 'hsl(var(--iifb-orange))' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(var(--iifb-orange))'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
                  {/* Featured Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                     {/* Date Badge */}
                     <div className="absolute top-4 right-4 rounded-full w-16 h-16 flex flex-col items-center justify-center text-center shadow-lg" style={{ backgroundColor: 'hsl(var(--iifb-orange))', color: 'white' }}>
                      <span className="text-2xl font-bold leading-none">{event.date}</span>
                      <span className="text-xs font-medium leading-none">{event.month}</span>
                      <span className="text-xs leading-none opacity-90">{event.year}</span>
                    </div>

                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-6 space-y-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-foreground leading-tight transition-colors duration-200 line-clamp-3" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--iifb-orange))'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
                      {event.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                    
                    {/* Event Details */}
                    <div className="space-y-2 text-sm text-muted-foreground flex-grow">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{event.location}</span>
                      </div>
                      <div className="text-iifb-orange font-medium line-clamp-2">
                        Organized by: {event.organizer}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Interpretation: {event.interpretation}
                      </div>
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="pt-4 border-t border-border/50 mt-auto">
                      <a 
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full group/btn px-6 py-3 rounded-lg font-medium transition-all duration-200 border text-white hover:shadow-lg hover:scale-105" style={{ backgroundColor: 'hsl(var(--iifb-orange))', borderColor: 'hsl(var(--iifb-orange))' }}>
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: Math.ceil(sideEvents.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerView) === index
                  ? 'bg-primary shadow-md scale-110'
                  : 'bg-muted hover:scale-105'
              }`}
              style={Math.floor(currentIndex / itemsPerView) !== index ? { '--hover-bg': 'hsl(var(--iifb-orange) / 0.5)' } as React.CSSProperties : {}}
              onMouseEnter={(e) => {
                if (Math.floor(currentIndex / itemsPerView) !== index) {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--iifb-orange) / 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (Math.floor(currentIndex / itemsPerView) !== index) {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.className = e.currentTarget.className.replace('hover:bg-primary/50', '');
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideEventsCarousel;
