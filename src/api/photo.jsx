import axios from "../config/axios";

export const createPhoto = async(token,form)=> axios.post("/photo",form,{
    headers:{
        // 'Content-Type': "multipart/form-data",
        Authorization: `Bearer ${token}`
    }
})
export const listPhoto = async (page = 1) => {
    return axios.get(`/photo/list`, {
        params: { 
            page,
            pageSize: 16  // Add pageSize parameter
        }
    });
};
export const allPhoto = async(text)=> axios.get("/photo",text)
export const editPhotoDetail = async(token,id,form)=> axios.patch(`/photo/${id}`,form,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const deletePhoto = async(token,id)=> axios.delete(`/photo/${id}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const readPhoto = async(id)=> axios.delete(`/photo/get/${id}`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
})
export const readPhotoDetail = (id) => 
    axios.get(`/photo/getphotodetail/${id}`);

export const searchByTitle = async(text)=> await axios.post('/photo/search',text)