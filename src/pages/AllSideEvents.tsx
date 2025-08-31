
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const sideEvents = [
  {
    id: 6762,
    title: "Modus operandi of the Subsidiary Body on Article 8(j) and Other Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities",
    description: "Discussion on the operational framework and working methods for the new Subsidiary Body on Article 8(j), establishing clear procedures for effective governance and meaningful participation.",
    day: "Monday",
    date: "27-Oct",
    time: "13:15-14:45",
    location: "Indigenous Peoples and Local Communities Group meeting room - Ground floor (Capacity 176 People)",
    organizer: "IIFB | SCBD | IWBN | CBD | IIN | RMIB-LAC",
    interpretation: "Eng/Sp",
    link: "https://www.cbd.int/side-events/6762"
  },
  {
    id: 6756,
    title: "Indigenous and Traditional Territories (ITTs) for conservation, restoration and spatial planning of biodiversity",
    description: "Exploring how Indigenous and Traditional Territories contribute to biodiversity conservation and restoration efforts, and their integration into spatial planning processes.",
    day: "Tuesday",
    date: "28-Oct",
    time: "13:15-14:45",
    location: "Indigenous Peoples and Local Communities Group meeting room - Ground floor (Capacity 176 People)",
    organizer: "IIFB | IWBN | IIN | RMIB-LAC | IUCN | BMZ | HAC N&P",
    interpretation: "Eng/Sp",
    link: "https://www.cbd.int/side-events/6756"
  },
  {
    id: 6758,
    title: "Evaluating effectiveness of marine Other Effective Area-based Conservation Measures (mOECMs) in the ocean, from an Indigenous Peoples and local communities perspective",
    description: "Assessment of marine conservation measures from Indigenous Peoples and local communities perspectives, examining effectiveness and community involvement in ocean conservation.",
    day: "Wednesday",
    date: "29-Oct",
    time: "13:15-14:45",
    location: "Indigenous Peoples and Local Communities Group meeting room - Ground floor (Capacity 176 People)",
    organizer: "IIFB | IWBN | RMIB-LAC | IIN | Oregon State University",
    interpretation: "Eng/Sp",
    link: "https://www.cbd.int/side-events/6758"
  },
  {
    id: 6763,
    title: "Enabling direct access for Indigenous Peoples and Local Communities to achieve the KMGBF",
    description: "Panel discussion on mechanisms for direct access funding and support systems to enable Indigenous Peoples and Local Communities to contribute to achieving the Kunming-Montreal Global Biodiversity Framework targets.",
    day: "Wednesday",
    date: "29-Oct",
    time: "18:15-19:45",
    location: "Africa Regional Group Room - 1st floor (Capacity: 84 people)",
    organizer: "IUCN | IIFB | GAC",
    interpretation: "Eng/Sp/Fr",
    link: "https://www.cbd.int/side-events/6763"
  }
];

const AllSideEvents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Link 
              to="/sb8j-1/side-events"
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Side Events
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All SB8J-1 Side Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete list of approved side events for the first meeting of the Subsidiary Body on Article 8(j) and Other Provisions
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {sideEvents.map((event) => (
            <Card key={event.id} className="bg-card border-2 border-transparent hover:border-secondary shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Event Info */}
                  <div className="md:col-span-3 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="bg-secondary text-white rounded-lg px-3 py-1 text-sm font-bold">
                            #{event.id}
                          </span>
                          <span className="bg-primary text-white rounded-full px-3 py-1 text-sm font-medium">
                            {event.day}, {event.date}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-foreground leading-tight">
                          {event.title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="font-medium">Time:</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Location:</span>
                            <div className="text-muted-foreground mt-1">
                              {event.location}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium text-primary">Organizers:</span>
                          <div className="text-muted-foreground mt-1">
                            {event.organizer}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium">Interpretation:</span>
                          <span className="ml-2 text-muted-foreground">{event.interpretation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="md:col-span-1 flex items-center justify-center md:justify-end">
                    <a 
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto"
                    >
                      <Button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white">
                        <span className="mr-2">View Details</span>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            For more information about these side events, visit the{" "}
            <a 
              href="https://www.cbd.int/side-events" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline"
            >
              CBD Side Events Portal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSideEvents;
