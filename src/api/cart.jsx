import axios from "../config/axios";

export const addCart = async(token,cart)=> axios.post("/user/cart",cart,{
    headers:{
        // 'Content-Type': "multipart/form-data",
        Authorization: `Bearer ${token}`
    }
})