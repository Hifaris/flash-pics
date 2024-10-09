import React from 'react';

const Photo = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="bg-white shadow-md p-4 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Name</th>
              <th className="text-left p-2">Price</th>
              <th className="text-left p-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Product 1</td>
              <td className="p-2">$100</td>
              <td className="p-2">In Stock</td>
            </tr>
            {/* More product rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Photo;
