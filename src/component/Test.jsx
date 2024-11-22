
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { imageDetails } from '../assets/photoMock';
import cartStore from '../store/cart-store';
import photoStore from '../store/product-store';
import useAuthStore from '../store/auth-store';
import { Watermark } from "antd";
import { readPhotoDetail } from '../api/photo';
import { addCart } from '../api/cart';
import { toast } from 'react-toastify';



const PhotoDetail = () => {
  
  
  
  const location = useLocation()
  const getProduct = photoStore((state) => state.getProduct)
  const products = photoStore((state) => state.products)
  const allPhoto = photoStore((state)=> state.allPhotos)
  const token = useAuthStore((state) => state.token)
  const addToCart = cartStore((state)=>state.addToCart)
  const user = useAuthStore((state)=>state.user)
  const [photo, setPhoto]= useState([])
  const navigate = useNavigate()

  // const [cart,setCart] =({id:"",price:""})
   



  useEffect(() => {
   
    allPhoto()
    readPhoto(id)
  }, [])
  console.log("ppppp",products)
  // const { addToCart } = cartStore()
  const { id } = useParams(); // Get the photo ID from the URL
  // const selectedPhoto = imageDetails.map(photo => photo.id === id); // Find the photo by id

  // console.log("ddddd",selectedPhoto)

  const readPhoto = async(id)=>{
    try {
      
      const resp = await readPhotoDetail(id)
      console.log(resp.data)
      setPhoto(resp.data.photo)

    } catch (err) {
      console.log(err)
    }
  }
  console.log(photo)
 
  const handleAddToCart = async (photo) => {
    try {
      if(!user){
        navigate("/login")
      }else{
        addToCart(photo); 
        const cart = cartStore.getState().carts
        await addCart(token,cart)
        toast.success("Add photo to cart")
      }
    } catch (err) {
      console.error(err);
    }
  };


 
  return (
    <div>
      <main className="container mx-auto mt-8 px-6">
      
        <div className="flex justify-center mb-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:scale-105" onClick={()=>handleAddToCart(photo)}>
            Add To Cart
          </button>
        </div>
        <div className="mb-6">
          <div className='w-2/6 mx-auto my-auto'>

          <Watermark content="Copy by Flash Pics" font={{fontSize: 16,}}>
          
          <img
            src={photo.url}
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
            {/* <div className="flex flex-wrap space-x-2 mt-2">
              {selectedPhoto.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div> */}
          </div>
          {/* <div>
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
          </div> */}
          </div>
          <div>
            <div>
              <h1  className='font-bold text-gray-800'>Category</h1>
              <p className='text-gray-800 font-medium'>{photo.category?.name}</p>
            </div>
            <div>
            <h1  className='font-bold text-gray-800'>Price</h1>
            <p className=' text-gray-800 font-medium'>{photo.price}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PhotoDetail;
