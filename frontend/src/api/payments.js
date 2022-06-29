import axios from "axios";

const url="http://127.0.0.1:8000/api/payment/dj/"

export const getAll = ()=> axios.get(`${url}getall/`)
export const create = (payment)=> axios.post(`${url}create/`,payment)
export const update = (id,payment)=> axios.post(`${url}update/${id}/`,payment)
export const remove = (id)=> axios.post(`${url}delete/${id}/`)