import React from 'react'
import { image } from '../assets/photoMock'
import Keyword from './Keyword'
function AddPhotos() {
  return (
    <div className="mt-4">
    <div className="flex justify-center mb-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Submit 1 File</button>
    </div>
    <div className="flex">
        <div className="grid grid-cols-3 gap-4 w-2/3">
        {
             image.map((el)=>(

                 <img src={el.image} className="w-full h-auto rounded"/>
             ))
        }
        </div>
        <div className="w-1/3 ml-4 bg-white p-4 rounded shadow-md">
            <div className="mb-4">
                <label className="block mb-2">File Type</label>
                <select className="w-full p-2 border rounded">
                    <option>Photo</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Category</label>
                <select className="w-full p-2 border rounded">
                    <option>Animal</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Title</label>
                <textarea className="w-full p-2 border rounded" rows="3"></textarea>
            </div>
            <Keyword/>
        </div>
    </div>
</div>
  )
}

export default AddPhotos