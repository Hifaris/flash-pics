import React from 'react';

const RelatedSearches = () => {
  const searches = [
    'Cat isolated', 'Cute cat', 'Cat and dog', 'Cat sitting',
    'Cat white background', 'Happy cat'
  ];

  return (
    <div className="flex justify-center mt-4 space-x-4">
      {searches.map((search, index) => (
        <button
          key={index}
          className="bg-gray-200 px-4 py-1 rounded-full text-gray-600"
        >
          {search}
        </button>
      ))}
    </div>
  );
};

export default RelatedSearches;
