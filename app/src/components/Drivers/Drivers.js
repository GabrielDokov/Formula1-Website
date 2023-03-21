import './Drivers.css'
import './DriversResponsive.css'
import * as driverServices from '../../services/driverServices'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Main(){

    const [drivers, setDrivers] = useState([]);


    useEffect(() => {
  
      driverServices.getAll()
      .then(result => {
        setDrivers(result);
        // console.log(result)
    
      })
  
    },[])

  

    return(
        <main>

        <div className="recomended">
            <h2>DRIVERS</h2>
            <p>Recomended</p>
        </div>

        <section className="main" >

            {drivers.map((d) => 
            
                <div className="boxes" key={d.driverId}>
                <img src={d.imageURL} className="boximg" alt="DriversImage"/>

                <h2>{d.givenName} {d.familyName}</h2>

                   <Link className='LinkDrivers' to={`/drivers/${d._id}`}>Details</Link>

                {/* <h3>Nationality: {d.nationality}</h3>

                <h4>RaceNumber: {d.permanentNumber}</h4> */}
                </div>)}

        </section>

    </main>
    )



}
export default Main