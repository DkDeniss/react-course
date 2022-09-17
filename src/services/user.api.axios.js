import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/',
})
const getUsersAxios = () => {
  return axiosInstance.get()
}
const getUserAxios = () => { return axiosInstance.get('/') }
export {getUserAxios, getUsersAxios}