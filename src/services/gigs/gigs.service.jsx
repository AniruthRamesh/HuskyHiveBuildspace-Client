import axios from 'axios';
// const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;_A9;
// const TUITS_API = `${API_BASE}/tuits`;
const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;
const HUSKY_API = `${API_BASE}/gigs`;


export const createGig= async (gigs) => {
    const response = await axios.post(HUSKY_API, gigs)
    return response.data;
   }
   

export const findGigs = async () => {
    const response = await axios.get(HUSKY_API);
    const gigs = response.data;
    return gigs;
   }
   

   export const deleteGig = async (gid) => {
    const response = await axios
      .delete(`${HUSKY_API}/${gid}`)
    return response.data
  }
  

  export const findSingleGig = async (gigs) => {
    const response = await axios
      .get(`${HUSKY_API}/${gigs._id}`);
    return response.data;
  }
  