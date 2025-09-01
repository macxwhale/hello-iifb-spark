
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';

const SBSTTA27Videos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/081c59be-4485-4784-bbad-20d932375bbd.png)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SBSTTA-27 Videos
            </h1>

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
