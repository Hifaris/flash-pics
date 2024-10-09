import React from 'react';

const SearchPhoto = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="w-2/3 flex">
        <input
          type="text"
          placeholder="Cat"
          className="border border-gray-300 p-2 w-full rounded-l-md focus:ring focus:ring-yellow-500 focus:outline-none"
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-md flex items-center justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 111.414-1.414L21 21z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchPhoto;
