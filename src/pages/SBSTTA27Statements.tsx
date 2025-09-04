
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Download, User } from 'lucide-react';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SBSTTA27Statements = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sbstta27-statements-view');
    return (saved as ViewType) || 'cards';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sbstta27-statements-view', view);
  };

  const statements = [
    {
      title: "Opening Statement for SBSTTA-27",
      description: "Official opening remarks emphasizing the critical role of scientific advice in biodiversity conservation.",
      author: "SBSTTA Chair",
      date: "October 20, 2025",
      category: "Opening",
      downloadUrl: "#",
      featured: true
    },
    {
      title: "Scientific Monitoring and Assessment Framework",
      description: "Statement on strengthening scientific monitoring systems for the Global Biodiversity Framework.",
      author: "Scientific Panel",
      date: "October 21, 2025",
      category: "Technical",
      downloadUrl: "#",
      featured: false
    },
    {
      title: "Indigenous Knowledge Integration in Biodiversity Science",
      description: "Statement on incorporating traditional ecological knowledge into scientific assessments and policy recommendations.",
      author: "Indigenous Caucus",
      date: "October 22, 2025",
      category: "Indigenous",
      downloadUrl: "#",
      featured: false
    }
  ];

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
              SBSTTA-27 Statements
            </h1>

            <SBSTTA27Navigation currentPage="statements" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Official Statements</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Key statements and position papers from SBSTTA-27 participants on critical biodiversity science issues.
              </p>
            </div>
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>
          
          <div className={`grid ${currentView === 'list' ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
            {statements.map((statement, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {statement.category}
                    </Badge>
                    {statement.featured && (
                      <Badge className="bg-iifb-orange text-white text-xs">Featured</Badge>
                    )}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {statement.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-iifb-orange transition-colors">
                    {statement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {statement.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      {statement.author}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full group/btn">
                    <Download className="h-4 w-4 mr-2" />
                    Download Statement
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Statements;
