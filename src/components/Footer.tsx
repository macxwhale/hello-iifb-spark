
import { useEffect, useState, useRef } from 'react';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleBulletinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && agreed) {
      console.log('Bulletin signup:', { email, agreed });
      // Handle bulletin signup logic here
      setEmail('');
      setAgreed(false);
    }
  };

  return (
    <footer className="bg-[#2a2a2a] text-white py-20 relative">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-20">
          {/* IIFB Logo and Tagline */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <img 
                src="/lovable-uploads/8d13e634-0e00-4549-90b7-9f11c804ff78.png" 
                alt="IIFB Logo" 
                className="w-24 h-24 object-contain"
              />
              <div className="flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-2">IIFB</h3>
                <p className="text-sm text-white/90 leading-relaxed">International Indigenous<br />Forum on Biodiversity</p>
              </div>
            </div>
            <p className="text-xl font-medium text-white">One Voice for Mother Earth</p>
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6">Office</h4>
            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <div>
                <p>Adams Arcade, Former Tele poster Flats, off</p>
                <p>Elgeyo Marakwet Road, House C6</p>
              </div>
              <div>
                <p>4to. Pasaje, casa 1-222, Colonia San Rafael, Zona</p>
                <p>2, Chimaltenango, Guatemala, C.A.</p>
              </div>
              <div className="pt-2">
                <p>iifbindigenouspeoples@iifb-indigenous.org</p>
              </div>
            </div>
          </div>

          {/* Website Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6">Website</h4>
            <div className="space-y-3 text-sm">
              <a href="/" className="block text-white/80 hover:text-white transition-colors">Home</a>
              <a href="/about" className="block text-white/80 hover:text-white transition-colors">About us</a>
              <a href="/resources" className="block text-white/80 hover:text-white transition-colors">Our Work</a>
              <a href="/resources" className="block text-white/80 hover:text-white transition-colors">Capacity Building Center</a>
              <a href="/documents" className="block text-white/80 hover:text-white transition-colors">Statements</a>
              <a href="/news" className="block text-white/80 hover:text-white transition-colors">News</a>
              <a href="/side-events" className="block text-white/80 hover:text-white transition-colors">Events</a>
              <a href="/resources" className="block text-white/80 hover:text-white transition-colors">How to Engage</a>
              <a href="/about" className="block text-white/80 hover:text-white transition-colors">Work with IIFB</a>
              <a href="/about" className="block text-white/80 hover:text-white transition-colors">Code of Conduct</a>
            </div>
          </div>

          {/* Bulletin Signup */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white mb-6">Bulletin</h4>
            <form onSubmit={handleBulletinSubmit} className="space-y-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-black placeholder:text-gray-500 border-0 text-sm rounded-r-none"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-transparent hover:bg-white/10 text-white px-6 border border-white/20 rounded-l-none"
                  disabled={!email || !agreed}
                >
                  →
                </Button>
              </div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4"
                />
                <label htmlFor="privacy" className="text-sm text-white/80 leading-relaxed">
                  I agree to the <span className="underline cursor-pointer">Privacy Policy</span>
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-16 pt-8 text-center">
          <p className="text-white/60 text-sm">FIIB © 2025. All Rights Reserved.</p>
        </div>
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;
