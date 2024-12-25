import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Watermark } from "antd";
import { toast } from 'react-toastify';
import cartStore from '../store/cart-store';
import photoStore from '../store/product-store';
import useAuthStore from '../store/auth-store';
import { readPhotoDetail } from '../api/photo';
import { addCart } from '../api/cart';

const PhotoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const addToCart = cartStore((state) => state.addToCart);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (id) {
      readPhoto(id);
    }
  }, [id]);

  const readPhoto = async (photoId) => {
    try {
      const resp = await readPhotoDetail(photoId);
      setPhoto(resp.data.photo);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load photo details");
    }
  };

  const handleAddToCart = async (photoData) => {
    try {
      if (!user) {
        navigate("/login");
        return;
      }
      
      addToCart(photoData);
      const cart = cartStore.getState().carts;
      await addCart(token, cart);
      toast.success("Add photo to cart");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add to cart");
    }
  };

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <main className="container mx-auto mt-8 px-6">
        <div className="flex justify-center mb-6">
          <button 
            className="bg-blue-500 text-white py-2 px-6 rounded-full hover:scale-105" 
            onClick={() => handleAddToCart(photo)}
          >
            Add To Cart
          </button>
        </div>
        <div className="mb-6">
          <div className='w-2/6 mx-auto my-auto'>
            <Watermark content="Copy by Flash Pics" font={{fontSize: 16}}>
              <img
                src={photo.url}
                alt={photo.title}
                className="rounded-lg w-full mx-auto my-auto"
              />
            </Watermark>
          </div>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg flex justify-between w-3/5 mx-auto">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-gray-800 font-bold">
                  Flash Pics id: {photo.id}
                </p>
                <p className="text-gray-800 font-semibold">
                  {photo.title}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">
                Related keywords <span className="text-blue-600">Show all</span>
              </p>
            </div>
          </div>
          <div>
            <div>
              <h1 className='font-bold text-gray-800'>Category</h1>
              <p className='text-gray-800 font-medium'>{photo.category?.name}</p>
            </div>
            <div>
              <h1 className='font-bold text-gray-800'>Price</h1>
              <p className='text-gray-800 font-medium'>{photo.price}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhotoDetail;