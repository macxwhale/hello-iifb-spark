import SBSTTA27Hero from '@/components/SBSTTA27Hero';
import { FileText } from 'lucide-react';

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

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-border/50 hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <span className="inline-block bg-iifb-forest text-white px-4 py-2 rounded-full text-sm font-medium">
                    CBD meetings SBSTTA-27
                  </span>
                  <p className="text-muted-foreground mt-2">Meeting documents - Twenty-seventh meeting of the Subsidiary Body on Scientific, Technical and Technological Advice focusing on biodiversity science and policy recommendations for the Kunming-Montreal Global Biodiversity Framework</p>
                  <p className="text-sm text-muted-foreground mt-1">20–24 October 2025 - Panama City, Panama</p>
                </div>
                <div className="flex items-center gap-6 ml-8">
                  <a 
                    href="https://www.cbd.int/meetings/SBSTTA-27" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    <span className="text-sm font-medium">English</span>
                  </a>
                  <a 
                    href="https://www.cbd.int/meetings/SBSTTA-27" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    <span className="text-sm font-medium">Spanish</span>
                  </a>
                  <a 
                    href="https://www.cbd.int/meetings/SBSTTA-27" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    <span className="text-sm font-medium">French</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Documents;