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
  const user = useAuthStore((state)=> state.user)
  const allPhoto = photoStore((state)=>state.allPhotos)
  const loading = photoStore((state)=>state.loading)
  const products = photoStore((state)=>state.products)
  const token = useAuthStore((state)=> state.token)
  const navigate = useNavigate()

  useEffect(()=>{
    getProduct(19)
    // allPhoto()
  },[])
  // console.log(products)

  console.log("check role --->",user?.role)

  const hdlClick = (item) => {
    {
      user?.role ? navigate(`/user/photo/${item.id}`)
      : navigate(`/photo/${item.id}`)
    }
    
  }
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        {
          loading
          ? <Loading/>
          : (<div className="grid grid-cols-4 gap-3 mb-8 mt-5">
          
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
