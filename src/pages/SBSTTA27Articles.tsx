
import SBSTTA27Hero from '@/components/SBSTTA27Hero';

const SBSTTA27Articles = () => {
  return (
    <div className="min-h-screen bg-background">
      <SBSTTA27Hero title="SBSTTA-27 Articles" currentPage="articles" />

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-xl text-muted-foreground">Articles will be available soon.</p>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27Articles;
