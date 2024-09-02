import axios, { AxiosInstance } from "axios" 

const baseURL = "http://localhost:4000/api"

const api = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000,
});

const setAuthToken = (token: string , api: AxiosInstance) => {
    if(token){
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }else{
        delete api.defaults.headers.common["Authorization"];
    }
};


export { setAuthToken };

export default api;