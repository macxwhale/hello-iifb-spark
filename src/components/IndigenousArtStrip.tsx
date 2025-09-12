import React from 'react';

const IndigenousArtStrip = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-90">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/813a08a2-2c3b-4cf3-b6a6-df3107731953.png"
              alt="Indigenous traditional art pattern with vibrant geometric designs"
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/3d0d4606-04da-4e0b-bb7c-508ece4f97c2.png"
              alt="Indigenous cultural artwork with traditional motifs"
              className="h-32 md:h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndigenousArtStrip;