const photoStore = create((set) => ({
    products: [],
    loading: false,
    pagination: {
        page: 1,
        pageSize: 16,
        total: 0,
        totalPages: 0,
        query: "", // Added query to track search terms
    },
    
    searchPhoto: async ({ query, page = 1 }) => {
        const currentState = photoStore.getState(); // Get current state
        const { pageSize } = currentState.pagination;

        set({ loading: true });
        try {
            const resp = await searchByTitle({ query, page });
            set({
                products: resp.data.photos || resp.data,
                pagination: {
                    ...currentState.pagination,
                    page,
                    query,
                    total: resp.data.total || resp.data.length,
                    totalPages: Math.ceil((resp.data.total || resp.data.length) / pageSize),
                },
                loading: false,
            });
        } catch (err) {
            console.error(err);
            set({ loading: false });
        }
    },
}));
