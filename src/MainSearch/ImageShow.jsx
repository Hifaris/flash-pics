import React, { useEffect } from 'react';
import MainPhoto from "../assets/cat.jpg"
import { useNavigate } from 'react-router-dom';
import { image } from '../assets/photoMock';
import photoStore from '../store/product-store';
import useAuthStore from '../store/auth-store';
import { Watermark } from "antd";
import Loading from '../component/Loading';


const ImageShow = () => {

  const getProduct = photoStore((state)=>state.getProduct)
  const allPhoto = photoStore((state)=>state.allPhotos)
  const loading = photoStore((state)=>state.loading)
  const products = photoStore((state)=>state.products)
  const token = useAuthStore((state)=> state.token)
  const navigate = useNavigate()

  useEffect(()=>{
    getProduct(token,19)
    // allPhoto()
  },[])
  // console.log(products)

  const hdlClick = (item) => {
    navigate(`/user/photo/${item.id}`)
  }
  return (
    <div>
      <div className="container mx-auto px-4 py-8">

        <div className="mb-4">
          <span className="font-bold">Related search:</span>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cat isolated</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cute cat</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cat and dog</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cat sitting</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cat white background</button>
          <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Happy cat</button>
        </div>
        <div className="flex justify-end mb-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Sort by Relevance</button>
        </div>
        {
          loading
          ? <Loading/>
          : (<div className="grid grid-cols-4 gap-3 mb-8">
          
            {
  
              products?.map((el) => (
                  <div >
                <Watermark content="Copy by Flash Pics" font={{fontSize: 16,}}>
                  <img src={el.url} key={el.id}
                    className="w-full h-auto rounded cursor-pointer hover:scale-105 " onClick={() => hdlClick(el)} />
  
                </Watermark>
  
                  </div>
  
              ))
  
            }
  
          </div>)
        }
        

      </div>

    </div>
  );
};

export default ImageShow;
