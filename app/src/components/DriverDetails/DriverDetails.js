import { useEffect, useState  } from "react";
import { useParams,useNavigate } from "react-router-dom"
import './DriverDetails.css';
import * as driverServices from '../../services/driverServices';




function DriverDetails(){

    const  { driverId } = useParams();
   
    const [driver, setDriver] = useState({})

    // const [modal, setModal] = useState(false)



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
    <p>Nationality: {driver.nationality}</p>
    <p>Driver Number: {driver.permanentNumber}</p>
    <p>Date of Birth: {driver.dateOfBirth}</p>
    <p>Driver Code: {driver.code}</p>

    <button onClick={onUpdateDriver}>EDIT</button>
    <button onClick={onDeleteDriver}>Delete</button>
  </div>
</div> 

  
        </>
    )




}

export default DriverDetails