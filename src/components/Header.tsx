import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
            <span className="text-xl font-bold text-foreground">CBD Panama</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <a href="/#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/#statements" className="text-foreground hover:text-primary transition-colors">Statements</a>
            <Link to="/documents" className="text-foreground hover:text-primary transition-colors">Documents</Link>
            <a href="/#news" className="text-foreground hover:text-primary transition-colors">News & Media</a>
            <a href="/#side-events" className="text-foreground hover:text-primary transition-colors">Side Events</a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="px-2 py-2 text-foreground hover:text-primary transition-colors">Home</Link>
              <a href="/#about" className="px-2 py-2 text-foreground hover:text-primary transition-colors">About</a>
              <a href="/#statements" className="px-2 py-2 text-foreground hover:text-primary transition-colors">Statements</a>
              <Link to="/documents" className="px-2 py-2 text-foreground hover:text-primary transition-colors">Documents</Link>
              <a href="/#news" className="px-2 py-2 text-foreground hover:text-primary transition-colors">News & Media</a>
              <a href="/#side-events" className="px-2 py-2 text-foreground hover:text-primary transition-colors">Side Events</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;