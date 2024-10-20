import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import _ from "lodash";

// src/store.js

const cartStore = create((set,get) => ({
  carts: [],
  addToCart:(photo)=>{
    const carts = get().carts
    const updateCart = [...carts,{...photo}]

    const uniqe = _.unionWith(updateCart,_.isEqual)
    // console.log("this is cart",updateCart)
    // console.log("this is uniqe",uniqe)

    set({carts:uniqe})


  },
  totalPrice: ()=>{
      return get().carts.reduce((acc,prv)=>{
        return acc + prv.price
      },0)
  },
  removeFromCart: (id) => set((state) => ({
    carts: state.carts.filter(item => item.id !== id),
  })),
  clearCart: () => set({ carts: [] }),
  
}));

export default cartStore;
