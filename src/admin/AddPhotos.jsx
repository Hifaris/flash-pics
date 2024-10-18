import React, { useEffect, useRef, useState } from 'react'
import { image } from '../assets/photoMock'
import Keyword from './Keyword'
import categoryStore from '../store/category-store'
import useAuthStore from '../store/auth-store'
import { createPhoto } from '../api/photo'
import photoStore from '../store/product-store'
import UploadFile from './UploadFile'


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
        // url: "",
        type: "",
        price: "",
        categoryId: "",
        userId: +user.id,
        file: null,
        previewPhoto: null
    })
    const initialState={
        title: "",
        // url: "",
        price: "",
        type: "",
        categoryId: "",
        userId: user.id,
        file:null,
        previewPhoto:null
    }

    useEffect(()=>{
        getCategory(token)
        getPhoto(token,20)
    },[])
    // console.log(categories)
    // console.log(typeof(user.id))

    const hdlOnChange = (e)=>{
        // console.log(e.target.name, e.target.value)
        setForm({...form,[e.target.name]: e.target.value})
        
    }
console.log(form)
    const hdlSubmit = async (e)=>{
        e.preventDefault()
        console.log(form)
        const formData = new FormData()
        formData.append('file',form.file)
        formData.append("categoryId",form.categoryId)
        formData.append("title",form.title)
        formData.append("price",form.price)
        formData.append("userId",form.userId)
        formData.append("type",form.type)
        try {
            const resp = await createPhoto(token,formData)
            console.log(resp)
        } catch (err) {
            console.log(err)
        }
        setForm(initialState)
    }
    // console.log(formData)
    const fileInputRef = useRef(null)
  return (
    
    <div className="mt-4">
    {/* <div className="flex justify-center mb-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
    </div> */}
    <div className="flex px-5 w-full h-full">
        <div className="flex justify-center items-center w-2/4">
        
           <img src={form.previewPhoto} alt="" />
        {/* <input type="file" /> */}
        {/* {
             image.map((el)=>(

                 <img src={el.image} className="w-full h-auto rounded"/>
             ))
        } */}
        </div>
        <form className="w-3/6 ml-4 bg-white p-4 rounded shadow-md" encType='multipart/form-data' onSubmit={hdlSubmit}>
            <div className="mb-4">
                <label className="block mb-2">File Type</label>
                <select className="w-full p-2 border rounded" name='type' onChange={hdlOnChange} required value={form.type}>
                    <option disabled>Please Select</option>
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
            {/* <div className="mb-4">
                <label className="block mb-2">Url</label>
        
                <input type="text"className='w-full p-2 border rounded' name='url' value={form.url} onChange={hdlOnChange} />
            </div> */}

            {/* <div className="mb-4">
                <input type="file" />
            </div> */}
        
            <UploadFile setForm={setForm} form={form} ref={fileInputRef}/>
            <button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 w-2/3 mx-auto rounded">Submit</button>
        </form>
    </div>
</div>
  )
}

export default AddPhotos