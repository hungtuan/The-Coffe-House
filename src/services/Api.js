import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api/',
  timeout: 60000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export const getMenu = () => instance.get('v2/menu')
export const getAllStores = () => instance.get('get_all_store')
export const Login = (params) => instance.post('verify_mobile', params)
export const verifyPhone = () => instance.get('verify_mobile')
