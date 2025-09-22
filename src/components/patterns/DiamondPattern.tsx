
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
        src="/iifb-uploads/33329568-4604-4bf7-9b9f-0dd29e49dce6.png" 
        alt="Indigenous diamond pattern" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default DiamondPattern;
