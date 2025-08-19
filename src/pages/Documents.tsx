import { useState } from 'react';
import Footer from '@/components/Footer';
import heroBannerImage from '@/assets/hero-banner.jpg';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Documents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDownload = (docName: string) => {
    // Placeholder for download functionality
    console.log(`Downloading ${docName}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBannerImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white py-20 lg:py-24">
          <div className="mb-12 lg:mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Documents
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                Official CBD & IIFB Resources
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Access key documents for SBSTTA-27 and SB8J-1 meetings
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-semibold shadow-lg">
                View All Documents
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold backdrop-blur-sm">
                Search Documents
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="pt-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="flex items-center justify-center space-x-1 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-xl">
                <Link to="/" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Home</Link>
                <a href="/#about" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">About</a>
                <a href="/#statements" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Statements</a>
                <Link to="/documents" className="px-4 py-2 text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium bg-white/20">Documents</Link>
                <a href="/#news" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">News & Media</a>
                <a href="/#side-events" className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 text-sm font-medium">Side Events</a>
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
                  <Link to="/" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">Home</Link>
                  <a href="/#about" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">About</a>
                  <a href="/#statements" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">Statements</a>
                  <Link to="/documents" className="px-6 py-4 text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10 bg-white/20">Documents</Link>
                  <a href="/#news" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 border-b border-white/10">News & Media</a>
                  <a href="/#side-events" className="px-6 py-4 text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300">Side Events</a>
                </div>
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* CBD Documents Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">CBD Official Documents</h2>
              <Card className="p-8 border border-border/50 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <ExternalLink className="h-6 w-6 text-primary" />
                    Convention on Biological Diversity
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Access official CBD documents for SB8J-1 meeting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-subtle p-6 rounded-lg">
                    <p className="text-foreground mb-4">
                      Link to the CBD Documents: 
                    </p>
                    <a 
                      href="https://www.cbd.int/meetings/SB8J-01" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium text-lg"
                    >
                      https://www.cbd.int/meetings/SB8J-01
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* IIFB Documents Section */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Key IIFB Documents</h2>
              <div className="grid md:grid-cols-1 gap-8">
                {/* Modus Operandi */}
                <Card className="border border-border/50 shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">Modus Operandi</CardTitle>
                    <CardDescription>
                      Framework for ensuring meaningful Indigenous participation in the new subsidiary body's operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleDownload('Modus Operandi')}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleDownload('Modus Operandi')}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download DOCX
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Spatial Planning Guidelines */}
                <Card className="border border-border/50 shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">Spatial Planning Guidelines</CardTitle>
                    <CardDescription>
                      Guidelines for inclusion of traditional lands and resource use in spatial planning and environmental impact assessments
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleDownload('Spatial Planning Guidelines')}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleDownload('Spatial Planning Guidelines')}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download DOCX
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* ITTs Guidelines */}
                <Card className="border border-border/50 shadow-soft hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">ITTs Guidelines</CardTitle>
                    <CardDescription>
                      Indigenous and Traditional Territories guidelines to support IPLC-led protection and restoration efforts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => handleDownload('ITTs Guidelines')}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleDownload('ITTs Guidelines')}
                        className="flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download DOCX
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documents;