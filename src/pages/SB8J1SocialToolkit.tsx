import { useState } from 'react';
import { Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SB8J1Navigation from '@/components/SB8J1Navigation';
import ViewToggle, { ViewType } from '@/components/ViewToggle';

const SB8J1SocialToolkit = () => {
  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const saved = localStorage.getItem('sb8j-social-toolkit-view');
    return (saved as ViewType) || 'cards';
  });

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
      <section className="relative min-h-[60vh] h-auto overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: `url(/lovable-uploads/081c59be-4485-4784-bbad-20d932375bbd.png)`
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center min-h-[60vh] max-w-6xl mx-auto px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-white text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              SB8J-1 Social Toolkit
            </h1>

            <SB8J1Navigation currentPage="social-toolkit" />
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
