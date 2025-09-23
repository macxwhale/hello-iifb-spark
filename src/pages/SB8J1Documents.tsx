import { useState } from 'react';
import { FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SB8J1Navigation from '@/components/SB8J1Navigation';
import SB8J1Hero from '@/components/SB8J1Hero';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SB8J1Documents = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-documents-view');
    return (saved as ViewType) || 'cards';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j-documents-view', view);
  };

  const documents = [
    {
      title: "IIFB Modus Operandi for SB8J",
      description: "Operational framework and procedures for the Subsidiary Body on Article 8(j), outlining working methods, decision-making processes, and coordination mechanisms for Indigenous Peoples and local communities participation.",
      date: "September 2025",
      fileSize: "PDF",
      downloadUrl: "https://iifb-indigenous.org/wp-content/uploads/2025/09/03-iifb-modus-operandi-sb8j-2.pdf",
      type: "Modus Operandi"
    },
    {
      title: "IIFB Spatial Planning Guide",
      description: "Comprehensive guide for spatial planning in biodiversity conservation, sustainable use and restoration within Indigenous Peoples and local communities' lands, territories and waters.",
      date: "May 2025",
      fileSize: "PDF",
      downloadUrl: "https://iifb-indigenous.org/wp-content/uploads/2025/09/02-iifb-spatial-planning-guide30may2025-1-2.pdf",
      type: "Planning Guide"
    },
    {
      title: "IIFB Guidelines on Indigenous and Traditional Territories (ITTs)",
      description: "Guidelines for recognizing and supporting Indigenous Peoples and local communities' vital role in biodiversity conservation, sustainable use, and ecosystem restoration within their territories.",
      date: "May 2025",
      fileSize: "PDF",
      downloadUrl: "https://iifb-indigenous.org/wp-content/uploads/2025/09/01-iifb-itts-guide-30may2025-1-2.pdf",
      type: "Guidelines"
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
              <Button 
                className="bg-secondary text-white hover:bg-secondary-hover"
                asChild
              >
                <a href={doc.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  View PDF
                </a>
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
                <Button 
                  size="sm" 
                  className="bg-secondary text-white hover:bg-secondary-hover"
                  asChild
                >
                  <a href={doc.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-3 w-3 mr-1" />
                    View PDF
                  </a>
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
              <Button 
                className="bg-secondary text-white hover:bg-secondary-hover ml-4"
                asChild
              >
                <a href={doc.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2" />
                  View PDF
                </a>
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
      {/* Hero Section */}
      <SB8J1Hero title="Documents" />

      {/* Navigation Section */}
      <section className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <SB8J1Navigation currentPage="documents" />
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* IIFB Documents Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">IIFB Documents</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Official documents, reports, and resources related to the first meeting of the Subsidiary Body on Article 8(j).
                </p>
              </div>
              <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
            </div>

            {renderContent()}
          </div>

          {/* CBD Documents Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">CBD Documents</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Official CBD documents and decisions related to Article 8(j) and traditional knowledge.
              </p>
            </div>

            <Card className="bg-white border border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Available</Badge>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span className="text-sm">Meeting Documents</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">CBD meetings SB8J-01</h3>
                <p className="text-sm text-muted-foreground mb-4">27–30 October 2025 - Panama City, Panama</p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Meeting documents - First Meeting of the Subsidiary Body on Article 8(j) and Provisions of the Convention on Biological Diversity Related to Indigenous Peoples and Local Communities
                </p>
                
                <Button 
                  className="w-full bg-secondary text-white hover:bg-secondary-hover" 
                  asChild
                >
                  <a href="https://www.cbd.int/meetings/SB8J-01" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    View Documents
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1Documents;
