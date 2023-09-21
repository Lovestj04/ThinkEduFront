import axios from "axios";

const url = import.meta.env.VITE_URL_BACKEND;

console.log(url);

const instance = axios.create({

    baseURL: url ? url :"http://localhost:4000/api",
    timeout: 1000, 
    headers: ['content-type":"aplication/json']
}) ;


export default instance 