import React from 'react';

const ImageShow = () => {
  const images = [
  
    
  
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img src={image} alt={`Cat ${index}`} className="w-full h-auto rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default ImageShow;
