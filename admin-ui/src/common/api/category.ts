import { CATEGORY_API } from './api'
import { data } from '../../interface/category/index'

const getAll =async() => {
    const res = await CATEGORY_API.get("",{timeout:9000})
    return res.data
}

const save =async(data:data ) => {
    const res =await CATEGORY_API.post("",data,{
        timeout:9000
    })
    return res.data
}

const deleTe = async (id:string) => {
    const res = await CATEGORY_API.delete(`/${id}`,{timeout:9000})
    return res.data
}

const update = async (data:data,id:string) => {
    const res = await CATEGORY_API.put(`/${id}`,data,{timeout:9000})
    return res.data
}


export {
    getAll,
    save,
    deleTe,
    update
}