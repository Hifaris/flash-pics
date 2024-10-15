import { create } from "zustand";
import { listPhoto } from "../api/photo";

const photoStore = create((set) => ({

  
    products:[],
    getProduct: async (token,count) => {
        try {
            const resp = await listPhoto(token,count)
            set({ products: resp.data.photos })
            // console.log(resp)
        } catch (err) {
            console.log(err)
        }
    },
  




}))

export default photoStore
