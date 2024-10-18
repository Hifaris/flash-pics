import axios from "../config/axios";



export const createCategory = async(token,form)=> axios.post("/category",form,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const listCategory = async(token)=> axios.get("/category",{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const deleteCategory = async(token,id)=> axios.delete("/category/"+id,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const getCategoryPhotos = async(token,id)=> axios.get("/category/"+id,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const homeCategory = async()=> await axios.get("/category/home")

