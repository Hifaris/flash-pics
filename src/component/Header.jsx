import React from "react";
import mountain from "../assets/moutain.jpg"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const hdlClick = ()=>{
    navigate("/search")
}


  return (
    <section className="relative bg-cover bg-center h-96"  style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    }}>
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div className="flex gap-2">

        <h1 className="text-4xl font-bold">Transform Ideas into Images Faster With</h1><span className="text-4xl font-bold text-sky-600">Flash</span><span className="text-4xl font-bold text-orange-600">Pics</span>
        </div>
        <div className="mt-6">
          <input type="text" placeholder="Search for images" className="px-4 py-2 rounded-l-md" />
       
          <button className="bg-sky-600 px-4 py-2 rounded-r-md" onClick={hdlClick}>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Header;