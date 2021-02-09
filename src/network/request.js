import axios from "axios";
const instance =axios.create({
  baseURL:'http://localhost:3000',
  timeout:5000
})
instance.interceptors.request.use(config => {
  return config
},error => {
  return error
})
instance.interceptors.response.use(res => {
  return res.data
},error => {
  return error
})
export function request(config){
  return instance(config)
}
