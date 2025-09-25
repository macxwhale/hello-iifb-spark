import React from 'react';

const IndigenousArtStrip = () => {
  return (
    <div className="py-0">
      <div className="w-full">
        <div className="flex justify-center items-center gap-0 opacity-90 w-full">
          <div className="flex-1">
            <img 
              src="/iifb-uploads/813a08a2-2c3b-4cf3-b6a6-df3107731953.png"
              alt="Indigenous traditional art pattern with vibrant geometric designs"
              className="w-full h-16 md:h-24 object-cover opacity-0 transition-opacity duration-500 ease-out"
              onLoad={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            />
          </div>
          <div className="flex-1">
            <img 
              src="/iifb-uploads/3d0d4606-04da-4e0b-bb7c-508ece4f97c2.png"
              alt="Indigenous cultural artwork with traditional motifs"
              className="w-full h-16 md:h-24 object-cover opacity-0 transition-opacity duration-500 ease-out"
              onLoad={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndigenousArtStrip;