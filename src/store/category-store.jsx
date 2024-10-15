import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createCategory, deleteCategory, listCategory } from "../api/category";
import useAuthStore from "./auth-store";


const categoryStore = create((set) => ({

    categories: [],
    products:[],
    actionCreateCategory: async (token, form) => {
        try {
            const resp = await createCategory(token, form)
            console.log(resp.data.msg)
        } catch (err) {
            const errMsg = err.response.data.message
            console.log(errMsg)
        }
    },
    actionListCategory: async (token) => {
        try {
            const resp = await listCategory(token)
            // console.log("cateee",resp.data.result)
            //      set(state => ({
            //         categories : [...state.categories,{...resp.data.result},]
            // }))
            set({ categories: resp.data.allCategory })
        } catch (err) {
            console.log(err)
        }
    },
    actionRemove: async(token,id)=>{
        try {
            const resp = await deleteCategory(token,id)
            console.log(resp.data.msg)
        } catch (err) {
            console.log(err)
        }
    },
    
  




}))

export default categoryStore

