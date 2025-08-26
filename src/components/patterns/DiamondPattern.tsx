
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
              {/* Inner geometric pattern */}
              <path 
                d="M60,25 L95,60 L60,95 L25,60 Z" 
                fill="none" 
                stroke={color} 
                strokeWidth="1.5"
              />
              {/* Horizontal lines */}
              <line x1="35" y1="45" x2="85" y2="45" stroke={color} strokeWidth="1"/>
              <line x1="35" y1="60" x2="85" y2="60" stroke={color} strokeWidth="1"/>
              <line x1="35" y1="75" x2="85" y2="75" stroke={color} strokeWidth="1"/>
              {/* Vertical center elements */}
              <line x1="45" y1="35" x2="45" y2="85" stroke={color} strokeWidth="1"/>
              <line x1="60" y1="35" x2="60" y2="85" stroke={color} strokeWidth="1"/>
              <line x1="75" y1="35" x2="75" y2="85" stroke={color} strokeWidth="1"/>
              {/* Small diamond center */}
              <path 
                d="M60,50 L70,60 L60,70 L50,60 Z" 
                fill={color} 
                opacity="0.5"
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
