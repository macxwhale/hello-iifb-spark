
import React from 'react';

interface DiamondPatternProps {
  color?: string;
  opacity?: number;
  size?: number;
  className?: string;
}

const DiamondPattern: React.FC<DiamondPatternProps> = ({ 
  opacity = 0.3,
  className = 'absolute inset-0'
}) => {
  return (
    <div 
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <img 
        src="/lovable-uploads/8dd10b81-b80e-4374-86ec-6e10dd6fa1ab.png" 
        alt="Diamond pattern" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default DiamondPattern;
