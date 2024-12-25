import { create } from "zustand";
import { allPhoto, listPhoto, searchByTitle } from "../api/photo";

const photoStore = create((set) => ({
    products: [],
    loading: false,
    pagination: {
        page: 1,
        pageSize: 16,
        total: 0,
        totalPages: 0
    },
    
    getProduct: async (page = 1, pageSize = 16) => {
        set({ loading: true });
        try {
            const resp = await listPhoto(page, pageSize);
            set({ 
                products: resp.data.photos,
                pagination: resp.data.pagination,
                loading: false 
            });
        } catch (err) {
            console.log(err);
            set({ loading: false });
        }
    },

    allPhotos: async () => {
        set({ loading: true });
        try {
            const resp = await allPhoto();
            set({ products: resp.data, loading: false });
        } catch (err) {
            console.log(err);
            set({ loading: false });
        }
    },
  
    searchPhoto: async (text) => {
        try {
            const resp = await searchByTitle(text);
            set({ products: resp.data });
        } catch (err) {
            console.log(err);
        }
    }
}));

export default photoStore;