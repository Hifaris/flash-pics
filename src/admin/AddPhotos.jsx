import React, { useEffect, useState } from 'react'
import { image } from '../assets/photoMock'
import Keyword from './Keyword'
import categoryStore from '../store/category-store'
import useAuthStore from '../store/auth-store'
import { createPhoto } from '../api/photo'
import photoStore from '../store/product-store'


// const initialState={
//     title: " cat and dog",
//     url: "https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww",
//     price: 190,
//     categoryId: 1,
//     userId: 5
// }


function AddPhotos() {

    const token = useAuthStore((state)=> state.token)
    const user = useAuthStore((state)=> state.user)
    const getCategory = categoryStore((state)=> state.actionListCategory)
    const getPhoto = photoStore((state)=> state.getProduct)
    const categories = categoryStore((state)=> state.categories)
    const photos = photoStore((state)=> state.products)
    const [form,setForm] = useState({
        title: "",
        url: "",
        price: "",
        categoryId: "",
        userId: +user.id
    })
    const initialState={
        title: "",
        url: "",
        price: "",
        categoryId: "",
        userId: user.id
    }

    useEffect(()=>{
        getCategory(token)
        getPhoto(token,9)
    },[])
    // console.log(categories)
    console.log(typeof(user.id))

    const hdlOnChange = (e)=>{
        console.log(e.target.name, e.target.value)
        setForm({...form,[e.target.name]: e.target.value})
        
    }
    const hdlSubmit = async (e)=>{
        e.preventDefault()
        console.log(form)
        try {
            const resp = await createPhoto(token,form)
            console.log(resp)
        } catch (err) {
            console.log(err)
        }
        setForm(initialState)
    }
  return (
    
    <div className="mt-4">
    {/* <div className="flex justify-center mb-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
    </div> */}
    <div className="flex px-5">
        <div className="grid grid-cols-3 gap-4 w-4/6">
        {
             image.map((el)=>(

                 <img src={el.image} className="w-full h-auto rounded"/>
             ))
        }
        </div>
        <form className="w-2/6 ml-4 bg-white p-4 rounded shadow-md" onSubmit={hdlSubmit}>
            <div className="mb-4">
                <label className="block mb-2">File Type</label>
                <select className="w-full p-2 border rounded">
                    <option>Photo</option>
                    <option>Vector</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Category</label>
                <select className="w-full p-2 border rounded" name='categoryId' onChange={hdlOnChange} required value={form.categoryId}>
                    <option value="" disabled>Please select</option>
                    {
                        categories.map((el)=>(

                            <option value={el.id}>{el.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Title</label>
                <textarea className="w-full p-2 border rounded" rows="3" name='title' value={form.title} onChange={hdlOnChange}></textarea>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Price</label>
                {/* <textarea className="w-full p-2 border rounded" rows="3"></textarea> */}
                <input type="number"className='w-full p-2 border rounded' name='price' value={form.price} onChange={hdlOnChange} />
            </div>
            <Keyword/>
            <div className="mb-4">
                <label className="block mb-2">Url</label>
                {/* <textarea className="w-full p-2 border rounded" rows="3"></textarea> */}
                <input type="text"className='w-full p-2 border rounded' name='url' value={form.url} onChange={hdlOnChange} />
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
        </form>
    </div>
</div>
  )
}

export default AddPhotos