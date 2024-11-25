import React from "react";
import { useNavigate } from "react-router-dom";
import photoStore from "../store/product-store";

const Header = () => {
  const navigate = useNavigate();
  const allPhoto = photoStore((state) => state.allPhotos);

  const hdlShowAllPhoto = async () => {
    try {
      await allPhoto();
      navigate("search");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center h-72 md:h-96"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Transform Ideas into Images Faster With{" "}
          <span className="text-sky-500">Flash</span>
          <span className="text-orange-600">Pics</span>
        </h1>
        <button
          className="bg-sky-600 px-4 py-2 rounded mt-4 hover:bg-sky-500 transition-transform scale-105"
          onClick={hdlShowAllPhoto}
        >
          Explore All Photos here
        </button>
      </div>
    </section>
  );
};

export default Header;
