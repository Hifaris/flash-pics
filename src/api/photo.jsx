import axios from "../config/axios";

export const createPhoto = async(token,form)=> axios.post("/photo",form,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const listPhoto = async(token,count)=> axios.get(`/photo/${count}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const allPhoto = async(token)=> axios.get("/photo",{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
