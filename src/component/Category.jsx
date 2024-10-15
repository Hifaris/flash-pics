import React, { useEffect, useState } from "react";
import categoryStore from "../store/category-store"
import { homeCategory } from "../api/category";
// import { categories } from "../assets/photoMock";




const Categories = () => {
  const [categories,setCategories] = useState([])
 
  useEffect(() => {
    allCategory()
  }, [])
  const allCategory = async()=>{
    const resp = await homeCategory()
    setCategories(resp.data.allCategory)
  }

  return (
    <section className="p-8">
      <h2 className="text-center text-2xl font-bold mb-6 opacity-70">Popular Image Categories</h2>
      <div className="grid grid-cols-3 gap-5">
        {categories.map((category) => (
          <div key={category.name} className="relative group">
            <img src="https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww" alt={category.name} className="w-[100%] h-60 object-cover rounded" />
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