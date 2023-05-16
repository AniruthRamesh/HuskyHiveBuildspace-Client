import GigCard from "../GigCard/GigCard"; 
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
const GigCardGenerator = () => {
    const [projects, setProjects] = useState([]);
  
    const API_BASE = import.meta.env.VITE_REACT_APP_API_BASE;
const HUSKY_API = `${API_BASE}/gigs`;
    useEffect(() => {
      const gettingData = async () => {
        const response = await axios.get(`${HUSKY_API}`);
        setProjects(response.data);
      };
  
      gettingData();
    }, []);
  
    return (
      <div className="container text-center my-5 mb-3">
        <div className="container row">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project._id}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3"
              >
                <Link to={`/gig/${project._id}`} className="text-dark">
                  <GigCard card={project} />
                </Link>
              </div>
            ))
          ) : (
            <div>
              <ion-icon name="reload-outline"></ion-icon>
            </div>
          )}
        </div>
      </div>
    );
  };
  export default GigCardGenerator;