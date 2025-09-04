
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SBSTTA27Articles = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sbstta27-articles-view');
    return (saved as ViewType) || 'cards';
  });

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sbstta27-articles-view', view);
  };

  const articles = [
    {
      title: "SBSTTA-27: Science at the Heart of Biodiversity Policy",
      description: "How scientific evidence guides global biodiversity conservation strategies and policy decisions.",
      author: "Dr. Maria Santos",
      date: "October 21, 2025",
      category: "Science",
      link: "#",
      readTime: "7 min read",
      image: '/lovable-uploads/4ea8ab4f-ef39-4cdb-88c2-63ba632be4d3.png',
      featured: true
    },
    {
      title: "Monitoring Progress: The KMGBF Assessment Framework",
      description: "Understanding the mechanisms for tracking collective progress toward global biodiversity targets.",
      author: "Prof. James Liu",
      date: "October 20, 2025",
      category: "Assessment",
      link: "#",
      readTime: "5 min read",
      image: '/lovable-uploads/4ce61eb0-9a7e-42be-874b-4ef64ec8d003.png',
      featured: false
    },
    {
      title: "Invasive Species: A Growing Threat to Biodiversity",
      description: "Scientific insights on managing invasive alien species and their ecosystem impacts.",
      author: "Dr. Sarah Johnson",
      date: "October 19, 2025",
      category: "Conservation",
      link: "#",
      readTime: "6 min read",
      image: '/lovable-uploads/52900254-5d2a-47fb-b939-34f5734c2fa1.png',
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
              SBSTTA-27 Articles
            </h1>

            <SBSTTA27Navigation currentPage="articles" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg border">
            <h2 className="text-4xl font-bold text-foreground mb-6">Coming Soon</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Articles and analysis from SBSTTA-27 will be published here during and after the meeting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-iifb-orange rounded-full animate-pulse"></div>
                <span>Meeting starts October 20, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-150"></div>
                <span>Expert analysis coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Articles;
