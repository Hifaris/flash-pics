import React from "react";
import business from "../assets/business.jpg"
import animal from "../assets/animal.jpg"
import sea from "../assets/sea.jpg"
import activity from "../assets/activity.jpg"
import mountain from "../assets/moutain.jpg"
import tech from "../assets/tech.jpg"
import holiday from "../assets/holiday.jpg"
import agriculter from "../assets/agriculter.jpg"
import background from "../assets/background.jpg"



const categories = [
  { name: "Business", image:business },
  { name: "Animal", image:animal },
  { name: "Sea", image: sea },
  { name: "Activity", image: activity },
  { name: "Mountain", image: mountain },
  { name: "AI/Tech", image: tech },
  { name: "Holiday", image: holiday },
  { name: "Agriculture", image: agriculter },
  { name: "Background", image: background },
];

const Categories = () => {
  return (
    <section className="p-8">
      <h2 className="text-center text-2xl font-bold mb-6">Popular Image Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="relative group">
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover rounded" />
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