import { useState } from 'react';
import { Download, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';
import SB8J1Navigation from '@/components/SB8J1Navigation';

const SB8J1Documents = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-documents-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-documents');

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j-documents-view', view);
  };

  const documents = [
    {
      title: "Preparatory Documents for SB8J-1",
      description: "Official preparatory documents and background materials for the first meeting of the Subsidiary Body on Article 8(j).",
      date: "October 2025",
      fileSize: "2.4 MB",
      downloadUrl: "#",
      type: "Official Document"
    },
    {
      title: "Traditional Knowledge Protocols Framework",
      description: "Comprehensive framework for protecting and respecting traditional knowledge systems in biodiversity conservation.",
      date: "September 2025",
      fileSize: "1.8 MB",
      downloadUrl: "#",
      type: "Framework"
    },
    {
      title: "Indigenous Participation Guidelines",
      description: "Guidelines for meaningful participation of Indigenous Peoples and local communities in CBD processes.",
      date: "August 2025",
      fileSize: "1.2 MB",
      downloadUrl: "#",
      type: "Guidelines"
    },
    {
      title: "Benefit Sharing Mechanisms Report",
      description: "Analysis of benefit-sharing mechanisms for traditional knowledge associated with genetic resources.",
      date: "July 2025",
      fileSize: "3.1 MB",
      downloadUrl: "#",
      type: "Report"
    },
    {
      title: "Digital Sequence Information Position Paper",
      description: "IIFB position paper on digital sequence information and its implications for Indigenous rights.",
      date: "June 2025",
      fileSize: "945 KB",
      downloadUrl: "#",
      type: "Position Paper"
    },
    {
      title: "Community Protocols Best Practices",
      description: "Collection of best practices for developing and implementing community protocols.",
      date: "May 2025",
      fileSize: "2.7 MB",
      downloadUrl: "#",
      type: "Best Practices"
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
      <section className="relative min-h-[80vh] h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[80vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SB8J-1 Documents
            </h1>

            <SB8J1Navigation currentPage="documents" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Documents</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Official documents, reports, and resources related to the first meeting of the Subsidiary Body on Article 8(j).
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

export default SB8J1Documents;
