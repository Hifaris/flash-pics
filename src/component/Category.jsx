import React from "react";
import { categories } from "../assets/photoMock";


const Categories = () => {
  return (
    <section className="p-8">
      <h2 className="text-center text-2xl font-bold mb-6">Popular Image Categories</h2>
      <div className="grid grid-cols-3 gap-5">
        {categories.map((category) => (
          <div key={category.name} className="relative group">
            <img src={category.image} alt={category.name} className="w-[100%] h-60 object-cover rounded" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center">
              <h3 className="text-white text-lg font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;