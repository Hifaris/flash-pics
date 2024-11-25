import React, { useEffect, useState } from "react";
import { getCategoryPhotos, homeCategory } from "../api/category";
import useAuthStore from "../store/auth-store";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const token = useAuthStore((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const resp = await homeCategory();
      setCategories(resp.data.allCategory);
    };
    fetchCategories();
  }, []);

  const hdlGetPhotoByCategory = async (id) => {
    try {
      const resp = await getCategoryPhotos(token, id);
      navigate(`/user/category/${id}`, { state: resp.data.result });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="p-4 md:p-8">
      <h2 className="text-center text-xl md:text-2xl font-bold mb-4 md:mb-6 opacity-70">
        Popular Image Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
        {categories.map((category) => (
          <div
            key={category.name}
            className="relative group cursor-pointer"
            onClick={() => hdlGetPhotoByCategory(category.id)}
          >
            <img
              src={category.url}
              alt={category.name}
              className="w-full h-40 md:h-60 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity">
              <h3 className="text-white text-sm md:text-lg font-bold">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
