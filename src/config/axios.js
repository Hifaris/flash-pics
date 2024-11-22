import axios from "axios";

axios.defaults.baseURL= process.env.VITE_API_URL

export default axios