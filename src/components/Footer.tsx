
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  return (
    <footer className="bg-iifb-dark-earth text-white py-16 relative">
      <div className="container mx-auto px-4">
        {/* Sponsored By Section */}
        <div className="text-center">
          <p className="text-gray-300 text-sm mb-4">Sponsored by</p>
          <div className="flex justify-center items-center">
            <a
              href="https://www.iifb.net"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit International Indigenous Forum on Biodiversity website"
              className="inline-block transition-opacity hover:opacity-80 focus:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            >
              <img 
                src="/lovable-uploads/35d6dee7-4d9b-4354-8f18-83f7bd69dce6.png" 
                alt="International Indigenous Forum on Biodiversity" 
                className="h-16 md:h-20 object-contain"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;
