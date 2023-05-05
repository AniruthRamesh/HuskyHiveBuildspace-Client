import axios from "axios";
import { useState, useEffect } from "react";

const AccommodationCard = ({ accommodation }) => {
  const {
    accomodationType,
    location,
    availabilityPeriod,
    uniDistance,
    features,
    rent,
    contactNumber,
  } = accommodation;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-4">
          <b>Accommodation Type:</b> {accomodationType}
        </h5>
                        
        <p className="card-text">
          <b>Location:</b> {location}
        </p>
        <hr />
        <p className="card-text">
          <b>Availability Period:</b> {availabilityPeriod}
        </p>
        <hr />
        <p className="card-text">
          <b>Distance from University:</b> {uniDistance}
        </p>
        <hr />
        <p className="card-text">
          <b>Features:</b> {features.split("\n").filter((f) => f.trim() !== "").map((f) => (
            <p key={f}>{f}</p>
          ))}
        </p>
        <hr />
        <p className="card-text">
          <b>Rent:</b> {rent}
        </p>
        <hr />
        <p className="card-text">
          <b>Contact Number:</b> {contactNumber}
        </p>
      </div>
    </div>
  );
};

const AccomodationDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:4000/api/accomodation/");
      setData(response.data);
    };

    getData();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Accommodations</h1>
      <div className="row">
        {data.map((accommodation) => (
          <div className="col-md-4 mb-3" key={accommodation.location}>
            <AccommodationCard accommodation={accommodation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomodationDisplay;
