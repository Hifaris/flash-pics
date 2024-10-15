import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { login, register } from "../api/auth";
import { listPhoto } from "../api/photo";

const useAuthStore = create(persist((set)=>({
   user:null,
   token:null,
   products: [],
   actionRegister : async(form)=>{
    try {
        const resp = await register(form)
        console.log(resp.data)
    } catch (err) {
        const errMsg = err.response.data.message
        console.log(errMsg)
    }
   },
   actionLogin: async(form)=>{
    try {
        const resp = await login(form)
        console.log("userrr",resp.data.user)
        set({token: resp.data.token, user: resp.data.user})
        console.log(resp)
        return resp.data.user
    } catch (err) {
        console.log(err)
    }
   },
   actionLogout: async()=>{
    localStorage.clear()
    set({token: null,user: null})
   },
//    getProduct: async (token,count) => {
//     try {
//         const resp = await listPhoto(token,count)
//         set({ products: resp.data.photos })
//         console.log(resp)
//     } catch (err) {
//         console.log(err)
//     }
// },

}),{
    name: "user-store",
    storage: createJSONStorage(()=>localStorage)
}))

export default useAuthStore