import React, { useEffect, useState } from 'react';
import photoStore from '../store/product-store';
import useAuthStore from '../store/auth-store';
import { allPhoto } from '../api/photo';

const SearchPhoto = () => {
  const products = photoStore((state) => state.products)
  const getProduct = photoStore((state) => state.getProduct)
  const token = useAuthStore((state) => state.token)
  const searchPhoto = photoStore((state)=> state.searchPhoto)
  const allPhoto = photoStore((state)=> state.allPhotos)

  const [text, setText] = useState('')
  console.log(text)

//   useEffect(() => {
//     const time = setTimeout(async () => {
//         if (text) {
//             try {
//                 await searchPhoto({ query: text });
//             } catch (error) {
//                 console.error('Search Error: ', error);
//             }
//         } else {
//             allPhoto();  
//         }
//     }, 300);

//     return () => clearTimeout(time); 
// }, [text])
const handleSearch = async () => {
  if (text) {
      try {
          console.log('Searching for:', text);  
          await searchPhoto({ query: text });
      } catch (error) {
          console.error('Search Error: ', error);
      }
  } else {
      console.log("all photos");
      allPhoto();  
  }
};


  return (
    <div className="flex justify-center mt-8">
      <div className="w-2/3 flex">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
          placeholder="search photo here"
          className="border border-gray-300 p-2 w-full rounded-l-md focus:ring focus:ring-yellow-500 focus:outline-none"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md flex items-center justify-center" onClick={handleSearch}>
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
