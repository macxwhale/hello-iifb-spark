
import { usePexelsImage } from '@/hooks/usePexelsImage';
import StatementsCarousel from '@/components/StatementsCarousel';
import SB8J1Navigation from '@/components/SB8J1Navigation';

const SB8J1Statements = () => {
  const { imageUrl, isLoading } = usePexelsImage('sb8j-statements');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-fit h-auto overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-[50vh] sm:min-h-[45vh] md:min-h-[40vh] lg:min-h-[35vh] xl:min-h-[30vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="flex-1 flex items-center">
            <div className="text-white text-center w-full">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                SB8J-1 Statements
              </h1>

              <SB8J1Navigation currentPage="statements" />
            </div>
          </div>
        </div>
      </section>

      {/* Statements Section */}
      <StatementsCarousel />
    </div>
  );
};

export default SB8J1Statements;
