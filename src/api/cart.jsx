import axios from "../config/axios";
import useAuthStore from "../store/auth-store";

export const addCart = async (token, cart) => {
    try {
      const response = await axios.post('/user/cart',
        { cart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export const getUserCart = async(token)=> axios.get("/user/cart",{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const deleteCart = async (token, photoId) => axios.delete(`/user/cart`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
export const saveOrder = async (token) => axios.post(`/user/order`,{}, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
export const getOrder = async (token) => axios.get(`/user/order`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
export const getOneOrder = async (token,id) => axios.get(`/user/user-order/${id}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
});
export const paymentStatus = async (token,id) => axios.patch(`/user/user-order/${id}`,{} ,{
    headers: {
        Authorization: `Bearer ${token}`
    }
});