import React from 'react';

const IndigenousArtStrip = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/081c59be-4485-4784-bbad-20d932375bbd.png"
              alt="Indigenous traditional art pattern"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/20e4bbb2-4b15-46ec-8792-889a784d8cb6.png"
              alt="Indigenous cultural artwork"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndigenousArtStrip;