import React from 'react'

function CartBox({item,index,handleRemove}) {
  return (
    <div key={index} className="flex justify-between items-center mb-4 p-4 border-b border-gray-200">
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">{item.name}</h2>
      <img
        src={item.image}
        className="w-24 h-24 rounded object-cover"
      />
    </div>
    <button onClick={() => handleRemove(item.id)} className="bg-white border border-sky-600 text-sky-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded">
      Remove
    </button>
  </div>
  )
}

export default CartBox