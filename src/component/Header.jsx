import React, { useState } from "react";
import mountain from "../assets/moutain.jpg"
import { useNavigate } from 'react-router-dom'
import photoStore from "../store/product-store";

// import { Button } from "@/components/ui/button"



const Header = () => {
  const navigate = useNavigate()
  const searchPhoto = photoStore((state)=> state.searchPhoto)
  const allPhoto = photoStore((state)=> state.allPhotos)






const hdlShowAllPhoto = async()=>{
  try {
    
    const resp = await allPhoto()
    console.log(resp)
    navigate("search")
  } catch (err) {
    console.log(err)
  }
}


  return (
    <section className="relative bg-cover bg-center h-96"  style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    }}>
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="flex gap-2">

        <h1 className="text-4xl font-bold">Transform Ideas into Images Faster With</h1><span className="text-4xl font-bold text-sky-500">Flash</span><span className="text-4xl font-bold text-orange-600">Pics</span>
        </div>
        <div className="flex w-3/5 justify-center items-center gap-4">

        <button className="bg-sky-600 px-4 py-2 rounded mt-6 scale-105" onClick={hdlShowAllPhoto} >Explore All Photos here</button>
       

          
      
  
        </div>
      </div>
    </section>
  );
};

export default Header;