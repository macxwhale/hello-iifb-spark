import SB8J1Navigation from '@/components/SB8J1Navigation';
import SB8J1Hero from '@/components/SB8J1Hero';

const SB8J1Statements = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SB8J1Hero title="SB8J-1 Statements" />

      {/* Navigation Section */}
      <section className="bg-white border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <SB8J1Navigation currentPage="statements" />
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-xl text-muted-foreground">Statements will be available soon.</p>
        </div>
      </section>
    </div>
  );
};

export default SB8J1Statements;