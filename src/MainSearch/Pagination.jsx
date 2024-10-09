import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <button className="px-3 py-2 border">Previous</button>
      <button className="px-3 py-2 border">1</button>
      <button className="px-3 py-2 border bg-gray-300">2</button>
      <button className="px-3 py-2 border">3</button>
      <button className="px-3 py-2 border">Next</button>
    </div>
  );
};

export default Pagination;
