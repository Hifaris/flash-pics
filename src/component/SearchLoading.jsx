import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
      {/* Spinner container */}
      <div className="relative w-16 h-16">
        {/* Outer circle */}
        <div className="absolute inset-0 border-4 border-orange-200 rounded-full animate-ping" />
        
        {/* Inner spinning circle */}
        <div className="absolute inset-0 border-4 border-t-orange-500 rounded-full animate-spin" />
      </div>
      
      {/* Loading text */}
      <p className="mt-4 text-gray-600 animate-pulse">Loading...</p>
    </div>
  );
};

export default Loading;