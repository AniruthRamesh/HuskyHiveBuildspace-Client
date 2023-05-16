import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {profileThunk} from "../../services/auth/auth-thunk.js"
import { useSelector } from 'react-redux';

const CreateGigForm = () => {

  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.auth.user);

  useEffect(()=>{
    dispatch(profileThunk())
  },[])

  const navigate = useNavigate()
  const [pp, setPp] = useState(currentUser?currentUser.pp:'');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [cardDesc, setCardDesc] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState('');
  const [features, setFeatures] = useState('');
  const [file,setFile] = useState(null)

  const handleFileChange = (event)=>{
    setFile(event.target.files[0])
  }

  const handleUpload = async ()=>{
    if(!file){
      alert("No File uploaded")
      return
    }
    const data = new FormData()
    data.append("file",file)
    data.append("upload_preset","HuskyHive")
    try{
      const res = await axios.post("https://api.cloudinary.com/v1_1/deg4eenzi/image/upload",data)
      
      const {url} = res.data;
      setImages(url)

    }catch(err){
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/gigs', {
        projectCardImg:images,
        pp:pp,
        cat:"Selling",
        userName:currentUser.userName,
        title,
        desc,
        cardDesc,
        cardTitle,
        price,
        images,
        deliveryTime,
        features,
      });
      navigate("/buyGigs")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container  mt-4 mb-4">
      <form onSubmit={handleSubmit} className='mb-2 bg-light'>

    <div className="mb-3 me-5">
      <label htmlFor="title" className="form-label">
        Title:
      </label>
      <input
        type="text"
        className="form-control"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

    <div className="mb-3 me-5">
      <label htmlFor="desc" className="form-label">
        Description:
      </label>
      <textarea
        className="form-control"
        id="desc"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
    </div>

    <div className="mb-3 me-5">
      <label htmlFor="cardDesc" className="form-label">
        Card Description:
      </label>
      <textarea
        className="form-control"
        id="cardDesc"
        value={cardDesc}
        onChange={(e) => setCardDesc(e.target.value)}
      />
    </div>

    <div className="form-group me-5">
        <label htmlFor="cardTitle">Card Title:</label>
        <input
          type="text"
          id="cardTitle"
          className="form-control"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
      </div>

      <div className="mb-3 me-5">
    <label htmlFor="price" className="form-label">Price:</label>
    <input
      type="number"
      id="price"
      className="form-control"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
  </div>

  <div className="mb-3 me-5">
    <label htmlFor="images" className="form-label">Image:</label>
    <input
      type="file"
      id="images"
      className="form-control"
      onChange={handleFileChange}
    />
    <button type="button" className="btn btn-dark mt-2" onClick={handleUpload}>Upload</button>
  </div>
  <div className="mb-3 me-5">
    <label htmlFor="deliveryTime" className="form-label">Delivery Time:</label>
    <input
      type="number"
      id="deliveryTime"
      className="form-control"
      value={deliveryTime}
      onChange={(e) => setDeliveryTime(e.target.value)}
      multiple
    />
  </div>

  <div className="mb-3 me-5">
      <label htmlFor="features" className="form-label">
        Features
      </label>
      <textarea
        
        className="form-control"
        id="features"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
      />
    </div>


      <button type="submit" className='btn btn-outline-success my-2 my-sm-0'>Submit</button>
    </form>
    </div>
  );
};

export default CreateGigForm;