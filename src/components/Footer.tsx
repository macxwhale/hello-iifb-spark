
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const Footer = () => {
  return (
    <footer className="bg-iifb-dark-earth text-white py-16 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* IIFB Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/bfba4f5a-290d-41ce-8eca-ac310edf3aad.png" 
                alt="IIFB - International Indigenous Forum on Biodiversity" 
                className="h-20 w-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-white">
                One Voice for Mother Earth
              </h3>
            </div>
          </div>

          {/* Office Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Office</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p>Adams Arcade, Former Tele poster Flats, off</p>
                <p>Elgeyo Marakwet Road, House C6</p>
              </div>
              <div>
                <p>4to. Pasaje, casa 1-222, Colonia San Rafael, Zona</p>
                <p>2, Chimaltenango, Guatemala, C.A.</p>
              </div>
              <div>
                <p>iifbindigenouspeoples@iifb-indigenous.org</p>
              </div>
            </div>
          </div>

          {/* Website Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Website</h4>
            <nav className="space-y-2">
              <a href="/" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About us
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Our Work
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Capacity Building Center
              </a>
              <a href="/sb8j-1/statements" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Statements
              </a>
              <a href="/news" className="block text-sm text-gray-300 hover:text-white transition-colors">
                News
              </a>
              <a href="/side-events" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Events
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                How to Engage
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Work with IIFB
              </a>
              <a href="#" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Code of Conduct
              </a>
            </nav>
          </div>

          {/* Bulletin Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">Bulletin</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input 
                  type="email"
                  placeholder="macxwhale@gmail.com"
                  className="bg-transparent border-gray-600 text-white placeholder:text-gray-400 text-sm"
                />
                <Button 
                  size="sm"
                  className="bg-iifb-rust hover:bg-iifb-orange px-3"
                >
                  →
                </Button>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" className="mt-1" />
                <label htmlFor="privacy" className="text-xs text-gray-400">
                  I agree to the{' '}
                  <a href="#" className="text-white underline hover:text-gray-300">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <p className="text-xs text-gray-400">
                Please select at least one list.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            FIIB © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;
