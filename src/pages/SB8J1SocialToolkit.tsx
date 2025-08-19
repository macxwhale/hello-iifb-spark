import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Download, Share2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePexelsImage } from '@/hooks/usePexelsImage';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SB8J1SocialToolkit = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-social-toolkit-view');
    return (saved as ViewType) || 'cards';
  });
  const { imageUrl, isLoading } = usePexelsImage('sb8j-social-toolkit');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('sb8j-social-toolkit-view', view);
  };

  const socialAssets = [
    {
      title: "SB8J-1 Instagram Story Template",
      description: "Ready-to-use Instagram story template highlighting the importance of SB8J-1 meeting.",
      format: "PNG",
      dimensions: "1080x1920",
      fileSize: "2.3 MB",
      downloadUrl: "#"
    },
    {
      title: "Facebook Cover Photo",
      description: "Professional Facebook cover photo for organizations attending SB8J-1.",
      format: "JPG",
      dimensions: "1200x630",
      fileSize: "1.8 MB",
      downloadUrl: "#"
    },
    {
      title: "Twitter/X Post Graphics",
      description: "Set of 5 graphics optimized for Twitter/X posts about Indigenous rights and biodiversity.",
      format: "PNG",
      dimensions: "1200x675",
      fileSize: "3.1 MB",
      downloadUrl: "#"
    },
    {
      title: "LinkedIn Banner",
      description: "Professional LinkedIn banner for individuals and organizations supporting Article 8(j).",
      format: "PNG",
      dimensions: "1584x396",
      fileSize: "1.4 MB",
      downloadUrl: "#"
    },
    {
      title: "WhatsApp Status Template",
      description: "Colorful WhatsApp status template to raise awareness about SB8J-1.",
      format: "PNG",
      dimensions: "1080x1920",
      fileSize: "2.0 MB",
      downloadUrl: "#"
    },
    {
      title: "General Social Media Kit",
      description: "Complete kit with logos, color palette, and messaging guidelines.",
      format: "ZIP",
      dimensions: "Various",
      fileSize: "15.2 MB",
      downloadUrl: "#"
    }
  ];

  const samplePosts = [
    {
      platform: "Twitter/X",
      content: "🌍 Historic moment! The first meeting of the Subsidiary Body on Article 8(j) starts October 27 in Panama. Indigenous Peoples leading the way in biodiversity governance! #SB8J1 #IndigenousRights #BiodiversityGovernance",
      hashtags: "#SB8J1 #IndigenousRights #BiodiversityGovernance #COP16 #TraditionalKnowledge"
    },
    {
      platform: "Facebook",
      content: "The First Meeting of the Subsidiary Body on Article 8(j) represents a historic milestone for Indigenous Peoples and local communities in biodiversity governance. Join us in supporting meaningful participation and recognition of traditional knowledge systems. 🌱✊",
      hashtags: "#SB8J1 #IndigenousRights #BiodiversityConservation"
    },
    {
      platform: "Instagram",
      content: "Indigenous wisdom meets global biodiversity action at SB8J-1! 🌿 From October 27-30 in Panama City, Indigenous Peoples will lead crucial discussions on traditional knowledge and territorial rights. Together, we're shaping a sustainable future. 🌍💫",
      hashtags: "#SB8J1 #IndigenousWisdom #BiodiversityAction #TraditionalKnowledge #SustainableFuture"
    }
  ];

  const renderCardsView = () => (
    <div>
      {/* Social Media Assets */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-foreground mb-6">Downloadable Assets</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialAssets.map((asset, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{asset.title}</CardTitle>
                <CardDescription>{asset.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Format</span>
                    <Badge variant="outline">{asset.format}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="font-medium">{asset.dimensions}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">File Size</span>
                    <span className="font-medium">{asset.fileSize}</span>
                  </div>
                </div>
                <Button className="w-full bg-secondary text-white hover:bg-secondary-hover">
                  <Download className="h-4 w-4 mr-2" />
                  Download Asset
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sample Posts */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-6">Sample Social Media Posts</h3>
        <div className="grid gap-6">
          {samplePosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{post.platform}</CardTitle>
                  <Badge variant="secondary">{post.platform}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-foreground leading-relaxed">{post.content}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Suggested hashtags:</p>
                    <p className="text-sm text-primary">{post.hashtags}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Share2 className="h-4 w-4 mr-2" />
                    Copy Post Text
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGridView = () => {
    const combinedItems = [
      ...socialAssets.map(asset => ({ ...asset, itemType: 'asset' })),
      ...samplePosts.map(post => ({
        title: post.platform + " Post Template",
        description: post.content.substring(0, 100) + "...",
        format: "Text",
        dimensions: "N/A",
        fileSize: "N/A",
        downloadUrl: "#",
        itemType: "post"
      }))
    ];

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {combinedItems.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
              <CardDescription className="line-clamp-3">{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Format</span>
                  <Badge variant="outline" className="text-xs">{item.format}</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Size</span>
                  <span className="text-xs font-medium">{item.fileSize}</span>
                </div>
              </div>
              <Button size="sm" className="w-full bg-secondary text-white hover:bg-secondary-hover">
                {item.itemType === 'post' ? (
                  <>
                    <Share2 className="h-3 w-3 mr-1" />
                    Copy
                  </>
                ) : (
                  <>
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderListView = () => (
    <div className="space-y-4">
      {/* Assets */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-foreground mb-4">Downloadable Assets</h3>
        {socialAssets.map((asset, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow mb-4">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline">{asset.format}</Badge>
                    <span className="text-sm text-muted-foreground">{asset.fileSize}</span>
                    <span className="text-sm text-muted-foreground">{asset.dimensions}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{asset.title}</h3>
                  <p className="text-muted-foreground">{asset.description}</p>
                </div>
                <Button className="bg-secondary text-white hover:bg-secondary-hover ml-4">
                  <Download className="h-4 w-4 mr-2" />
                  Download Asset
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Posts */}
      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">Sample Social Media Posts</h3>
        {samplePosts.map((post, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow mb-4">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary">{post.platform}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.platform} Post Template</h3>
                  <div className="bg-muted/50 p-4 rounded-lg mb-4">
                    <p className="text-foreground leading-relaxed">{post.content}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Suggested hashtags:</p>
                    <p className="text-sm text-primary">{post.hashtags}</p>
                  </div>
                </div>
                <Button className="bg-secondary text-white hover:bg-secondary-hover ml-4">
                  <Share2 className="h-4 w-4 mr-2" />
                  Copy Post Text
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentView) {
      case 'grid':
        return renderGridView();
      case 'list':
        return renderListView();
      default:
        return renderCardsView();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-fit h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

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

              <div className="pt-8">
                <nav className="hidden md:block">
                  <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                    <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Home</Link>
                    <Link to="/sb8j-1/about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">About</Link>
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Statements</Link>
                    <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Documents</Link>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">
                          News & Media
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg min-w-[220px]">
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/news" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            General News
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/media-coverage" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Media Coverage Links
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/social-toolkit" className="w-full px-3 py-2 text-gray-700 bg-gray-100">
                            IIFB Social Media Toolkit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/press-conferences" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Press Conferences
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/articles" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Articles
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/sb8j-1/videos" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Videos
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Side Events</Link>
                  </div>
                </nav>

                <div className="md:hidden flex justify-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg"
                    onClick={toggleMenu}
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>

                {isMenuOpen && (
                  <nav className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Home</Link>
                      <Link to="/sb8j-1/about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">About</Link>
                      <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Statements</Link>
                      <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Documents</Link>
                      
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white/70 text-lg font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-base">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Videos</Link>
                      </div>
                      
                      <Link to="/sb8j-1/side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-lg">Side Events</Link>
                    </div>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">IIFB Social Media Toolkit</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Download ready-to-use social media assets and sample posts to amplify Indigenous voices and promote SB8J-1 awareness across social platforms.
              </p>
            </div>
            <ViewToggle currentView={currentView} onViewChange={handleViewChange} />
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default SB8J1SocialToolkit;
