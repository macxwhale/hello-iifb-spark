
import { useState } from 'react';
import { Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SBSTTA27Documents = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sbstta27-documents-view');
    return (saved as ViewType) || 'cards';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sbstta27-documents-view', view);
  };

  const documents = [
    {
      title: "SBSTTA-27 Provisional Agenda",
      description: "Official agenda for the 27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice.",
      date: "October 2025",
      fileSize: "1.2 MB",
      downloadUrl: "#",
      type: "Official Document"
    },
    {
      title: "Global Review of Collective Progress",
      description: "Scientific assessment of progress towards the Kunming-Montreal Global Biodiversity Framework targets.",
      date: "September 2025",
      fileSize: "3.4 MB",
      downloadUrl: "#",
      type: "Assessment"
    },
    {
      title: "Invasive Alien Species Report",
      description: "Scientific analysis of invasive alien species impacts and management strategies.",
      date: "September 2025",
      fileSize: "2.8 MB",
      downloadUrl: "#",
      type: "Scientific Report"
    },
    {
      title: "Biodiversity and Health Interlinkages",
      description: "Comprehensive review of the connections between biodiversity conservation and human health outcomes.",
      date: "August 2025",
      fileSize: "2.1 MB",
      downloadUrl: "#",
      type: "Review"
    },
    {
      title: "Climate Change and Biodiversity",
      description: "Scientific assessment of climate change impacts on biodiversity and ecosystem services.",
      date: "August 2025",
      fileSize: "4.2 MB",
      downloadUrl: "#",
      type: "Assessment"
    },
    {
      title: "Ecosystem-based Adaptation Guidelines",
      description: "Technical guidelines for implementing ecosystem-based approaches to climate adaptation.",
      date: "July 2025",
      fileSize: "1.9 MB",
      downloadUrl: "#",
      type: "Guidelines"
    }
  ];

  const renderContent = () => {
    switch (currentView) {
      case 'grid':
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit text-xs">{doc.type}</Badge>
                  <CardTitle className="text-sm line-clamp-2">{doc.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground line-clamp-3">{doc.description}</p>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {doc.date}
                      </div>
                      <Button size="sm" className="text-white hover:opacity-90" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}>
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      case 'list':
        return (
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary">{doc.type}</Badge>
                        <span className="text-sm text-muted-foreground">{doc.fileSize}</span>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {doc.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                      <p className="text-muted-foreground">{doc.description}</p>
                    </div>
                    <Button className="text-white hover:opacity-90 ml-4" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
      default:
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{doc.type}</Badge>
                    <span className="text-xs text-muted-foreground">{doc.fileSize}</span>
                  </div>
                  <CardTitle className="text-lg">{doc.title}</CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {doc.date}
                    </div>
                    <Button className="text-white hover:opacity-90" style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SBSTTA-27 Documents
            </h1>

            <SBSTTA27Navigation currentPage="documents" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border">
            <h2 className="text-4xl font-bold text-foreground mb-6">Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Official documents, scientific reports, and technical resources from SBSTTA-27 will be available here once the meeting begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-iifb-orange rounded-full animate-pulse"></div>
                <span>Meeting starts October 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
                <span>Documents will be published in real-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Documents;
