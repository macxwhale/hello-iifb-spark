
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Play, Calendar, Clock, ChevronDown } from 'lucide-react';
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

const SB8J1Videos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { imageUrl, isLoading } = usePexelsImage('sb8j-videos');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const videos = [
    {
      title: "Understanding Article 8(j): A Visual Guide",
      description: "An animated explainer video breaking down Article 8(j) and its importance for Indigenous Peoples and biodiversity conservation.",
      duration: "8:42",
      date: "October 25, 2025",
      category: "Educational",
      thumbnail: "/api/placeholder/400/225",
      featured: true,
      views: "12,450"
    },
    {
      title: "Indigenous Voices: Preparing for SB8J-1",
      description: "Indigenous leaders from around the world share their hopes and expectations for the historic first meeting.",
      duration: "15:30",
      date: "October 22, 2025",
      category: "Interview",
      thumbnail: "/api/placeholder/400/225",
      views: "8,920"
    },
    {
      title: "Traditional Knowledge in Action",
      description: "Documentary footage showing traditional ecological knowledge being applied in conservation efforts across different ecosystems.",
      duration: "22:15",
      date: "October 20, 2025",
      category: "Documentary",
      thumbnail: "/api/placeholder/400/225",
      views: "15,780"
    },
    {
      title: "Women as Knowledge Keepers",
      description: "Highlighting the crucial role of Indigenous women in preserving and transmitting traditional knowledge systems.",
      duration: "12:08",
      date: "October 18, 2025",
      category: "Profile",
      thumbnail: "/api/placeholder/400/225",
      views: "6,340"
    },
    {
      title: "Youth Panel: Future of Biodiversity Governance",
      description: "Young Indigenous activists discuss their vision for inclusive biodiversity governance and decision-making processes.",
      duration: "18:25",
      date: "October 15, 2025",
      category: "Panel Discussion",
      thumbnail: "/api/placeholder/400/225",
      views: "9,560"
    },
    {
      title: "Panama's Indigenous Communities",
      description: "Exploring the rich biodiversity and traditional knowledge of Panama's Indigenous communities as they prepare to host SB8J-1.",
      duration: "25:40",
      date: "October 12, 2025",
      category: "Documentary",
      thumbnail: "/api/placeholder/400/225",
      views: "11,200"
    }
  ];

  const featuredVideo = videos.find(video => video.featured);
  const regularVideos = videos.filter(video => !video.featured);

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
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
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
                  <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                    <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Home</Link>
                    <Link to="/sb8j-1/about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">About</Link>
                    <Link to="/sb8j-1/statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Statements</Link>
                    <Link to="/sb8j-1/documents" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Documents</Link>
                    
                    {/* News & Media Dropdown */}
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
                          <Link to="/sb8j-1/social-toolkit" className="w-full px-3 py-2 text-gray-700 hover:bg-gray-100">
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
                          <Link to="/sb8j-1/videos" className="w-full px-3 py-2 text-gray-700 bg-gray-100">
                            Videos
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    <Link to="/sb8j-1/side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-xl font-medium">Side Events</Link>
                  </div>
                </nav>

                {/* Mobile Menu Button */}
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

                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <nav className="md:hidden mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="flex flex-col">
                      <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Home</Link>
                      <Link to="/sb8j-1/about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">About</Link>
                      <Link to="/sb8j-1/statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Statements</Link>
                      <Link to="/sb8j-1/documents" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 text-lg">Documents</Link>
                      
                      {/* Mobile News & Media submenu */}
                      <div className="border-b border-white/10">
                        <div className="px-6 py-3 text-white/70 text-lg font-medium">News & Media</div>
                        <Link to="/sb8j-1/news" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">General News</Link>
                        <Link to="/sb8j-1/media-coverage" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Media Coverage Links</Link>
                        <Link to="/sb8j-1/social-toolkit" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">IIFB Social Media Toolkit</Link>
                        <Link to="/sb8j-1/press-conferences" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Press Conferences</Link>
                        <Link to="/sb8j-1/articles" className="px-8 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 text-base">Articles</Link>
                        <Link to="/sb8j-1/videos" className="px-8 py-3 text-white bg-white/20 transition-all duration-300 text-base">Videos</Link>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Videos</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Video content featuring Indigenous voices, educational materials, and documentary coverage related to SB8J-1 and Article 8(j).
            </p>
          </div>

          {/* Featured Video */}
          {featuredVideo && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-6">Featured Video</h3>
              <Card className="overflow-hidden bg-card border-2 border-primary shadow-xl">
                <div className="relative">
                  <img 
                    src={featuredVideo.thumbnail} 
                    alt={featuredVideo.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 rounded-full h-16 w-16 p-0">
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white">Featured</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary">{featuredVideo.duration}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{featuredVideo.category}</Badge>
                    <span className="text-sm text-muted-foreground">{featuredVideo.views} views</span>
                  </div>
                  <CardTitle className="text-2xl">{featuredVideo.title}</CardTitle>
                  <CardDescription className="text-lg">{featuredVideo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    {featuredVideo.date}
                  </div>
                  <Button size="lg" className="bg-secondary text-white hover:bg-secondary-hover">
                    <Play className="h-4 w-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Videos Grid */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">All Videos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 rounded-full h-12 w-12 p-0">
                        <Play className="h-6 w-6 ml-1" />
                      </Button>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="secondary" className="text-xs">{video.duration}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">{video.category}</Badge>
                      <span className="text-xs text-muted-foreground">{video.views} views</span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="line-clamp-3 mb-3">{video.description}</CardDescription>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {video.date}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SB8J1Videos;
