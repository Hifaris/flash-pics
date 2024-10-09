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
        console.log(resp)
    } catch (err) {
        console.log(err)
    }
   }
})))

export default useAuthStore