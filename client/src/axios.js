import axios from "axios";

export const makeRequest = axios.create({
    baseURL : "https://sociofy.onrender.com/api/",
    withCredentials: true ,
    credentials: "include"
}) 