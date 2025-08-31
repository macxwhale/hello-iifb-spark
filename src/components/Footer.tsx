
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const Footer = () => {
  return (
    <footer className="bg-amber-100 text-gray-800 py-16 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* IIFB Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/61637718-f961-4a62-b50b-e863dd2fb3f3.png" 
                alt="IIFB - International Indigenous Forum on Biodiversity" 
                className="h-20 w-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                One Voice for Mother Earth
              </h3>
            </div>
          </div>

          {/* Office Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Office</h4>
            <div className="space-y-4 text-sm text-gray-600">
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
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Website</h4>
            <nav className="space-y-2">
              <a href="/" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Home
              </a>
              <a href="/about" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                About us
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Our Work
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Capacity Building Center
              </a>
              <a href="/sb8j-1/statements" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Statements
              </a>
              <a href="/news" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                News
              </a>
              <a href="/side-events" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Events
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                How to Engage
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Work with IIFB
              </a>
              <a href="#" className="block text-sm text-gray-600 hover:text-gray-800 transition-colors">
                Code of Conduct
              </a>
            </nav>
          </div>

          {/* Bulletin Section */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Bulletin</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input 
                  type="email"
                  placeholder="macxwhale@gmail.com"
                  className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 text-sm"
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
                <label htmlFor="privacy" className="text-xs text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-gray-800 underline hover:text-gray-600">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <p className="text-xs text-gray-600">
                Please select at least one list.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            FIIB © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;
