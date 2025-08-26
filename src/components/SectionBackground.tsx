
import React from 'react';

interface SectionBackgroundProps {
  children: React.ReactNode;
  variant: 'hero' | 'introduction' | 'events' | 'statements' | 'news' | 'side-events' | 'resources';
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
      
      case 'introduction':
        return {
          bgClass: 'bg-[#F2F1D5]',
          contentClass: ''
        };
      
      case 'events':
        return {
          bgClass: 'bg-gradient-to-br from-background via-muted/30 to-iifb-cream/50',
          contentClass: ''
        };
      
      case 'statements':
        return {
          bgClass: 'bg-[#F2F1D5]',
          contentClass: ''
        };
      
      case 'news':
        return {
          bgClass: 'bg-white',
          contentClass: ''
        };
      
      case 'side-events':
        return {
          bgClass: 'bg-[#F2F1D5]',
          contentClass: ''
        };
      
      case 'resources':
        return {
          bgClass: 'bg-white',
          contentClass: ''
        };
      
      default:
        return {
          bgClass: 'bg-background',
          contentClass: ''
        };
    }
  };

  const { bgClass, contentClass } = getBackgroundConfig();

  return (
    <div className={`relative ${bgClass} ${className} overflow-hidden`}>
      <div className={`relative z-10 ${contentClass}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionBackground;
