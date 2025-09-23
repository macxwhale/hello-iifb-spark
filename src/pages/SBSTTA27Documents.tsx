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