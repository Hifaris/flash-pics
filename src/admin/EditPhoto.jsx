import React, { useEffect, useState } from 'react'
import { image } from '../assets/photoMock'
import Keyword from './Keyword'
import categoryStore from '../store/category-store'
import useAuthStore from '../store/auth-store'
import { createPhoto, editPhotoDetail, readPhotoDetail } from '../api/photo'
import photoStore from '../store/product-store'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';





function EditPhoto() {
    const navigate = useNavigate()
    const location = useLocation()
    const token = useAuthStore((state)=> state.token)
    const user = useAuthStore((state)=> state.user)
    const getCategory = categoryStore((state)=> state.actionListCategory)
    const getPhoto = photoStore((state)=> state.getProduct)
    const categories = categoryStore((state)=> state.categories)
    const photos = photoStore((state)=> state.products)
    const {id} = useParams()
  
    const [photo,setPhoto]= useState([])
    const [form,setForm] = useState({
        title: "",
        price: "",
        categoryId:"",
        userId: +user.id
    })


    useEffect(()=>{
        getCategory(token)
        getPhoto(token,1)
        readPhoto(id)
    },[])

   
    const readPhoto = async(id)=>{
        try {
          
          const resp = await readPhotoDetail(id)
          console.log(resp.data)
          setForm(resp.data.photo)
          setPhoto(resp.data.photo)

        } catch (err) {
          console.log(err)
        }
      }

    const hdlOnChange = (e)=>{
        console.log(e.target.name, e.target.value)
        setForm({...form,[e.target.name]: e.target.value})
        
    }
   
    const hdlSubmit = async (e)=>{
        e.preventDefault()
        console.log(form)
        try {
            const resp = await editPhotoDetail(token,id,form)
            console.log(resp)
            toast.success("Edit successful")
        } catch (err) {
            console.log(err)
            toast.success("Can not edit photo")
        }
       navigate("/admin/allPhotos")
        // setForm(initialState)
    }
  return (
    <div className="mt-4">
  
    <div className="flex px-5">
        <div className=" mx-auto my-auto">
       
         <img
            src={form.url}
         
            className="rounded-lg w-[350px]"
          />
        </div>
        <form className="w-2/6 ml-4 bg-white p-4 rounded shadow-md flex flex-col" onSubmit={hdlSubmit}>
            <div className="mb-4">
                <label className="block mb-2">File Type</label>
                <select className="w-full p-2 border rounded">
                    <option>Photo</option>
                    <option>Vector</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Category</label>
                <select className="w-full p-2 border rounded" name='categoryId' onChange={hdlOnChange}  value={form.categoryId}>
                    <option value={photo.category?.id} disabled>{photo.category?.name}</option>
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
            <button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 w-2/3 mx-auto rounded">Save</button>
        </form>
    </div>
</div>
  )
}

export default EditPhoto