import React from "react";
import mountain from "../assets/moutain.jpg"


const Header = () => {
  return (
    <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: mountain }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">Transform Ideas into Images Faster With Flash Pics</h1>
        <div className="mt-6">
          <input type="text" placeholder="Search for images" className="px-4 py-2 rounded-l-md" />
          <button className="bg-blue-500 px-4 py-2 rounded-r-md">Search</button>
        </div>
        <div className="mt-4">
          <button className="bg-yellow-500 px-4 py-2 rounded">Start Free Trial</button>
        </div>
      </div>
    </section>
  );
};

export default Header;