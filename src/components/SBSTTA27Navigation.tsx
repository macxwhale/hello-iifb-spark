
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, FileText, Calendar, Users, Camera, Video, MessageSquare } from 'lucide-react';

interface SBSTTA27NavigationProps {
  currentPage?: string;
}

const SBSTTA27Navigation = ({ currentPage }: SBSTTA27NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'About', 
      href: '/sbstta-27/about', 
      icon: FileText,
      description: 'Learn about SBSTTA-27'
    },
    { 
      name: 'Documents', 
      href: '/sbstta-27/documents', 
      icon: FileText,
      description: 'Official documents and resources'
    },
    { 
      name: 'Side Events', 
      href: '/sbstta-27/side-events', 
      icon: Calendar,
      description: 'Side events and workshops'
    },
    { 
      name: 'Statements', 
      href: '/sbstta-27/statements', 
      icon: MessageSquare,
      description: 'Official statements and positions'
    },
    { 
      name: 'Gallery', 
      href: '/sbstta-27/gallery', 
      icon: Camera,
      description: 'Photo gallery from the meeting'
    },
    { 
      name: 'Videos', 
      href: '/sbstta-27/videos', 
      icon: Video,
      description: 'Video coverage and recordings'
    }
  ];

  const isCurrentPage = (href: string) => {
    return location.pathname === href || currentPage === href.split('/').pop();
  };

  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="w-full">
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isCurrent = isCurrentPage(item.href);
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group flex items-center gap-2 px-4 lg:px-6 py-3 rounded-lg transition-all duration-300 ${
                  isCurrent
                    ? 'bg-white/20 text-white border border-white/30 shadow-lg'
                    : 'bg-white/10 text-white/90 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium text-sm lg:text-base">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
            >
              <Menu className="h-6 w-6 mr-2" />
              Navigation
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-gradient-to-b from-primary to-primary-dark border-r border-white/20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">SBSTTA-27</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeSheet}
                className="text-white hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isCurrent = isCurrentPage(item.href);
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeSheet}
                    className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                      isCurrent
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-white/70">{item.description}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default SBSTTA27Navigation;
