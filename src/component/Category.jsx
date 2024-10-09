import React from "react";




const categories = [
  { name: "Business", image:"https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzfGVufDB8fDB8fHww"},
  { name: "Animal", image:"https://images.unsplash.com/photo-1472491235688-bdc81a63246e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww" },
  { name: "Sea", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhfGVufDB8fDB8fHww" },
  { name: "Activity", image: "https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFjdGl2aXR5fGVufDB8fDB8fHww"},
  { name: "Mountain", image: "https://images.unsplash.com/photo-1447687643809-e05fd462f350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdXRhaW58ZW58MHx8MHx8fDA%3D" },
  { name: "AI/Tech", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Holiday", image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9saWRheXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Agriculture", image: "https://images.unsplash.com/photo-1477558716721-e28322f187c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFncmljdWx0dXJlfGVufDB8fDB8fHww" },
  { name: "Background", image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" },
];

const Categories = () => {
  return (
    <section className="p-8">
      <h2 className="text-center text-2xl font-bold mb-6">Popular Image Categories</h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="relative group">
            <img src={category.image} alt={category.name} className="w-[100%] h-48 object-cover rounded" />
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