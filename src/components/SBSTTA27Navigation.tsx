
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SBSTTA27NavigationProps {
  currentPage: 'home' | 'about' | 'statements' | 'documents' | 'side-events' | 'articles' | 'videos' | 'gallery';
}

const SBSTTA27Navigation = ({ currentPage }: SBSTTA27NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="pt-8">
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <div className="flex items-center justify-center gap-2">
          <Link to="/" className="px-6 py-3 text-iifb-forest hover:text-white hover:bg-iifb-forest rounded-full transition-all duration-300 text-lg font-medium border border-transparent hover:border-iifb-forest/30">Home</Link>
          <Link 
            to="/sbstta-27/about" 
            className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
              currentPage === 'about' 
                ? 'text-white bg-iifb-forest border-iifb-forest/30' 
                : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
            }`}
          >
            About
          </Link>
          <Link 
            to="/sbstta-27/statements" 
            className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
              currentPage === 'statements' 
                ? 'text-white bg-iifb-forest border-iifb-forest/30' 
                : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
            }`}
          >
             IIFB Statements
          </Link>
          <Link 
            to="/sbstta-27/documents" 
            className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
              currentPage === 'documents' 
                ? 'text-white bg-iifb-forest border-iifb-forest/30' 
                : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
            }`}
          >
             IIFB Documents
          </Link>
          
          {/* News & Media Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
                ['articles', 'videos', 'gallery'].includes(currentPage || '')
                  ? 'text-white bg-iifb-forest border-iifb-forest/30'
                  : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
              }`}>
                 IIFB Media
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-[180px] z-50">
              <DropdownMenuItem asChild>
                <Link 
                  to="/sbstta-27/articles" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'articles' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  Articles
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/sbstta-27/videos" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'videos' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  Videos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/sbstta-27/gallery" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'gallery' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  Gallery
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            to="/sbstta-27/side-events" 
            className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
              currentPage === 'side-events' 
                ? 'text-white bg-iifb-forest border-iifb-forest/30' 
                : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
            }`}
          >
            Side Events
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-iifb-forest/80 bg-iifb-forest backdrop-blur-md rounded-full border border-iifb-forest/30 shadow-lg"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-iifb-forest/10 backdrop-blur-md rounded-2xl border border-iifb-forest/20 shadow-xl overflow-hidden">
          <div className="flex flex-col">
            <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 border-b border-white/10 text-lg">Home</Link>
            <Link 
              to="/sbstta-27/about" 
              className={`px-6 py-4 transition-all duration-300 border-b border-white/10 text-lg ${
                currentPage === 'about' 
                  ? 'text-white bg-white/30' 
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
            >
              About
            </Link>
            <Link 
              to="/sbstta-27/statements" 
              className={`px-6 py-4 transition-all duration-300 border-b border-white/10 text-lg ${
                currentPage === 'statements' 
                  ? 'text-white bg-white/30' 
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
            >
               IIFB Statements
            </Link>
            <Link 
              to="/sbstta-27/documents" 
              className={`px-6 py-4 transition-all duration-300 border-b border-white/10 text-lg ${
                currentPage === 'documents' 
                  ? 'text-white bg-white/30' 
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
            >
               IIFB Documents
            </Link>
            
            {/* Mobile Media submenu */}
            <div className="border-b border-white/10">
              <div className="px-6 py-3 text-white/70 text-lg font-medium">IIFB Media</div>
              <Link 
                to="/sbstta-27/articles" 
                className={`px-8 py-3 transition-all duration-300 text-base block ${
                  currentPage === 'articles' 
                    ? 'text-white bg-white/30' 
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                Articles
              </Link>
              <Link 
                to="/sbstta-27/videos" 
                className={`px-8 py-3 transition-all duration-300 text-base block ${
                  currentPage === 'videos' 
                    ? 'text-white bg-white/30' 
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                Videos
              </Link>
              <Link 
                to="/sbstta-27/gallery" 
                className={`px-8 py-3 transition-all duration-300 text-base block ${
                  currentPage === 'gallery' 
                    ? 'text-white bg-white/30' 
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
              >
                Gallery
              </Link>
            </div>
            
            <Link 
              to="/sbstta-27/side-events" 
              className={`px-6 py-4 transition-all duration-300 text-lg ${
                currentPage === 'side-events' 
                  ? 'text-white bg-white/30' 
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
            >
              Side Events
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default SBSTTA27Navigation;
