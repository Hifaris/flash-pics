import axios from "../config/axios";


export const register = (form)=> axios.post('/auth/register',form)

export const login = (form)=> axios.post('/auth/login',form)

export const currentUser = async (token)=> await axios.post("/auth/current-user",{},{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const updateUser = async (token,form)=> await axios.patch("/auth/update",form,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})

export const currentAdmin = async(token)=> await axios.post("/auth/current-admin",{},{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
