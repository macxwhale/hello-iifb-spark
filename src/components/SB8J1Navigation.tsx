
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

interface SB8J1NavigationProps {
  currentPage?: string;
}

const SB8J1Navigation = ({ currentPage }: SB8J1NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="pt-8">
      {/* Desktop Navigation */}
      <nav className="hidden xl:block">
        <div className="flex items-center justify-center gap-2">
          <Link to="/" className="px-6 py-3 text-iifb-forest hover:text-white hover:bg-iifb-forest rounded-full transition-all duration-300 text-lg font-medium border border-transparent hover:border-iifb-forest/30">Home</Link>
          <Link 
            to="/sb8j-1/about" 
            className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
              currentPage === 'about' 
                ? 'text-white bg-iifb-forest border-iifb-forest/30' 
                : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
            }`}
          >
            About
          </Link>
          <Link 
            to="/sb8j-1/statements" 
            className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
              currentPage === 'statements' 
                ? 'text-white bg-iifb-forest border-iifb-forest/30' 
                : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
            }`}
          >
            IIFB Statements
          </Link>
          <Link 
            to="/sb8j-1/documents" 
            className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
              currentPage === 'documents' 
                ? 'text-white bg-iifb-forest border-iifb-forest/30' 
                : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
            }`}
          >
             Documents
          </Link>
          
          {/* News & Media Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
                ['news', 'media-coverage', 'social-toolkit', 'press-conferences', 'articles', 'videos', 'gallery'].includes(currentPage || '')
                  ? 'text-white bg-iifb-forest border-iifb-forest/30'
                  : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
              }`}>
                IIFB News & Media
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-[220px] z-50">
              <DropdownMenuItem asChild>
                <Link 
                  to="/sb8j-1/news" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'news' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  General News
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/sb8j-1/media-coverage" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'media-coverage' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  Media Coverage Links
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/sb8j-1/social-toolkit" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'social-toolkit' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  IIFB Social Media Toolkit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/sb8j-1/press-conferences" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'press-conferences' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  Press Conferences
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/sb8j-1/articles" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'articles' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  Articles
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/sb8j-1/videos" 
                  className={`w-full px-3 py-2 text-gray-700 ${
                    currentPage === 'videos' ? 'bg-gray-100' : 'hover:bg-gray-100'
                  }`}
                >
                  Videos
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link 
                  to="/sb8j-1/gallery" 
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
            to="/sb8j-1/side-events" 
            className={`px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium border ${
              currentPage === 'side-events' 
                ? 'text-white bg-iifb-forest border-iifb-forest/30' 
                : 'text-iifb-forest hover:text-white hover:bg-iifb-forest border-transparent hover:border-iifb-forest/30'
            }`}
          >
            IIFB Side Events
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="xl:hidden flex justify-center">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:opacity-90 backdrop-blur-md rounded-full border border-[hsl(var(--iifb-orange))]/30 shadow-lg"
          style={{ backgroundColor: 'hsl(var(--iifb-orange))' }}
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeMenu}
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
          
          {/* Mobile Menu */}
          <nav className="xl:hidden mt-4 bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden relative z-50 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col">
              <Link 
                to="/" 
                className="px-6 py-5 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 border-b border-gray-100 text-lg font-medium min-h-[56px] flex items-center"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/sb8j-1/about" 
                className={`px-6 py-5 transition-all duration-300 border-b border-gray-100 text-lg font-medium min-h-[56px] flex items-center ${
                  currentPage === 'about' 
                    ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                to="/sb8j-1/statements" 
                className={`px-6 py-5 transition-all duration-300 border-b border-gray-100 text-lg font-medium min-h-[56px] flex items-center ${
                  currentPage === 'statements' 
                    ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                IIFB Statements
              </Link>
              <Link 
                to="/sb8j-1/documents" 
                className={`px-6 py-5 transition-all duration-300 border-b border-gray-100 text-lg font-medium min-h-[56px] flex items-center ${
                  currentPage === 'documents' 
                    ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                Documents
              </Link>
              
              {/* Mobile News & Media submenu */}
              <div className="border-b border-gray-100">
                <div className="px-6 py-4 text-gray-500 text-lg font-semibold">IIFB News & Media</div>
                <Link 
                  to="/sb8j-1/news" 
                  className={`px-8 py-4 transition-all duration-300 text-base block min-h-[48px] flex items-center ${
                    currentPage === 'news' 
                      ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  General News
                </Link>
                <Link 
                  to="/sb8j-1/media-coverage" 
                  className={`px-8 py-4 transition-all duration-300 text-base block min-h-[48px] flex items-center ${
                    currentPage === 'media-coverage' 
                      ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Media Coverage Links
                </Link>
                <Link 
                  to="/sb8j-1/social-toolkit" 
                  className={`px-8 py-4 transition-all duration-300 text-base block min-h-[48px] flex items-center ${
                    currentPage === 'social-toolkit' 
                      ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  IIFB Social Media Toolkit
                </Link>
                <Link 
                  to="/sb8j-1/press-conferences" 
                  className={`px-8 py-4 transition-all duration-300 text-base block min-h-[48px] flex items-center ${
                    currentPage === 'press-conferences' 
                      ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Press Conferences
                </Link>
                <Link 
                  to="/sb8j-1/articles" 
                  className={`px-8 py-4 transition-all duration-300 text-base block min-h-[48px] flex items-center ${
                    currentPage === 'articles' 
                      ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Articles
                </Link>
                <Link 
                  to="/sb8j-1/videos" 
                  className={`px-8 py-4 transition-all duration-300 text-base block min-h-[48px] flex items-center ${
                    currentPage === 'videos' 
                      ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Videos
                </Link>
                <Link 
                  to="/sb8j-1/gallery" 
                  className={`px-8 py-4 transition-all duration-300 text-base block min-h-[48px] flex items-center ${
                    currentPage === 'gallery' 
                      ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
              </div>
              
              <Link 
                to="/sb8j-1/side-events" 
                className={`px-6 py-5 transition-all duration-300 text-lg font-medium min-h-[56px] flex items-center ${
                  currentPage === 'side-events' 
                    ? 'text-[hsl(var(--iifb-orange))] bg-[hsl(var(--iifb-orange))]/10' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={closeMenu}
              >
                IIFB Side Events
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default SB8J1Navigation;
