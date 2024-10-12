import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { login, register } from "../api/auth";

const useAuthStore = create(persist((set)=>({
   user:null,
   token:null,
   actionRegister : async(form)=>{
    try {
        const resp = await register(form)
        console.log(resp)
    } catch (err) {
        console.log(err)
    }
   },
   actionLogin: async(form)=>{
    try {
        const resp = await login(form)
        console.log(resp.data.user)
        set({token: resp.data.token, user: resp.data.user})
        console.log(resp)
        return resp.data.user
    } catch (err) {
        console.log(err)
    }
   },
   actionLogout: async()=>{
    set({token: '',user: null})
   }
})))

export default useAuthStore