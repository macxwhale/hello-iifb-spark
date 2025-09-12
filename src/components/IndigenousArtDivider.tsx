import React from 'react';

interface IndigenousArtDividerProps {
  className?: string;
}

const IndigenousArtDivider: React.FC<IndigenousArtDividerProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-16 ${className}`}>
      {/* Central divider line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-iifb-orange/40 to-transparent transform -translate-y-1/2" />
      
      {/* Indigenous art accent elements */}
      <div className="absolute top-1/2 left-1/4 w-8 h-8 opacity-60 transform -translate-y-1/2 -translate-x-1/2">
        <div 
          className="w-full h-full rounded-full border-2 border-iifb-orange/50"
          style={{
            backgroundImage: "url('/src/assets/indigenous-art-1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      <div className="absolute top-1/2 right-1/4 w-6 h-6 opacity-50 transform -translate-y-1/2 translate-x-1/2">
        <div 
          className="w-full h-full rounded-full border border-iifb-orange/40"
          style={{
            backgroundImage: "url('/src/assets/indigenous-art-2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      {/* Central diamond accent */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-iifb-orange/30 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-sm" />
    </div>
  );
};

export default IndigenousArtDivider;