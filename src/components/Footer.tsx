
import { useEffect, useState, useRef } from 'react';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const Footer = () => {
  return (
    <footer className="bg-iifb-footer-bg text-white py-20 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* IIFB Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/61637718-f961-4a62-b50b-e863dd2fb3f3.png" 
                alt="IIFB - International Indigenous Forum on Biodiversity" 
                className="h-24 w-auto mb-6"
              />
              <h3 className="text-xl font-semibold text-white">
                One Voice for Mother Earth
              </h3>
            </div>
          </div>

          {/* Office Section */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">Office</h4>
            <div className="space-y-5 text-base text-gray-300">
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
            <h4 className="text-xl font-semibold mb-6 text-white">Website</h4>
            <nav className="space-y-3">
              <a href="https://iifb-indigenous.org/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="https://iifb-indigenous.org/about-us/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                About us
              </a>
              <a href="https://iifb-indigenous.org/our-work/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                Our Work
              </a>
              <a href="https://iifb-indigenous.org/capacity-building-center/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                Capacity Building Center
              </a>
              <a href="https://iifb-indigenous.org/resources/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                Statements
              </a>
              <a href="https://iifb-indigenous.org/news/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                News
              </a>
              <a href="https://iifb-indigenous.org/events/month/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                Events
              </a>
              <a href="https://iifb-indigenous.org/get-involved/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                How to Engage
              </a>
              <a href="https://iifb-indigenous.org/iifb-jobs/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                Work with IIFB
              </a>
              <a href="https://iifb-indigenous.org/" target="_blank" rel="noopener noreferrer" className="block text-base text-gray-300 hover:text-white transition-colors">
                Code of Conduct
              </a>
            </nav>
          </div>

          {/* Bulletin Section */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-semibold mb-6 text-white">Bulletin</h4>
            <div className="space-y-5">
              <div className="flex items-center space-x-2">
                <Input 
                  type="email"
                  placeholder="macxwhale@gmail.com"
                  className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 text-base"
                />
                <Button 
                  size="sm"
                  className="px-3 text-white hover:shadow-lg hover:scale-105 transition-all duration-200" 
                  style={{ backgroundColor: 'hsl(var(--iifb-orange))', borderColor: 'hsl(var(--iifb-orange))' }}
                >
                  →
                </Button>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" className="mt-1" />
                <label htmlFor="privacy" className="text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-white underline hover:text-gray-300">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <p className="text-sm text-gray-300">
                Please select at least one list.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-10 border-t border-gray-500 text-center">
          <p className="text-base text-gray-300">
            FIIB © 2025. All Rights Reserved.
          </p>
        </div>
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;
