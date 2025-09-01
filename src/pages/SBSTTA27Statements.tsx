
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import StatementsCarousel from '@/components/StatementsCarousel';

const SBSTTA27Statements = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/081c59be-4485-4784-bbad-20d932375bbd.png)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SBSTTA-27 Statements
            </h1>

            <SBSTTA27Navigation currentPage="statements" />
          </div>
        </div>
      </section>

      {/* Statements Section */}
      <StatementsCarousel />
    </div>
  );
};

export default SBSTTA27Statements;
