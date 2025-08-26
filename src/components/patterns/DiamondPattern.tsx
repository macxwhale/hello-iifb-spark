
import React from 'react';

interface DiamondPatternProps {
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
}

const DiamondPattern: React.FC<DiamondPatternProps> = ({ 
  color = '#D1D5DB', 
  opacity = 0.3,
  size = 120,
  className = 'absolute inset-0'
}) => {
  const patternId = `diamond-pattern-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`pointer-events-none ${className}`}>
      <svg width="100%" height="100%" className="w-full h-full overflow-hidden">
        <defs>
          <pattern id={patternId} x="0" y="0" width={size} height={size} patternUnits="userSpaceOnUse">
            <g opacity={opacity}>
              {/* Main diamond outline */}
              <path 
                d="M60,10 L110,60 L60,110 L10,60 Z" 
                fill="none" 
                stroke={color} 
                strokeWidth="2"
              />
              {/* Inner diamond */}
              <path 
                d="M60,30 L90,60 L60,90 L30,60 Z" 
                fill="none" 
                stroke={color} 
                strokeWidth="1.5"
              />
              {/* Horizontal lines within diamond */}
              <line x1="45" y1="45" x2="75" y2="45" stroke={color} strokeWidth="1"/>
              <line x1="45" y1="60" x2="75" y2="60" stroke={color} strokeWidth="1"/>
              <line x1="45" y1="75" x2="75" y2="75" stroke={color} strokeWidth="1"/>
              {/* Vertical lines within diamond */}
              <line x1="45" y1="45" x2="45" y2="75" stroke={color} strokeWidth="1"/>
              <line x1="60" y1="45" x2="60" y2="75" stroke={color} strokeWidth="1"/>
              <line x1="75" y1="45" x2="75" y2="75" stroke={color} strokeWidth="1"/>
              {/* Center small diamond */}
              <path 
                d="M60,52 L68,60 L60,68 L52,60 Z" 
                fill="none" 
                stroke={color} 
                strokeWidth="1"
              />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

export default DiamondPattern;
