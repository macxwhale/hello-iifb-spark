import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';

interface SBSTTA27HeroProps {
  title: string;
  currentPage: 'home' | 'about' | 'statements' | 'documents' | 'side-events' | 'articles' | 'videos' | 'gallery';
}

const SBSTTA27Hero = ({ title, currentPage }: SBSTTA27HeroProps) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        <div 
          className="absolute inset-0 mx-8 bg-cover bg-center bg-no-repeat h-full rounded-lg"
          style={{ 
            backgroundImage: `url(/iifb-uploads/meetings-celebration.jpg)`
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4">
          <SBSTTA27Navigation currentPage={currentPage} />
        </div>
      </section>
    </>
  );
};

export default SBSTTA27Hero;