
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, Users } from 'lucide-react';
import { usePexelsImage } from '@/hooks/usePexelsImage';

const SBSTTA27Statements = () => {
  const { imageUrl, isLoading } = usePexelsImage('sbstta-27-statements');

  const statements = [
    {
      title: "Opening Statement by CBD Executive Secretary",
      organization: "CBD Secretariat",
      date: "October 20, 2025",
      description: "Official opening remarks highlighting the importance of SBSTTA-27 in implementing the KMGBF",
      type: "Opening Statement",
      status: "Upcoming"
    },
    {
      title: "Indigenous Peoples and Local Communities Statement",
      organization: "IIFB",
      date: "October 20, 2025",
      description: "Collective statement on traditional knowledge integration and rights recognition",
      type: "Position Statement",
      status: "Draft"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
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

        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SBSTTA-27 Statements
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Official statements and positions from SBSTTA-27
            </p>

            <SBSTTA27Navigation currentPage="statements" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {statements.length === 0 ? (
            <div className="text-center text-muted-foreground">
              Statements will be available during and after the meeting.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {statements.map((statement, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <FileText className="h-6 w-6 text-primary" />
                      <span className={`text-xs px-2 py-1 rounded ${
                        statement.status === 'Available' ? 'bg-green-100 text-green-800' :
                        statement.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {statement.status}
                      </span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {statement.title}
                    </CardTitle>
                    <CardDescription>
                      {statement.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {statement.organization}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {statement.date}
                      </div>
                      <div>Type: {statement.type}</div>
                    </div>
                    <Button 
                      size="sm" 
                      disabled={statement.status !== 'Available'}
                      className="w-full"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {statement.status === 'Available' ? 'Download' : 'Coming Soon'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Statements;
