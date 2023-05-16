import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const AccomodationPost = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        accomodationType: "",
        location: "",
        availabilityPeriod: "",
        uniDistance: "",
        features: "",
        rent: "",
        contactNumber: "",
      });

      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;
      const HUSKY_API = `${API_BASE}/accomodation/newAccomodation`;
      const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${HUSKY_API}`,formData)
        console.log(response)
        if(response.status===201){
            navigate("/viewAccomodation")
        }
      };


    return ( 
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Add Listing</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="accomodationType" className="form-label">
                    Accomodation Type
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                    <ion-icon name="home-outline"></ion-icon>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="accomodationType"
                      name="accomodationType"
                      value={formData.accomodationType}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                    <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="availabilityPeriod" className="form-label">
                    Availability Period
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                    <ion-icon name="calendar-outline"></ion-icon>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="availabilityPeriod"
                      name="availabilityPeriod"
                      value={formData.availabilityPeriod}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="uniDistance" className="form-label">
                    Distance from University
                  </label>
                  <div className="input-group">
                    <div className="input-group-text">
                    <ion-icon name="walk-outline"></ion-icon>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="uniDistance"
                      name="uniDistance"
                      value={formData.uniDistance}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="features" className="form-label">
                        Features
                    </label>
                    <div className="input-group">
                        <div className="input-group-text">
                        <ion-icon name="list-outline"></ion-icon>
                        </div>
                        <textarea
                        className="form-control"
                        id="features"
                        name="features"
                        value={formData.features}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="rent" className="form-label">
                        Rent
                    </label>
                    <div className="input-group">
                        <div className="input-group-text">
                        <ion-icon name="cash-outline"></ion-icon>
                        </div>
                        <input
                        type="number"
                        className="form-control"
                        id="rent"
                        name="rent"
                        value={formData.rent}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">
                        Contact Number
                    </label>
                    <div className="input-group">
                        <div className="input-group-text">
                        <ion-icon name="call-outline"></ion-icon>
                        </div>
                        <input
                        type="number"
                        className="form-control"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary mt-3">
                        Submit
                    </button>
                    </div>
                    </form>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
     );
}
 
export default AccomodationPost;