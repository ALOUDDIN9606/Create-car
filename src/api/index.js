import axios from "axios";

const requeast  = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

requeast = inter