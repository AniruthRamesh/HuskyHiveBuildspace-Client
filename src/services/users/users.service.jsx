import axios from 'axios';
// const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;_A9;
// const TUITS_API = `${API_BASE}/tuits`;
const API_BASE =import.meta.env.VITE_REACT_APP_API_BASE;
const HUSKY_API = `${API_BASE}/users`;
const api = axios.create({ withCredentials: true });

export const findUser = async (uid) => {
    const response = await api.get(`${HUSKY_API}/${uid}`);    
    const user = response.data;
    return user;
   }


export const updateUser = async ({data})=>{
    console.log(data)
    const response = await api.put(`${HUSKY_API}/${data.location}`,{data})
    const user = response.data;
    console.log(user)
    return user;
}