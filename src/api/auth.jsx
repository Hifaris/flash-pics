import axios from "../config/axios";


export const register = (form)=> axios.post('/auth/register',form)

export const login = (form)=> axios.post('/auth/login',form)

export const currentUser = (token)=> axios.post("/auth/current-user",{},{
    headers:{
        Authorization: `Bearer ${token}`
    }
})

