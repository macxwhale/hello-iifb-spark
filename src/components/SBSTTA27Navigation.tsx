
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SBSTTA27NavigationProps {
  currentPage?: string;
}

const SBSTTA27Navigation = ({ currentPage }: SBSTTA27NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="pt-8">
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <div className="flex items-center justify-center space-x-1 bg-iifb-forest/90 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
          <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-all duration-300 text-xl font-medium">Home</Link>
          <Link 
            to="/sbstta-27/about" 
            className={`px-4 py-2 rounded-full transition-all duration-300 text-xl font-medium ${
              currentPage === 'about' 
                ? 'text-white bg-white/30' 
                : 'text-white/90 hover:text-white hover:bg-white/20'
            }`}
          >
            About
          </Link>
          <Link 
            to="/sbstta-27/statements" 
            className={`px-4 py-2 rounded-full transition-all duration-300 text-xl font-medium ${
              currentPage === 'statements' 
                ? 'text-white bg-white/30' 
                : 'text-white/90 hover:text-white hover:bg-white/20'
            }`}
          >
            Statements
          </Link>
          <Link 
            to="/sbstta-27/documents" 
            className={`px-4 py-2 rounded-full transition-all duration-300 text-xl font-medium ${
              currentPage === 'documents' 
                ? 'text-white bg-white/30' 
                : 'text-white/90 hover:text-white hover:bg-white/20'
            }`}
          >
            Documents
          </Link>
          <Link 
            to="/sbstta-27/side-events" 
            className={`px-4 py-2 rounded-full transition-all duration-300 text-xl font-medium ${
              currentPage === 'side-events' 
                ? 'text-white bg-white/30' 
                : 'text-white/90 hover:text-white hover:bg-white/20'
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
          className="text-white hover:bg-white/20 bg-iifb-forest/90 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 bg-iifb-forest/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
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
              Statements
            </Link>
            <Link 
              to="/sbstta-27/documents" 
              className={`px-6 py-4 transition-all duration-300 border-b border-white/10 text-lg ${
                currentPage === 'documents' 
                  ? 'text-white bg-white/30' 
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
            >
              Documents
            </Link>
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
