import React from 'react';
import MainPhoto from "../assets/cat.jpg"
import { useNavigate } from 'react-router-dom';


const ImageShow = () => {
  const navigate = useNavigate()

  const photo = [
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
    { name: "cat", image: MainPhoto},
   
  ];
   const hdlClick =()=>{
     navigate('/test')
   }
  return (
    <div>
                    <div className="container mx-auto px-4 py-8">
                        
                        <div className="mb-4">
                            <span className="font-bold">Related search:</span>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cat isolated</button>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cute cat</button>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cat and dog</button>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cat sitting</button>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Cat white background</button>
                            <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full ml-2">Happy cat</button>
                        </div>
                        <div className="flex justify-end mb-4">
                            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Sort by Relevance</button>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mb-8">

                          {
                              
                              photo.map((el)=>(

                                  <img src={el.image}  className="w-full h-auto rounded cursor-pointer" onClick={hdlClick}/>
                             
                                
                              ))

                          }
                           
                        </div>
                    
                    </div>
                    
                </div>
  );
};

export default ImageShow;
