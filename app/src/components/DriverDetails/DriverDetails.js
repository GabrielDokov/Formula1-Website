import { useEffect, useState  } from "react";
import { useParams,useNavigate } from "react-router-dom"
import './DriverDetails.css';
import {driverServiceFactory} from '../../services/driverServices';
// import Modal from "./ModalDrivers";
// import ModalDrivers from "./ModalDrivers";
import { useService } from "../../hooks/useService";

// const driverServices = useService(driverServiceFactory)






function DriverDetails(){

    const  { driverId } = useParams();
   
    const [driver, setDriver] = useState({})

    // const [modal, setModal] = useState(false)
    const driverServices = useService(driverServiceFactory)



    useEffect(() => {

      driverServices.getOne(driverId)
        .then(result => {
            setDriver(result)
        })

    },[driverId])



    //DELETE LOGIC NEED TO BE FINISHED

    const navigaion = useNavigate();

    const onDeleteDriver = () => {
     
       
        driverServices.delOne(driverId)
        .then(result => {
          setDriver(result)
          navigaion('/drivers')
        })
     
    }
  
    



    const onUpdateDriver = () => {
      console.log('clicked')
      // driverServices.putOne(driverId).
      // then(result => {
      //   console.log(result)
      }
    
     



  

    return(
        <>


<div className="card">
  <img src={driver.imageURL} alt="Avatar" />
  <div className="container">
    <h4><b>{driver.givenName} {driver.familyName}</b></h4>

    <div className="driverItems">
    <p><b>Nationality</b>: {driver.nationality}</p>
    <p><b>Driver Number</b>: {driver.permanentNumber}</p>
    <p><b>Date of Birth</b>: {driver.dateOfBirth}</p>
    <p><b>Driver Code</b>: {driver.code}</p>
  </div>

    <button className="edit" onClick={onUpdateDriver}>EDIT</button>
    <button  className="delete" onClick={onDeleteDriver}>Delete</button>
  </div>
</div> 

  
        </>
    )




}

export default DriverDetails