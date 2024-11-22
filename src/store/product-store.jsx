import { create } from "zustand";
import { allPhoto, listPhoto, searchByTitle } from "../api/photo";

const photoStore = create((set) => ({

  
    products:[],
    loading: false,
    getProduct: async (count) => {
        set({loading: true})
        try {
            const resp = await listPhoto(count)
            console.log(resp)
            set({ products: resp.data.photos,loading: false })
        } catch (err) {
            console.log(err)
            set({loading: false})
        }
    },
    allPhotos: async () => {
        set({loading: true})
        try {
            const resp = await allPhoto()
            console.log(resp)
            set({ products: resp.data,loading: false })
        } catch (err) {
            console.log(err)
            set({loading: false})
        }
    },
  
    searchPhoto: async(text)=>{
        try {
             const resp = await searchByTitle(text)
             set({products: resp.data})
             console.log(resp)
        } catch (err) {
            console.log(err)
        }
    }
  




}))

export default photoStore
