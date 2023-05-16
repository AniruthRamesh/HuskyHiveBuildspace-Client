import axios from 'axios';
// const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;_A9;
// const TUITS_API = `${API_BASE}/tuits`;
const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;
const HUSKY_API = `${API_BASE}/reviews`;


export const createReview= async (reviews) => {
    const response = await axios.post(HUSKY_API, reviews)
    return response.data;
   }
   

export const findReview = async (rid) => {
    const response = await axios.get(`${HUSKY_API}/${rid}`);
    const reviews = response.data;
    return reviews;
   }
   

   export const deleteReview = async (rid) => {
    const response = await axios
      .delete(`${HUSKY_API}/${rid}`)
    return response.data
  }

  