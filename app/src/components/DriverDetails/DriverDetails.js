import { useEffect, useState , useContext } from "react";
import { useParams,useNavigate, Link } from "react-router-dom"
import './DriverDetails.css';
import {driverServiceFactory} from '../../services/driverServices';

import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";










function DriverDetails(){

    const  { driverId } = useParams();
    const [driver, setDriver] = useState({})
    const {userId} = useContext(AuthContext);


    const driverServices = useService(driverServiceFactory)



    useEffect(() => {

      driverServices.getOne(driverId)
        .then(result => {
            setDriver(result)
        })

    },[driverId])

    const navigaion = useNavigate();
    
    const onDeleteDriver = () => {
      let config = window.confirm('Are you sure you want to delete this driver?');
      if(config){
        driverServices.delOne(driverId)
        navigaion('/drivers')
      }
     
      
    }
  
    
    const onUpdateDriver = () => {
      console.log('clicked')
      // driverServices.putOne(driverId).
      // then(result => {
      //   console.log(result)
      }
    
     



  

    return(
        <>


<div className="card" key={driver.driverId} >
  <img src={driver.imageURL} alt="Avatar" />
  <div className="container">
    <h4><b>{driver.givenName} {driver.familyName}</b></h4>

    <div className="driverItems">
    <p><b>Nationality</b>: {driver.nationality}</p>
    <p><b>Driver Number</b>: {driver.permanentNumber}</p>
    <p><b>Date of Birth</b>: {driver.dateOfBirth}</p>
    <p><b>Driver Code</b>: {driver.code}</p>
  </div>

   {driver._ownerId === userId && (
  <>
    <Link to={`/drivers/${driver._id}/edit`} className="edit" onClick={onUpdateDriver}>EDIT</Link>
    <button  className="delete" onClick={onDeleteDriver}>Delete</button>
  </>
)}
  </div>
</div> 

  
        </>
    )




}

export default DriverDetails