
import { usePexelsImage } from '@/hooks/usePexelsImage';
import SB8J1Navigation from '@/components/SB8J1Navigation';

const SB8J1 = () => {
  const { imageUrl, isLoading } = usePexelsImage('sb8j-about');

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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                SB8J-1
                <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                  First Meeting on Article 8(j)
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Historic milestone for Indigenous Peoples and local communities in biodiversity governance
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center space-x-2 text-lg">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>October 27-30, 2025</span>
                </div>
                <div className="flex items-center space-x-2 text-lg">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>Panama City, Panama</span>
                </div>
              </div>

              <SB8J1Navigation />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                The First Meeting of the Subsidiary Body on Article 8(j) (SB8J-1) will take place from 27–30 October 2025 in Panama City, Panama, following COP 16's historic decision to establish a permanent body focused on Indigenous Peoples and local communities (IPLCs). The meeting will address key issues such as Indigenous territories, traditional knowledge, and participation in biodiversity planning, with a strong focus on Indigenous women and youth, advancing the implementation of Article 8(j) and the Kunming-Montreal Global Biodiversity Framework.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-12">
                The First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions (SB8J-1) will take place from 27 to 30 October 2025 in Panama City, Panama. This milestone follows a historic decision adopted at COP 16, where Parties to the Convention on Biological Diversity (CBD) agreed to establish a new permanent Subsidiary Body dedicated to Article 8(j) and other provisions concerning Indigenous Peoples and local communities (IPLCs). The body aims to elevate IPLC issues within CBD processes and strengthen their participation and contributions toward global biodiversity goals.
              </p>

              <div className="grid md:grid-cols-1 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Meeting Focus Areas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The SB8J-1 meeting will address several critical issues related to IPLCs, including the modus operandi of the new Subsidiary Body; guidelines on Indigenous and traditional territories to support IPLC-led protection and restoration efforts in line with Targets 2 and 3 of the Kunming-Montreal Global Biodiversity Framework (KMGBF).
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Spatial Planning Guidelines</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Guidelines for the inclusion of traditional lands and resource use in spatial planning and environmental impact assessments; and the review and update of the Voluntary Glossary of key terms and concepts related to Article 8(j).
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">IIFB Participation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At this meeting, the International Indigenous Forum on Biodiversity (IIFB) will work to support and ensure the meaningful participation of Indigenous Peoples in the formal negotiations. Through this engagement, IIFB seeks to strengthen the rights, roles, and contributions of IPLCs, foster constructive dialogue with CBD Parties, and advance the full and effective implementation of Article 8(j) and the KMGBF, with particular emphasis on Target 3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SB8J1;
