import React from 'react'
import MainPhoto from "../assets/cat.jpg"
import cat1 from "../assets/cat1.jpg"
import cat2 from "../assets/cat2.jpg"
import cat3 from "../assets/cat3.jpg"
function Test() {
    return (
        <div>
           
            <main className="container mx-auto mt-8 px-6">
                <div className="flex justify-center mb-6">
                    <input type="text" placeholder="Cat" className="w-full max-w-2xl border border-gray-300 rounded-full py-2 px-4" />
                    <button className="bg-orange-600 text-white rounded-full px-4 ml-2">
                        Search Photo
                    </button>
                </div>
                <div className="flex justify-center mb-6">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full">Add To Cart</button>
                </div>
                <div className="flex justify-center mb-6 w-50 h-50">
                    <img src={MainPhoto} alt="Black cat lying on the floor" className="rounded-lg w-3/5" />
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className="text-gray-600">Photo Description</p>
                            <p className="text-gray-800 font-bold">Stock Photo id: 233445566</p>
                            <p className="text-gray-800 font-bold">Black Cat Lies On The Floor During The Day And Sleep</p>
                        </div>
                       
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-600">Related keywords <span className="text-blue-600">Show all</span></p>
                        <div className="flex flex-wrap space-x-2 mt-2">
                            {['Cat', 'Black', 'Sleep', 'Funny', 'Background', 'Floor', 'White', 'Animal', 'Rest', 'Relax', 'Pet', 'Cute', 'Kitty'].map(keyword => (
                                <span key={keyword} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm">{keyword}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-600 mb-2">Similar image</p>
                        <div className="flex space-x-4">
                            <img src={cat1} className="rounded-md w-60 h-40" />
                            <img src={cat2} alt="Similar image 2" className="rounded-md w-60 h-40"/>
                            <img src={cat3} alt="Similar image 3" className="rounded-md w-60 h-40" />
                        </div>
                    </div>
                </div>
            </main>
           
        </div>
    );
};

export default Test