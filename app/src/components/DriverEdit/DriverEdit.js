import { useParams, useNavigate} from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useContext, useEffect,useState } from "react";
import { useService } from "../../hooks/useService";
import { driverServiceFactory } from "../../services/driverServices";
// import { GameContext } from "../../contexts/GameContext"

function DriverEdit({
    onEditDriverSubmit,
}){



     const  { driverId } = useParams();
     const driverService = useService(driverServiceFactory);
     const [currentDriver, setCurrentDriver] = useState({});

     const navigate = useNavigate();

     useEffect(() => {

        driverService.getOne(driverId)
        .then(result => {
            setCurrentDriver(result)
        })
     },[])


     const Submit = (e) => {

        e.preventDefault()

        const result = Object.fromEntries(new FormData(e.target))

        driverService.editOne(driverId,result)
        .then(result => {
            setCurrentDriver(driverId,result);
            navigate(`/drivers/${driverId}`)

        })
     }


    return(

        
        <>
        <section>

       <form onSubmit={Submit} method='post'>
       <div className="main">
           <header>
               <h2 className='driverTitle'>Edit Driver</h2>
           </header>
           <div className="common">
               <div className="first">
                   <label className='label' htmlFor="givenName">First Name</label>
                   <input type="text" className="name" name="givenName" placeholder='Fernando' defaultValue={currentDriver.givenName} />
               </div>
               <div className="last">
                   <label className='label' htmlFor="familyName">Last Name</label>
                   <input type="text" className="name" name="familyName" placeholder='Alonso' defaultValue={currentDriver.familyName}  />
               </div>
           </div>

           <label className='label' htmlFor="nationality">Nationality</label>
           <input type="text" className="details" name="nationality" placeholder='Spanish' defaultValue={currentDriver.nationality} />

           <label className='label' htmlFor="password">Permanent Number</label>
           <input type="number" className="details" name="permanentNumber" placeholder='14' defaultValue={currentDriver.permanentNumber} />

           <label className='label' htmlFor="confirm-password">ImageUrl</label>
           <input type="text" className="details" name="imageURL" defaultValue={currentDriver.imageURL} />
           
           <label className='label' htmlFor="confirm-password">Date</label>
           <input type="date" className="details" name="dateOfBirth"  defaultValue={currentDriver.dateOfBirth} />

           <label className='label' htmlFor="confirm-password">Code</label>
           <input type="text" className="details" name="code" placeholder='ALO' defaultValue={currentDriver.code} />
          
           <button type='submit'>Edit Driver</button>
       </div>
   </form>

   </section>

   </>


    )



}
export default DriverEdit