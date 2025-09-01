
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';
import { usePexelsImage } from '@/hooks/usePexelsImage';

const SBSTTA27Documents = () => {
  const { imageUrl, isLoading } = usePexelsImage('sbstta-27-documents');

  const documents = [
    {
      title: "Provisional Agenda",
      description: "Official provisional agenda for SBSTTA-27",
      date: "September 2025",
      type: "Agenda",
      url: "#",
      language: "English"
    },
    {
      title: "Monitoring the Implementation of the KMGBF",
      description: "Technical document on monitoring mechanisms and indicators",
      date: "September 2025",
      type: "Technical Document",
      url: "#",
      language: "English"
    },
    {
      title: "Scientific Assessment Reports",
      description: "Compilation of scientific assessments relevant to SBSTTA-27",
      date: "August 2025",
      type: "Assessment",
      url: "#",
      language: "English/Spanish"
    },
    {
      title: "Background Documents",
      description: "Supporting materials and background information",
      date: "August 2025",
      type: "Background",
      url: "#",
      language: "Multiple"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        {/* Background Image */}
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

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SBSTTA-27 Documents
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Official documents and resources for the 27th Scientific Advisory Meeting
            </p>

            <SBSTTA27Navigation currentPage="documents" />
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {doc.type}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {doc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {doc.description}
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {doc.date}
                    </div>
                    <div>Language: {doc.language}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Looking for more documents? Visit the official CBD website for complete documentation.
            </p>
            <Button variant="outline" className="inline-flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Visit CBD Official Documents
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Documents;
