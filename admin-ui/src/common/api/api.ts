import axios from 'axios'

const API = axios.create({
    baseURL:"http://localhost:4000/api/",
    timeout:5000
})

const MANUFACTURER_API = axios.create({
    baseURL:"http://localhost:4000/api/manufacturer",
})

export {
    MANUFACTURER_API
}

export default API