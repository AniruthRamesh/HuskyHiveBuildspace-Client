import { useLocation } from "react-router-dom";
import Reviews from "../../components/SingleGig/Reviews/Reviews";
import AboutSeller from "../../components/SingleGig/AboutSeller/AboutSeller";
import GigSideCard from "../../components/SingleGig/GigSideCard/GigSideCard";
import GigTitle from "../../components/SingleGig/GigTitle/GigTitle";
import AddReview from "../../components/SingleGig/AddReview/AddReview";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

const Gig = () => {
    const pageId = useLocation()
    const {pathname} = pageId
    const id = pathname.split("/")[2]
    
    const [data,setData] = useState({})
    const [user,setUser] = useState({})
    const [profile,setProfile] = useState({})

    const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;
    const HUSKY_API = `${API_BASE}/gigs/${id}`;
    
    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get(`${HUSKY_API}`)
            setData(response.data)
            const userName = response.data.userName;
            const HUSKY_API1 = `${API_BASE}/users/byUserName/${userName}`;
            getUserData(userName,HUSKY_API1);
        }

        const getUserData = async (userName,HUSKY_API1) => {
            const response = await axios.get(`${HUSKY_API1}`);
            setUser(response.data);
        }
        getData();

    },[])


    return ( 
        <div className="container">
            <div className="d-flex flex-wrap">

                <GigTitle data={data} user={user}/>
                <GigSideCard data={data}/>

            </div>

            <AboutSeller user={user}/>
        
            <AddReview/>
          <Reviews data={data}/>

        </div> 
    );
}
 
export default Gig;