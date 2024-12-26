import React, { useState } from "react";
import photoStore from "../store/product-store";

const SearchPhoto = () => {
  const searchPhoto = photoStore((state) => state.searchPhoto);
  const allPhoto = photoStore((state) => state.allPhotos);

  const [text, setText] = useState("");

  const handleSearch = async () => {
    try {
        if (text.trim()) {
            console.log("Searching for:", text);
            await searchPhoto({ query: text });
        } else {
            console.log("Loading all photos");
            await allPhoto();
        }
    } catch (error) {
        console.error("Search Error:", error);
    }
};

  return (
    <div className="flex justify-center mt-8">
      <div className="w-11/12 sm:w-2/3 flex">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          placeholder="Search photos here"
          className="border border-gray-300 p-2 w-full rounded-l-md focus:ring focus:ring-yellow-500 focus:outline-none"
        />
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-r-md flex items-center justify-center"
          onClick={handleSearch}
        >
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
