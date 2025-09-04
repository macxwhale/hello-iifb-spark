
import React from 'react';

interface IndigenousPatternsProps {
  variant: 'border-diamond' | 'stepped-diamond' | 'geometric-border' | 'tribal-weave';
  color?: string;
  opacity?: number;
  className?: string;
}

const IndigenousPatterns: React.FC<IndigenousPatternsProps> = ({ 
  variant, 
  color = 'hsl(var(--iifb-orange))', 
  opacity = 0.3,
  className = ''
}) => {
  const patternId = `indigenous-pattern-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  const renderPattern = () => {
    switch (variant) {
      case 'border-diamond':
        return (
          <div className={`w-full h-16 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 400 64" preserveAspectRatio="none">
              <defs>
                <pattern id={patternId} x="0" y="0" width="80" height="64" patternUnits="userSpaceOnUse">
                  <path 
                    d="M40,8 L72,32 L40,56 L8,32 Z M40,16 L60,32 L40,48 L20,32 Z" 
                    fill={color} 
                    opacity={opacity}
                  />
                </pattern>
              </defs>
              <rect width="100%" height="8" fill={color} opacity={opacity * 0.8} />
              <rect y="8" width="100%" height="48" fill={`url(#${patternId})`} />
              <rect y="56" width="100%" height="8" fill={color} opacity={opacity * 0.8} />
            </svg>
          </div>
        );

      case 'stepped-diamond':
        return (
          <div className={`${className} pointer-events-none overflow-hidden`}>
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern id={patternId} x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <path d="M60,20 L100,60 L60,100 L20,60 Z" fill="none" stroke={color} strokeWidth="2"/>
                    <path d="M60,30 L90,60 L60,90 L30,60 Z" fill="none" stroke={color} strokeWidth="2"/>
                    <path d="M60,40 L80,60 L60,80 L40,60 Z" fill="none" stroke={color} strokeWidth="2"/>
                    <rect x="58" y="58" width="4" height="4" fill={color}/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      case 'geometric-border':
        return (
          <div className={`w-full h-12 ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 800 48" preserveAspectRatio="none">
              <defs>
                <pattern id={patternId} x="0" y="0" width="100" height="48" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <path d="M0,24 L12,12 L25,24 L37,12 L50,24 L63,12 L75,24 L88,12 L100,24" 
                          fill="none" stroke={color} strokeWidth="3"/>
                    <path d="M0,24 L12,36 L25,24 L37,36 L50,24 L63,36 L75,24 L88,36 L100,24" 
                          fill="none" stroke={color} strokeWidth="3"/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      case 'tribal-weave':
        return (
          <div className={`${className} pointer-events-none overflow-hidden`}>
            <svg width="100%" height="100%" className="w-full h-full">
              <defs>
                <pattern id={patternId} x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <g opacity={opacity}>
                    <rect x="20" y="0" width="4" height="60" fill={color}/>
                    <rect x="36" y="0" width="4" height="60" fill={color}/>
                    <rect x="0" y="20" width="60" height="4" fill={color}/>
                    <rect x="0" y="36" width="60" height="4" fill={color}/>
                    <circle cx="30" cy="30" r="3" fill={color}/>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#${patternId})`} />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return renderPattern();
};

export default IndigenousPatterns;
