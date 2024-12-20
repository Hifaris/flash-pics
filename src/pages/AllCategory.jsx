import React, { useEffect, useState } from "react";
import categoryStore from "../store/category-store"
import { getCategoryPhotos, homeCategory } from "../api/category";
import useAuthStore from "../store/auth-store";
import { useNavigate } from "react-router-dom";

function AllCategory() {
    
    const [categories, setCategories] = useState([])
    const [oneCategory, setOneCategory] = useState([])
    const token = useAuthStore((state) => state.token)
    const navigate = useNavigate()
  
    useEffect(() => {
      allCategory()
    }, [])
    const allCategory = async () => {
      const resp = await homeCategory()
      setCategories(resp.data.allCategory)
     
    }
    const hdlGetPhotoByCategory = async (id) => {
        try {
          const resp = await getCategoryPhotos(token,id)
          const category = resp.data.result
          navigate(`/user/category/${id}`,{state: category})
          console.log(category)
        } catch (err) {
          console.log(err)
    
        }
      }
  return (
    <div className="p-8">
    <h2 className="text-center text-2xl font-bold mb-6 opacity-70">All Image Categories</h2>
    <div className="grid grid-cols-1 gap-10 w-[600px] mx-auto mt-10 cursor-pointer">
      {categories.map((category) => (
        <div key={category.name} className="relative group" onClick={() => hdlGetPhotoByCategory(category.id)}>
          <img src={category.url} alt={category.name} className="w-[100%] h-60 object-cover rounded" />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center">
            <h3 className="text-white text-lg font-bold">{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default AllCategory