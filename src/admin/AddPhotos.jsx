import React, { useEffect, useRef, useState } from 'react'
import { image } from '../assets/photoMock'
import Keyword from './Keyword'
import categoryStore from '../store/category-store'
import useAuthStore from '../store/auth-store'
import { createPhoto } from '../api/photo'
import photoStore from '../store/product-store'
import UploadFile from './UploadFile'
import { toast } from 'react-toastify';



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
    //use FormData to send data to backend with other form multipart/form-data
console.log(form)
    const hdlSubmit = async (e)=>{
        e.preventDefault()
        console.log(form)

        if(!form.price){
            return toast.error('Please fill price')
        }

        if(Number(form.price) < 0){
          return toast.error("Price must more than 0")
        }
       
        const formData = new FormData()
        formData.append('file',form.file)
        formData.append("categoryId",form.categoryId)
        formData.append("title",form.title)
        formData.append("price",form.price)
        formData.append("userId",form.userId)
        formData.append("type",form.type)
        console.log(form.price)

        try {
                const resp = await createPhoto(token,formData)
                toast.success("add photo")

            // console.log(resp.data)

        } catch (err) {
            console.log(err)
            toast.error(" can not add photo")
        }
        setForm(initialState)
    }
    // console.log(formData)
    const fileInputRef = useRef(null)
  return (
    
    <div className="mt-4">
  
    <div className="flex px-5 w-full h-full">
        <div className="flex justify-center items-center w-2/4">
        
           <img src={form.previewPhoto} alt="" />
       
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
            {/* <Keyword/> */}
        
            <UploadFile setForm={setForm} form={form} ref={fileInputRef}/>
            <button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 w-2/3 mx-auto rounded">Submit</button>
        </form>
    </div>
</div>
  )
}

export default AddPhotos