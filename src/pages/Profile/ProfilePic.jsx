import { useEffect,useState } from "react";
import axios from "axios"
import { updateUserThunk } from '../../services/users/users.thunks';
import { useDispatch } from "react-redux";

const ProfilePic = ({location,canShow}) => {

    const dispatch = useDispatch()
    
    const [allData,setAllData] =  useState({})
    const [userName,setUserName] = useState(""); 
    const [bio,setBio] = useState(""); 
    const [file,setFile] = useState(null)
    const [pp,setPp] = useState(null)

    useEffect(()=>{
        const getData = async()=>{
          const response = await axios.get(`http://localhost:4000/api/users/${location}`)
          setUserName(response.data.userName)
          setBio(response.data.bio)
          setAllData(response.data)
        }
        getData();
      },[])

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
          setPp(url)
          dispatch(updateUserThunk({data:{pp:url,location}}))
          return url;

        }catch(err){
          console.log(err)
        }
      }
      

    return (  
        <div className="profile-header text-center">
                <img
                    src={`${allData.pp}`}
                    alt="Profile Picture"
                    className="profile-picture img-fluid rounded-circle"
                />
                {canShow && <div className="mt-2">
                <input className="form-control" type="file" onChange={handleFileChange}/>
                <button className="btn btn-dark mt-2" onClick={handleUpload}>Upload</button>
                </div>}
                <h2 className="profile-username mt-3">{userName}</h2>
                <p className="profile-bio">{bio}</p>
                </div>
    );
}
 
export default ProfilePic;