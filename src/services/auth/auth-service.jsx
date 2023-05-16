import axios from  "axios"
const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;

const SERVER_API_URL = `${API_BASE}/auth`;

const api = axios.create({ withCredentials: true });


export const login = async ({ userName, password }) => {
  console.log("servuce")
    try {
        const response = await axios.post(`${SERVER_API_URL}/login`, {
          userName,
          password,
        }, { withCredentials: true });
        const user = response.data;
        console.log(user)
        return user;
        
      } catch (error) {
        throw error.response.data;
      }
    
   };
   
   export const register = async ({ username,email, password }) => {
    const response = await api.post(`${SERVER_API_URL}/register`, {
      username,
      password,
    });
    const user = response.data;
    return user;
   };

   export const logout = async () => {
    const response = await api.post(`${SERVER_API_URL}/logout`);
    const user = response.data;
    return user;
   };

   export const profile = async () => {
    const response = await api.get(`${SERVER_API_URL}/profile`);
    const user = response.data;
    return user;
   };
