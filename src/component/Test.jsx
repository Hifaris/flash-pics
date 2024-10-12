
import React from 'react';
import { useParams } from 'react-router-dom';
import {imageDetails} from '../assets/photoMock';
import cartStore from '../store/cart-store';


const PhotoDetail = () => {
const {addToCart} = cartStore()
  const { id } = useParams(); // Get the photo ID from the URL
  const selectedPhoto = imageDetails.find(photo => photo.id === id); // Find the photo by id


  if (!selectedPhoto) {
    return <p>Photo not found.</p>;
  }
  const handleAddToCart = () => {
    addToCart(selectedPhoto);
  };
  return (
    <div>
      <main className="container mx-auto mt-8 px-6">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Cat"
            className="w-full max-w-2xl border border-gray-300 rounded-full py-2 px-4"
          />
          <button className="bg-orange-600 text-white rounded-full px-4 ml-2">
            Search Photo
          </button>
        </div>
        <div className="flex justify-center mb-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
        <div className="flex justify-center mb-6">
          <img
            src={selectedPhoto.image}
            alt={selectedPhoto.title}
            className="rounded-lg w-2/6"
          />
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-800 font-bold">
                Stock Photo id: {selectedPhoto.id}
              </p>
              <p className="text-gray-800 font-semibold">
                {selectedPhoto.title}
              </p>
              <p>{selectedPhoto.description}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">
              Related keywords <span className="text-blue-600">Show all</span>
            </p>
            <div className="flex flex-wrap space-x-2 mt-2">
              {selectedPhoto.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-2">Similar image</p>
            <div className="flex space-x-4">
              {selectedPhoto.similarImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className="rounded-md w-60 h-40"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhotoDetail;