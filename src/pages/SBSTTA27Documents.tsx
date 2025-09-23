import SBSTTA27Hero from '@/components/SBSTTA27Hero';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SBSTTA27Documents = () => {
  return (
    <div className="min-h-screen bg-background">
      <SBSTTA27Hero title="SBSTTA-27 Documents" currentPage="documents" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* IIFB Documents Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">IIFB Documents</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IIFB documents and resources related to SBSTTA-27 and traditional knowledge.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">Guidelines</Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">PDF</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">IIFB Traditional Knowledge Guidelines</h3>
                  <p className="text-sm text-muted-foreground mb-4">September 2025</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Guidelines for incorporating traditional knowledge in scientific assessments and biodiversity conservation efforts.
                  </p>
                  
                  <Button 
                    className="w-full bg-secondary text-white hover:bg-secondary-hover" 
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      View Document
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">Position Paper</Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">PDF</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">IIFB Position on Scientific Assessments</h3>
                  <p className="text-sm text-muted-foreground mb-4">August 2025</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Indigenous Peoples' position on the integration of traditional knowledge in scientific and technical advice.
                  </p>
                  
                  <Button 
                    className="w-full bg-secondary text-white hover:bg-secondary-hover" 
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      View Document
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">Report</Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">PDF</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">Traditional Knowledge in Biodiversity Conservation</h3>
                  <p className="text-sm text-muted-foreground mb-4">July 2025</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive report on the role of traditional knowledge in global biodiversity conservation efforts.
                  </p>
                  
                  <Button 
                    className="w-full bg-secondary text-white hover:bg-secondary-hover" 
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      View Document
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CBD Documents Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">CBD Documents</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Official CBD documents and meeting information for SBSTTA-27.
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
                
                <h3 className="text-xl font-semibold text-foreground mb-2">CBD meetings SBSTTA-27</h3>
                <p className="text-sm text-muted-foreground mb-4">20–24 October 2025 - Panama City, Panama</p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Meeting documents - Twenty-seventh meeting of the Subsidiary Body on Scientific, Technical and Technological Advice focusing on biodiversity science and policy recommendations for the Kunming-Montreal Global Biodiversity Framework
                </p>
                
                <Button 
                  className="w-full bg-secondary text-white hover:bg-secondary-hover" 
                  asChild
                >
                  <a href="https://www.cbd.int/meetings/SBSTTA-27" target="_blank" rel="noopener noreferrer">
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

export default SBSTTA27Documents;