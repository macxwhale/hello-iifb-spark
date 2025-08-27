
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePexelsImage } from '@/hooks/usePexelsImage';

const SB8J1About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { imageUrl, isLoading } = usePexelsImage('sb8j-about');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

              {/* Navigation */}
              <div className="pt-8">
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                  <div className="flex items-center justify-center space-x-1 bg-gradient-to-r from-iifb-rust/20 via-iifb-earth/20 to-iifb-forest/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                    <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 rounded-full transition-all duration-300 text-xl font-medium">Home</Link>
                    <Link to="/sb8j-1/about" className="px-4 py-2 text-white bg-gradient-to-r from-iifb-rust/40 to-iifb-forest/40 rounded-full transition-all duration-300 text-xl font-medium">About</Link>
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 rounded-full transition-all duration-300 text-xl font-medium">Statements</Link>
                    <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 rounded-full transition-all duration-300 text-xl font-medium">Documents</Link>
                    
                    {/* News & Media Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center px-4 py-2 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 rounded-full transition-all duration-300 text-xl font-medium">
                          News & Media
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-[220px] z-50">
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/news" className="w-full px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-iifb-rust/10 hover:to-iifb-forest/10">
                            General News
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/media-coverage" className="w-full px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-iifb-rust/10 hover:to-iifb-forest/10">
                            Media Coverage Links
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/social-toolkit" className="w-full px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-iifb-rust/10 hover:to-iifb-forest/10">
                            IIFB Social Media Toolkit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/press-conferences" className="w-full px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-iifb-rust/10 hover:to-iifb-forest/10">
                            Press Conferences
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/articles" className="w-full px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-iifb-rust/10 hover:to-iifb-forest/10">
                            Articles
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/videos" className="w-full px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-iifb-rust/10 hover:to-iifb-forest/10">
                            Videos
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/gallery" className="w-full px-3 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-iifb-rust/10 hover:to-iifb-forest/10">
                            Gallery
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 rounded-full transition-all duration-300 text-xl font-medium">Side Events</Link>
                  </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 bg-gradient-to-r from-iifb-rust/20 to-iifb-forest/20 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
                    onClick={toggleMenu}
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <nav className="md:hidden mt-4 bg-gradient-to-br from-iifb-rust/20 via-iifb-earth/20 to-iifb-forest/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 border-b border-white/10 text-lg">Home</Link>
                      <Link to="/sb8j-1/about" className="px-6 py-4 text-white bg-gradient-to-r from-iifb-rust/40 to-iifb-forest/40 transition-all duration-300 border-b border-white/10 text-lg">About</Link>
                      <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 border-b border-white/10 text-lg">Statements</Link>
                      <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 border-b border-white/10 text-lg">Documents</Link>
                      
                      {/* Mobile News & Media submenu */}
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white/70 text-lg font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 text-sm block">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 text-sm block">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 text-sm block">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 text-sm block">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 text-sm block">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 text-sm block">Videos</Link>
                        <Link to="/sb8j-1/gallery" className="px-8 py-3 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 text-sm block">Gallery</Link>
                      </div>
                      
                      <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-gradient-to-r hover:from-iifb-rust/30 hover:to-iifb-forest/30 transition-all duration-300 text-lg">Side Events</Link>
                    </div>
                  </nav>
                )}
              </div>
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
                The First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions (SB8J-1) will be held from 27 to 30 October 2025 in Panama City, Panama. This historic gathering follows a landmark decision adopted at COP 16, where Parties to the Convention on Biological Diversity (CBD) agreed to establish a new permanent Subsidiary Body dedicated specifically to Article 8(j) and related provisions concerning Indigenous Peoples and local communities. The creation of this body marks an important step in elevating IPLC issues within CBD processes and ensuring stronger participation and contributions of Indigenous Peoples and local communities toward the achievement of global biodiversity goals.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                SB8J-1 will address several critical issues that directly relate to the rights, roles, and contributions of IPLCs in biodiversity conservation and sustainable use. Key items on the agenda include:
              </p>

              <div className="grid md:grid-cols-1 gap-8 mb-12">
                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Modus Operandi of the Subsidiary Body</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Establishing clear working methods, procedures, and structures to guide the functioning of the new body.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border/50 shadow-soft">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Guidelines on Indigenous and Traditional Territories</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Supporting Indigenous People and local community led protection and restoration efforts in line with Targets 2 and 3 of the Kunming–Montreal Global Biodiversity Framework (KMGBF).
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
                <h3 className="text-2xl font-bold text-foreground mb-6">IIFB's Role</h3>
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

export default SB8J1About;
