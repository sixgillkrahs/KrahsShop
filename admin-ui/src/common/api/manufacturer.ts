import { MANUFACTURER_API } from './api'
import { data } from '../../interface/manufacturer/index'


const getall = async () => {
    const res = await MANUFACTURER_API.get("",{timeout:9000})
    return res.data
}

const save = async (data:data) => {
    const res = await MANUFACTURER_API.post("",data,{timeout:9000})
    return res.data
}

const getById = async(id:string) => {
    const res = await MANUFACTURER_API.get(`/${id}`,{timeout:9000})
    return res.data
}

const update = async(id:string,data:data) => {
    const res = await MANUFACTURER_API.put(`/${id}`,data,{timeout:9000})
    return res.data
}

const deleTe =async (id:string) => {
    const res = await MANUFACTURER_API.delete(`/${id}`,{timeout:9000})
    return res.data
}

const getByCode = async(code :string) => {
    const res = await MANUFACTURER_API.get(`/code/${code}`,{timeout:9000})
    return res.data
}


export {
    getall,
    save,
    getById,
    update,
    deleTe,
    getByCode
}