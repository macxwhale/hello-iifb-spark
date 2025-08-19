
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, FileText, Video, BookOpen, ArrowLeft } from 'lucide-react';
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

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Resources
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive collection of documents and materials for CBD Panama 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => {
            const IconComponent = resource.icon;
            return (
              <Card key={resource.id} className="h-full shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium">
                          {resource.category}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">{resource.type}</p>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resources;
