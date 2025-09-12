import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const IndigenousArtGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const artworks = [
    {
      id: 1,
      src: "/lovable-uploads/b5f1ddc9-2378-4be9-ac3f-0d14e3249153.png",
      title: "Sacred Patterns",
      description: "Traditional geometric patterns representing the connection between earth and sky, used in ceremonial contexts and storytelling.",
      category: "traditional",
      alt: "Indigenous geometric art with earth tones and traditional patterns"
    },
    {
      id: 2,
      src: "/lovable-uploads/ec6e375b-657d-445c-9c03-e67802b1955d.png",
      title: "Cultural Heritage",
      description: "Contemporary interpretation of ancestral designs, bridging traditional knowledge with modern artistic expression.",
      category: "contemporary",
      alt: "Modern indigenous art incorporating traditional elements and symbolism"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Artworks' },
    { key: 'traditional', label: 'Traditional' },
    { key: 'contemporary', label: 'Contemporary' }
  ];

  const filteredArtworks = activeFilter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeFilter);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Indigenous Art & Culture
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore the rich artistic traditions that embody centuries of wisdom, 
            storytelling, and cultural heritage, celebrating the deep connection 
            between indigenous communities and the natural world.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                className="transition-all duration-300"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Art Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredArtworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-500 animate-fade-in"
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {artwork.description}
                </p>
                
                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {artwork.category === 'traditional' ? 'Traditional Heritage' : 'Contemporary Expression'}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Cultural Context */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Honoring Artistic Traditions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These artworks represent the profound connection between indigenous cultures 
              and biodiversity conservation. Each piece tells stories of ecological knowledge, 
              spiritual relationships with nature, and the importance of preserving both 
              cultural and biological diversity for future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndigenousArtGallery;