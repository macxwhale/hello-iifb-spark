
import SBSTTA27Navigation from '@/components/SBSTTA27Navigation';
import { usePexelsImage } from '@/hooks/usePexelsImage';

const SBSTTA27About = () => {
  const { imageUrl, isLoading } = usePexelsImage('sbstta-27-about');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
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
        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              About SBSTTA-27
            </h1>
            <p className="text-xl md:text-2xl mb-12">
              Learn about the 27th Scientific Advisory Meeting
            </p>

            <SBSTTA27Navigation currentPage="about" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-foreground mb-8">Overview</h2>
              
              <p className="text-xl text-foreground leading-relaxed mb-8">
                The Subsidiary Body on Scientific, Technical and Technological Advice (SBSTTA) is a multidisciplinary open-ended body established by Article 25 of the Convention on Biological Diversity. It provides the Conference of the Parties and, as appropriate, its other subsidiary bodies with timely advice relating to the implementation of the Convention.
              </p>

              <div className="grid md:grid-cols-1 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Scientific Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    SBSTTA draws on the best available scientific knowledge and expertise to provide evidence-based recommendations for biodiversity conservation and sustainable use.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Policy Relevance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The body ensures that scientific findings are translated into practical policy recommendations that can be implemented by governments and stakeholders.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Inclusive Process</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    SBSTTA meetings provide a platform for diverse stakeholders, including Indigenous Peoples and local communities, to contribute their knowledge and perspectives.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-subtle p-8 lg:p-12 rounded-lg border border-border/30 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">SBSTTA-27 Focus Areas</h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  The 27th meeting will focus on key scientific and technical issues critical to the implementation of the Kunming-Montreal Global Biodiversity Framework.
                </p>
                <ul className="space-y-3 text-lg text-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Scientific assessment of progress towards the KMGBF targets
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Technical guidance on monitoring and reporting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Integration of traditional knowledge systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-4"></span>
                    Climate-biodiversity interlinkages
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-subtle p-8 lg:p-12 rounded-lg border border-border/30">
                <h3 className="text-2xl font-bold text-foreground mb-6">Expected Participation</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  SBSTTA-27 will bring together government representatives, scientific experts, Indigenous Peoples and local communities, civil society organizations, and other stakeholders to review scientific and technical information and develop recommendations for the Conference of the Parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SBSTTA27About;
