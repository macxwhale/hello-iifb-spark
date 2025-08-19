
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBannerImage from '@/assets/hero-banner-indigenous.jpg';
import CountdownTimer from '@/components/CountdownTimer';

const HeroBanner = () => {
  return (
    <section className="relative min-h-fit h-auto overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url(${heroBannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between min-h-[50vh] sm:min-h-[45vh] md:min-h-[40vh] lg:min-h-[35vh] xl:min-h-[30vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
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
              
              <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed opacity-90">
                Join the global conversation on biodiversity conservation and Indigenous rights in Panama City
              </p>

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
                    <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 w-full font-semibold shadow-lg">
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
