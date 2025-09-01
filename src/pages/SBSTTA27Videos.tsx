
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import { usePexelsImage } from '@/hooks/usePexelsImage';

const SBSTTA27Videos = () => {
  const { imageUrl, isLoading } = usePexelsImage('sbstta-27-videos');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
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

        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SBSTTA-27 Videos
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Video coverage and recordings from the 27th Scientific Advisory Meeting
            </p>

            <SBSTTA27Navigation currentPage="videos" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-subtle p-12 rounded-lg border border-border/30">
            <h3 className="text-2xl font-bold text-foreground mb-6">Videos Coming Soon</h3>
            <p className="text-lg text-muted-foreground">
              Video recordings and highlights from SBSTTA-27 will be available here during and after the meeting. 
              Check back after October 20, 2025 for complete video coverage of the sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBSTTA27Videos;
