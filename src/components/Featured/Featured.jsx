import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./Featured.scss";
import Typical from 'react-typical';
import { profileThunk } from '../../services/auth/auth-thunk';
import {useEffect,useState} from "react"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Featured = () => {

  const currentUser = useSelector((state) => state.auth.user);
  const userName = currentUser ? currentUser.userName : null;

  useEffect(()=>{
    dispatch(profileThunk())
  },[])


  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleBuyButtonClick = () =>{
    navigate('/buyGigs');
  }

  const handleSellButtonClick = () =>{
    {userName ? 
          navigate('/createGigForm')
           :
            navigate('/login')
          
    }
    
  }



  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Buying, Selling, Searching for a temporary accomodation as a student got even easier.</h1>
          <div className="search">
            <div className="d-flex flex-row align-items-center searchInput">
              <div className="col custom-marker">
                <Typical className="custom-marker"
                  loop={Infinity}
                  wrapper='b'
                  steps={[
                    'Sell your tables',
                    4000,
                    'Sell your desk',
                    4000,
                    'Honestly Sell anything legal',
                    4000,
                    'Search Accomodation',
                    4000,
                    'Post here to sublet your apartment',
                    4000,
                    
                  ]}
                />
              </div>
              <div className="col">
                <img src="./Images/naruto.jpg" alt=""/>
              </div>
            </div>
          </div>
          <div className="popular mt-2">
            <span className="me-2">Popular:</span>
            <button className="btn btn-outline-success my-2 my-sm-0 me-1" onClick={handleBuyButtonClick}>Buy</button>
            <button className="btn btn-outline-success my-2 my-sm-0 me-1" onClick={handleSellButtonClick}>Sell</button>
            
          </div>
        </div>
        <div className="right">
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;