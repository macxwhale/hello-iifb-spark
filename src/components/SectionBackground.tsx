
import React from 'react';
import GeometricPattern from './patterns/GeometricPattern';
import IndigenousPatterns from './patterns/IndigenousPatterns';
import DiamondPattern from './patterns/DiamondPattern';

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
          pattern: null,
          divider: null,
          edgePattern: null,
          contentClass: ''
        };
      
      case 'introduction':
        return {
          bgClass: 'bg-[#F2F1D5]',
          pattern: null,
          divider: null,
          edgePattern: null,
          contentClass: ''
        };
      
      case 'events':
        return {
          bgClass: 'bg-gradient-to-br from-background via-muted/30 to-iifb-cream/50',
          pattern: null,
          divider: null,
          edgePattern: null,
          contentClass: ''
        };
      
      case 'statements':
        return {
          bgClass: 'bg-[#F2F1D5]',
          pattern: null,
          divider: null,
          edgePattern: <DiamondPattern color="#D1D5DB" opacity={0.3} size={120} className="absolute left-0 top-0 bottom-0 w-32 sm:w-40 md:w-48" />,
          contentClass: 'pl-8 sm:pl-12 md:pl-16'
        };
      
      case 'news':
        return {
          bgClass: 'bg-white',
          pattern: null,
          divider: null,
          edgePattern: null,
          contentClass: ''
        };
      
      case 'side-events':
        return {
          bgClass: 'bg-[#F2F1D5]',
          pattern: null,
          divider: null,
          edgePattern: null,
          contentClass: ''
        };
      
      case 'resources':
        return {
          bgClass: 'bg-white',
          pattern: null,
          divider: null,
          edgePattern: null,
          contentClass: ''
        };
      
      default:
        return {
          bgClass: 'bg-background',
          pattern: null,
          divider: null,
          edgePattern: null,
          contentClass: ''
        };
    }
  };

  const { bgClass, pattern, divider, edgePattern, contentClass } = getBackgroundConfig();

  return (
    <div className={`relative ${bgClass} ${className} overflow-hidden`}>
      {pattern}
      {divider}
      {edgePattern}
      <div className={`relative z-10 ${contentClass}`}>
        {children}
      </div>
    </div>
  );
};

export default SectionBackground;
