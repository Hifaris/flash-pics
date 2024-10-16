import axios from "../config/axios";

export const createPhoto = async(token,form)=> axios.post("/photo",form,{
    headers:{
        // 'Content-Type': "multipart/form-data",
        Authorization: `Bearer ${token}`
    }
})
export const listPhoto = async(token,count)=> axios.get(`/photo/${count}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})

export const allPhoto = async(text)=> axios.get("/photo",text)
export const editPhotoDetail = async(token,id,form)=> axios.patch(`/photo/${id}`,form,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const deletePhoto = async(token,id)=> axios.delete(`/photo/${id}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const readPhoto = async(token,id)=> axios.delete(`/photo/get/${id}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const readPhotoDetail = async(id)=> axios.get(`/photo/getphotodetail/${id}`)

export const searchByTitle = async(text)=> await axios.post('/photo/search',text)