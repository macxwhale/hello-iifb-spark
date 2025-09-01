import { useState } from 'react';
import { Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SBSTTA27Documents = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sbstta-27-documents-view');
    return (saved as ViewType) || 'cards';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sbstta-27-documents-view', view);
  };

  const documents = [
    {
      title: "Scientific Assessment Framework",
      description: "Comprehensive framework for scientific assessments under the Kunming-Montreal Global Biodiversity Framework.",
      date: "October 2025",
      fileSize: "3.2 MB",
      downloadUrl: "#",
      type: "Assessment"
    },
    {
      title: "Technical Guidelines for Monitoring",
      description: "Technical guidance for monitoring progress towards global biodiversity targets.",
      date: "September 2025",
      fileSize: "2.1 MB",
      downloadUrl: "#",
      type: "Guidelines"
    },
    {
      title: "Scientific Review of Targets",
      description: "Scientific review and analysis of the implementation of biodiversity targets.",
      date: "August 2025",
      fileSize: "1.8 MB",
      downloadUrl: "#",
      type: "Review"
    }
  ];

  const renderCardsView = () => (
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
              <Button className="bg-secondary text-white hover:bg-secondary-hover">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderGridView = () => (
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
                <Button size="sm" className="bg-secondary text-white hover:bg-secondary-hover">
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

  const renderListView = () => (
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
              <Button className="bg-secondary text-white hover:bg-secondary-hover ml-4">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'grid':
        return renderGridView();
      case 'list':
        return renderListView();
      default:
        return renderCardsView();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/081c59be-4485-4784-bbad-20d932375bbd.png)`
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
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Scientific Documents</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technical reports, assessments, and scientific guidance documents from SBSTTA-27.
              </p>
            </div>
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Documents;
