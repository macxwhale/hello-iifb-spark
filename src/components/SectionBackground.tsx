
import React from 'react';

interface SectionBackgroundProps {
  children: React.ReactNode;
  variant: 'hero' | 'art-strip' | 'introduction' | 'meetings' | 'events' | 'statements' | 'news' | 'side-events' | 'resources' | 'calendar';
  className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ children, variant, className = '' }) => {
  const getBackgroundConfig = () => {
    switch (variant) {
      case 'hero':
        return {
          bgClass: 'bg-gradient-to-br from-iifb-rust via-iifb-earth to-iifb-forest',
          contentClass: ''
        };
      
      case 'art-strip':
        return {
          bgClass: 'bg-gradient-to-r from-iifb-cream/30 via-iifb-earth/20 to-iifb-cream/30',
          contentClass: ''
        };
      
      case 'introduction':
        return {
          bgClass: 'bg-[#F2F1D5]',
          contentClass: ''
        };
      
      case 'meetings':
        return {
          bgClass: 'bg-white relative',
          contentClass: '',
          hasTexture: true
        };
      
      case 'events':
        return {
          bgClass: 'bg-gradient-to-br from-background via-muted/30 to-iifb-cream/50',
          contentClass: '',
          hasTexture: true
        };
      
      case 'statements':
        return {
          bgClass: 'bg-[#F2F1D5]',
          contentClass: ''
        };
      
      case 'news':
        return {
          bgClass: 'bg-white relative',
          contentClass: '',
          hasTexture: true
        };
      
      case 'side-events':
        return {
          bgClass: 'bg-[#F2F1D5]',
          contentClass: ''
        };
      
      case 'resources':
        return {
          bgClass: 'bg-white relative',
          contentClass: '',
          hasTexture: true
        };
      
      case 'calendar':
        return {
          bgClass: 'bg-white relative',
          contentClass: '',
          hasTexture: true
        };
      
      default:
        return {
          bgClass: 'bg-background',
          contentClass: ''
        };
    }
  };

  const { bgClass, contentClass, hasTexture } = getBackgroundConfig();

  return (
    <div className={`relative ${bgClass} ${className} overflow-hidden`}>
      {hasTexture && (
        <div 
          className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/src/assets/textura-5.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}
        />
      )}
      {/* Geometric pattern for white background sections */}
      {(variant === 'meetings' || variant === 'news' || variant === 'resources' || variant === 'calendar') && (
        <div 
          className="absolute top-0 left-0 w-48 h-48 opacity-10 pointer-events-none"
          style={{
            backgroundImage: "url('/lovable-uploads/7d105940-0611-46f4-bf33-ba287a0243de.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}
        />
      )}
      {/* Indigenous pattern edge decoration */}
      <div 
        className="absolute top-0 left-0 w-8 h-full opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('/lovable-uploads/8d28fb8f-5581-4b60-9bcf-e86cc3b228cb.png')",
          backgroundRepeat: 'repeat-y',
          backgroundSize: '32px auto'
        }}
      />
      <div 
        className="absolute top-0 right-0 w-8 h-full opacity-60 pointer-events-none"
        style={{
          backgroundImage: "url('/lovable-uploads/8d28fb8f-5581-4b60-9bcf-e86cc3b228cb.png')",
          backgroundRepeat: 'repeat-y',
          backgroundSize: '32px auto'
        }}
      />
      <div className={`relative z-10 ${contentClass}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionBackground;
