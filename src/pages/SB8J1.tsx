import { usePexelsImage } from '@/hooks/usePexelsImage';
import SB8J1Navigation from '@/components/SB8J1Navigation';

const SB8J1 = () => {
  const { imageUrl, isLoading } = usePexelsImage('sb8j-about');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] h-auto overflow-hidden">
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
        <div className="relative z-10 flex flex-col justify-center min-h-[80vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SB8J-1
            </h1>

            <SB8J1Navigation currentPage="home" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                The First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions (SB8J-1) will be held from 27 to 30 October 2025 in Panama City, Panama. This historic gathering follows a landmark decision adopted at COP 16, where Parties to the Convention on Biological Diversity (CBD) agreed to establish a new permanent Subsidiary Body dedicated specifically to Article 8(j) and related provisions concerning Indigenous Peoples and local communities. The creation of this body marks an important step in elevating IPLC issues within CBD processes and ensuring stronger participation and contributions of Indigenous Peoples and local communities toward the achievement of global biodiversity goals.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-12">
                SB8J-1 will address several critical issues that directly relate to the rights, roles, and contributions of IPLCs in biodiversity conservation and sustainable use. Key items on the agenda include establishing the body's operational framework, developing territorial guidelines, integrating traditional knowledge in planning processes, and reviewing key terminology to ensure cultural relevance and inclusivity in CBD processes.
              </p>

              <div className="grid md:grid-cols-1 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Modus Operandi of the Subsidiary Body</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Establishing clear working methods, procedures, and structures to guide the functioning of the new body, ensuring effective governance and meaningful participation of all stakeholders.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Guidelines on Indigenous and Traditional Territories</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Supporting Indigenous People and local community led protection and restoration efforts in line with Targets 2 and 3 of the Kunming–Montreal Global Biodiversity Framework (KMGBF), recognizing their crucial role in biodiversity conservation.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Integration of Traditional Knowledge in Planning</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Developing guidelines for the inclusion of traditional lands and resource use in spatial planning processes and environmental impact assessments, ensuring Indigenous Peoples and local communities perspectives are formally recognized in decision-making.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Review of Terminology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Undertaking a process to review and update the Voluntary Glossary of Key Terms and Concepts related to Article 8(j), to ensure clarity, cultural relevance and inclusivity in CBD processes.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 lg:p-12 shadow-strong border border-border/50 mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">IIFB's Key Role</h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  At this meeting, the International Indigenous Forum on Biodiversity (IIFB) will play a key role in supporting and ensuring the meaningful participation of Indigenous Peoples in the formal negotiations. IIFB's engagement will focus on safeguarding the rights of Indigenous Peoples and local communities, amplifying their voices in global biodiversity policy, and fostering constructive dialogue with Parties to the Convention.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  By doing so, IIFB aims to strengthen the recognition of Indigenous knowledge systems, promote equitable partnerships, and advance the full and effective implementation of both Article 8(j) and the Kunming–Montreal Global Biodiversity Framework, with particular emphasis on Target 3.
                </p>
              </div>

              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-secondary/20">
                <h3 className="text-2xl font-bold text-foreground mb-6">Expected Outcomes</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  The outcomes of SB8J-1 are expected to lay a strong foundation for the permanent Subsidiary Body, setting in motion practical mechanisms that elevate Indigenous Peoples and local communities leadership, enhance biodiversity governance and contribute to achieving the ambitious global biodiversity targets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SB8J1;
