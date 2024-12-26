import { create } from "zustand";
import { allPhoto, listPhoto, searchByTitle } from "../api/photo";

const photoStore = create((set) => ({
    products: [],
    loading: false,
    pagination: {
        page: 1,
        pageSize: 16,
        total: 0,
        totalPages: 0,
        query: "", 
    },
    
    getProduct: async (page = 1, pageSize = 16) => {
        set({ loading: true });
        try {
          const resp = await listPhoto(page, pageSize);
          console.log("API Response:", resp.data); // Add this log
          set({ 
            products: resp.data.photos,
            pagination: resp.data.pagination,
            loading: false 
          });
          return resp; // Return the response
        } catch (err) {
          console.log(err);
          set({ loading: false });
          throw err;
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
  
    searchPhoto: async ({ query, page = 1 }) => {
        const currentState = photoStore.getState(); // Get the current state
        const { pageSize } = currentState.pagination; // Access the pageSize from pagination
    
        set({ loading: true });
        try {
            const resp = await searchByTitle({ query, page });
            set({
                products: resp.data.photos || resp.data,
                pagination: {
                    ...currentState.pagination, // Spread the existing pagination state
                    page,
                    query, // Save the search query
                    total: resp.data.total || resp.data.length,
                    totalPages: Math.ceil((resp.data.total || resp.data.length) / pageSize),
                },
                loading: false,
            });
        } catch (err) {
            console.error(err);
            set({ loading: false });
        }
    }
    
    
}));

export default photoStore;