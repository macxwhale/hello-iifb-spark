
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
              {/* Simple diamond outline only */}
              <path 
                d="M60,10 L110,60 L60,110 L10,60 Z" 
                fill="none" 
                stroke={color} 
                strokeWidth="2"
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
