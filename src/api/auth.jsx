import axios from "axios";


export const register = (form)=> axios.post('http://localhost:8890/auth/register',form)

export const login = (form)=> axios.post('http://localhost:8890/auth/login',form)

