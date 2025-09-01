
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';

const SBSTTA27 = () => {
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
              SBSTTA-27
            </h1>

            <SBSTTA27Navigation currentPage="home" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                The twenty-seventh meeting of the Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA-27) will be held from 20-25 October 2025 in Panama City, Panama. This meeting serves as the scientific advisory body to the Convention on Biological Diversity, providing expert guidance on the implementation of the Kunming-Montreal Global Biodiversity Framework.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-12">
                SBSTTA-27 will focus on scientific assessments, technical recommendations, and methodological guidance needed to support Parties in achieving the ambitious global biodiversity targets. The meeting brings together leading scientists, technical experts, and policy makers to ensure that biodiversity conservation efforts are grounded in the best available science.
              </p>

              <div className="grid md:grid-cols-1 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Scientific Assessment and Monitoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Providing scientific guidance on monitoring frameworks, indicators, and assessment methodologies for tracking progress towards the global biodiversity targets.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Technical Recommendations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developing technical guidance and best practices for the implementation of conservation measures, sustainable use practices, and ecosystem restoration efforts.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Knowledge Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Facilitating the integration of scientific knowledge, traditional knowledge, and local knowledge systems to inform evidence-based decision making for biodiversity conservation.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 lg:p-12 border border-secondary/20">
                <h3 className="text-2xl font-bold text-foreground mb-6">Expected Outcomes</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  SBSTTA-27 will deliver key scientific recommendations and technical guidance to support the effective implementation of the Kunming-Montreal Global Biodiversity Framework, ensuring that conservation efforts are based on sound scientific evidence and contribute to halting and reversing biodiversity loss by 2030.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27;
