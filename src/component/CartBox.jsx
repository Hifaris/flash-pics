import React from 'react'

function CartBox({item,index,handleRemove}) {
  return (
    <div key={index} className="flex justify-between items-center mb-6 p-4 border-b border-gray-300">
  <div className="flex flex-col gap-2">
    <p className="text-lg font-medium text-gray-800">Photo Id: {item.photos.id}</p>
    <img
      src={item.photos.url}
      alt={`Image of ${item.id}`}
      className="w-28 h-28 rounded-lg object-cover shadow-md"
    />
  </div>
  <div className='flex flex-col items-end gap-4'>
    <p className='text-xl font-semibold text-orange-600'>{item.price} THB</p>
    <button onClick={() => handleRemove(item.photos.id)} className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition">
      Remove
    </button>
  </div>
</div>
  )
}

export default CartBox