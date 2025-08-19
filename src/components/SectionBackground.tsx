
import React from 'react';
import GeometricPattern from './patterns/GeometricPattern';
import IndigenousPatterns from './patterns/IndigenousPatterns';

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
          divider: <IndigenousPatterns variant="border-diamond" color="hsl(var(--iifb-orange))" opacity={0.2} className="absolute top-0 left-0 right-0" />,
          edgePattern: <GeometricPattern variant="weave" color="hsl(var(--iifb-rust))" opacity={0.15} size={80} className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-40" />,
          contentClass: 'pl-8 sm:pl-12 md:pl-16'
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
          bgClass: 'bg-gradient-to-r from-iifb-sage/20 via-iifb-cream/40 to-iifb-sage/20',
          pattern: null,
          divider: null, // REMOVED BOTTOM PATTERN
          edgePattern: <IndigenousPatterns variant="stepped-diamond" color="hsl(var(--iifb-forest))" opacity={0.12} className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-40" />,
          contentClass: 'pl-8 sm:pl-12 md:pl-16'
        };
      
      case 'news':
        return {
          bgClass: 'bg-gradient-to-br from-iifb-orange/20 via-iifb-cream to-iifb-orange/30',
          pattern: null,
          divider: null, // REMOVED TOP PATTERN
          edgePattern: <GeometricPattern variant="spiral" color="hsl(var(--iifb-orange))" opacity={0.25} size={90} className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-48" />,
          contentClass: 'pr-8 sm:pr-12 md:pr-20'
        };
      
      case 'side-events':
        return {
          bgClass: 'bg-gradient-to-tr from-iifb-sage/30 via-iifb-cream/80 to-iifb-forest/20',
          pattern: null,
          divider: null,
          edgePattern: <IndigenousPatterns variant="geometric-border" color="hsl(var(--iifb-forest))" opacity={0.3} className="absolute left-0 top-0 bottom-0 w-12 transform rotate-90 origin-left" />,
          contentClass: 'pl-8 sm:pl-12 md:pl-20'
        };
      
      case 'resources':
        return {
          bgClass: 'bg-gradient-to-r from-iifb-rust/20 via-iifb-cream to-iifb-earth/25',
          pattern: null,
          divider: null,
          edgePattern: <GeometricPattern variant="zigzag" color="hsl(var(--iifb-rust))" opacity={0.20} size={110} className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-44" />,
          contentClass: 'pr-8 sm:pr-12 md:pr-16'
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
