
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Image as ImageIcon, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { RunwareService, GeneratedImage } from '@/services/runware';

const ImageGenerator = () => {
  const [apiKey, setApiKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);

  const imagePrompts = [
    {
      name: 'indigenous-governance.jpg',
      prompt: 'Indigenous governance meeting with tribal elders and community leaders in traditional ceremonial setting, beautiful natural lighting, photorealistic, high quality',
      page: 'About'
    },
    {
      name: 'indigenous-traditional-knowledge.jpg',
      prompt: 'Indigenous traditional knowledge ceremony in ancient forest setting with elders sharing wisdom, mystical lighting, photorealistic, high quality',
      page: 'Articles'
    },
    {
      name: 'indigenous-media.jpg',
      prompt: 'Indigenous media storytelling with modern and traditional elements, people using both ancient and contemporary communication methods, photorealistic, high quality',
      page: 'Media Coverage'
    },
    {
      name: 'indigenous-nature-conservation.jpg',
      prompt: 'Indigenous people working in nature conservation in pristine forest environment, protecting ancient trees and wildlife, photorealistic, high quality',
      page: 'News'
    },
    {
      name: 'indigenous-documents.jpg',
      prompt: 'Indigenous people with traditional documents and scrolls, knowledge sharing in formal setting, ancient wisdom meets modern documentation, photorealistic, high quality',
      page: 'Documents'
    },
    {
      name: 'indigenous-community-gathering.jpg',
      prompt: 'Indigenous community gathering and ceremony around sacred fire, people in traditional clothing celebrating together, photorealistic, high quality',
      page: 'Side Events'
    },
    {
      name: 'indigenous-voices.jpg',
      prompt: 'Indigenous voices and speaking at traditional gathering, powerful orators addressing community, traditional regalia, photorealistic, high quality',
      page: 'Statements'
    },
    {
      name: 'indigenous-press.jpg',
      prompt: 'Indigenous press conference with community spokespeople, modern setting with traditional elements, professional photography, photorealistic, high quality',
      page: 'Press Conferences'
    },
    {
      name: 'indigenous-social-media.jpg',
      prompt: 'Indigenous social media and modern communication themes, young indigenous people using technology while maintaining cultural identity, photorealistic, high quality',
      page: 'Social Toolkit'
    },
    {
      name: 'indigenous-video-storytelling.jpg',
      prompt: 'Indigenous video storytelling and filming activities, traditional storytellers with modern video equipment, cultural preservation, photorealistic, high quality',
      page: 'Videos'
    }
  ];

  const generateAllImages = async () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Runware API key');
      return;
    }

    setIsGenerating(true);
    const runware = new RunwareService(apiKey);
    const results: GeneratedImage[] = [];

    try {
      for (const imageConfig of imagePrompts) {
        toast.info(`Generating ${imageConfig.name}...`);
        
        const result = await runware.generateImage({
          positivePrompt: imageConfig.prompt,
          model: "runware:100@1",
          numberResults: 1,
          outputFormat: "WEBP",
          CFGScale: 1,
          scheduler: "FlowMatchEulerDiscreteScheduler",
          strength: 0.8
        });

        results.push({
          ...result,
          positivePrompt: imageConfig.name
        });

        toast.success(`Generated ${imageConfig.name}`);
      }

      setGeneratedImages(results);
      toast.success('All images generated successfully!');
    } catch (error) {
      console.error('Error generating images:', error);
      toast.error('Failed to generate images. Please check your API key and try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadImage = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(url);
      toast.success(`Downloaded ${filename}`);
    } catch (error) {
      console.error('Error downloading image:', error);
      toast.error(`Failed to download ${filename}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-6 w-6" />
            SB8J-1 Hero Images Generator
          </CardTitle>
          <CardDescription>
            Generate custom indigenous and nature-themed images for all SB8J-1 hero sections using AI.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="apiKey" className="text-sm font-medium">
              Runware API Key
            </label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Enter your Runware API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Get your API key from{' '}
              <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                runware.ai
              </a>
            </p>
          </div>
          
          <Button 
            onClick={generateAllImages} 
            disabled={isGenerating || !apiKey.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Generating Images...
              </>
            ) : (
              <>
                <ImageIcon className="h-4 w-4 mr-2" />
                Generate All 10 Images
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {imagePrompts.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Image Prompts</CardTitle>
            <CardDescription>
              10 unique images will be generated for the SB8J-1 pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {imagePrompts.map((config, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{config.name}</h4>
                    <Badge variant="secondary">{config.page}</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{config.prompt}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {generatedImages.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Images</CardTitle>
            <CardDescription>
              Click download to save each image to your computer, then upload them to the assets folder.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {generatedImages.map((image, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={image.imageURL}
                      alt={image.positivePrompt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">{imagePrompts[index]?.name}</h4>
                    <Badge variant="outline">{imagePrompts[index]?.page}</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => downloadImage(image.imageURL, imagePrompts[index]?.name || `image-${index + 1}.webp`)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageGenerator;
