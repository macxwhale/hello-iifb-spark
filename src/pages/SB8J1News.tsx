
import SB8J1Navigation from '@/components/SB8J1Navigation';
import NewsCarousel from '@/components/NewsCarousel';

const SB8J1News = () => {
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
              SB8J-1 News
            </h1>

            <SB8J1Navigation currentPage="news" />
          </div>
        </div>
      </section>

      {/* News Section */}
      <div className="container mx-auto px-4 py-16">
        <NewsCarousel />
      </div>
    </div>
  );
};

export default SB8J1News;
