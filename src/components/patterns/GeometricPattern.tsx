
import React from 'react';

interface GeometricPatternProps {
  variant: 'diamond' | 'zigzag' | 'spiral' | 'weave';
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
}

const GeometricPattern: React.FC<GeometricPatternProps> = ({ 
  variant, 
  color = 'currentColor', 
  opacity = 0.25,
  size = 60,
  className = 'absolute inset-0'
}) => {
  const patternId = `pattern-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  const renderPattern = () => {
    switch (variant) {
      case 'diamond':
        return (
          <svg width="100%" height="100%" className={`${className} overflow-hidden`}>
            <defs>
              <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
                <path 
                  d="M30,5 L55,30 L30,55 L5,30 Z M30,15 L45,30 L30,45 L15,30 Z" 
                  fill={color} 
                  opacity={opacity}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );
      
      case 'zigzag':
        return (
          <svg width="100%" height="100%" className={`${className} overflow-hidden`}>
            <defs>
              <pattern id={patternId} x="0" y="0" width={size * 2} height={size} patternUnits="userSpaceOnUse">
                <path 
                  d="M0,30 L15,15 L30,30 L45,15 L60,30 L75,15 L90,30 L105,15 L120,30 L105,45 L90,30 L75,45 L60,30 L45,45 L30,30 L15,45 L0,30" 
                  fill="none" 
                  stroke={color} 
                  strokeWidth="3" 
                  opacity={opacity}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );
      
      case 'spiral':
        return (
          <svg width="100%" height="100%" className={`${className} overflow-hidden`}>
            <defs>
              <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
                <path 
                  d="M30,10 Q50,15 45,35 Q40,50 20,45 Q5,40 10,25 Q15,15 25,20 Q35,25 30,35" 
                  fill="none" 
                  stroke={color} 
                  strokeWidth="2" 
                  opacity={opacity}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );
      
      case 'weave':
        return (
          <svg width="100%" height="100%" className={`${className} overflow-hidden`}>
            <defs>
              <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
                <g opacity={opacity}>
                  <rect x="0" y="20" width="60" height="6" fill={color} />
                  <rect x="20" y="0" width="6" height="60" fill={color} />
                  <rect x="34" y="0" width="6" height="60" fill={color} />
                  <rect x="0" y="34" width="60" height="6" fill={color} />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${patternId})`} />
          </svg>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="pointer-events-none">
      {renderPattern()}
    </div>
  );
};

export default GeometricPattern;
