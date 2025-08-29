import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimer from '@/components/CountdownTimer';

const HeroBanner = () => {
  return (
    <section className="relative min-h-fit h-auto overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url(/lovable-uploads/2c451cde-40f8-4887-9201-300870158e24.png)` }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-[72vh] sm:min-h-[65vh] md:min-h-[58vh] lg:min-h-[50vh] xl:min-h-[43vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-8 w-full">
            {/* Left Container - Main Content */}
            <div className="text-white text-left">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                CBD Panama
                <span className="block text-4xl md:text-5xl font-normal mt-2 opacity-90">
                  Meetings 2025
                </span>
              </h1>

              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex items-center space-x-2 text-lg">
                  <Calendar className="h-5 w-5" />
                  <span>October 20-30, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-lg">
                  <MapPin className="h-5 w-5" />
                  <span>Panama City, Panama</span>
                </div>
              </div>
            </div>

            {/* Right Container - Countdown Timer & Action Buttons */}
            <div className="flex flex-col items-center justify-center md:items-end space-y-6">
              <div className="flex flex-col space-y-6 w-full max-w-xs">
                <div className="w-full">
                  <CountdownTimer />
                </div>
                <div className="flex flex-col space-y-3 w-full">
                  <Link to="/sbstta-27">
                    <Button size="lg" className="text-white hover:opacity-90 w-full font-semibold shadow-lg" style={{ backgroundColor: '#741b00' }}>
                      SBSTTA-27
                    </Button>
                  </Link>
                  <Link to="/sb8j-1">
                    <Button size="lg" className="bg-secondary text-white hover:bg-secondary-hover w-full font-semibold shadow-lg">
                      SB8J-1
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
