import './Drivers.css'
import './DriversResponsive.css'
import {driverServiceFactory}from '../../services/driverServices'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useService } from '../../hooks/useService'

function Main(){

    const [drivers, setDrivers] = useState([]);


    const driverService = useService(driverServiceFactory)


    useEffect(() => {
  
      driverService.getAll()
      .then(result => {
        // result.sort((a,b) => a.familyName - b.familyName)
        setDrivers(result);
        //  console.log(result)
    
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


                </div>)}
                

        </section>

    </main>
    )



}
export default Main