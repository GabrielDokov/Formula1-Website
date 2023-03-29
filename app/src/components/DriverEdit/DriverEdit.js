import { useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { driverServiceFactory } from "../../services/driverServices";

function DriverEdit({
    onEditDriverSubmit
}){

     const  { driverId } = useParams();
     const driverServices = useService(driverServiceFactory)

    const {values,changeHandler,onSubmit,changeEdit} = useForm({
        givenName: '',
        familyName: '',
        nationality: '',
        permanentNumber: '',
        imageURL: '',
        dateOfBirth: '',
        code: '',
        _id: '',

    },onEditDriverSubmit)

    useEffect(() => {
        driverServices.getOne(driverId)
        .then(result => {
            changeEdit(result)
            // console.log(changeEdit)
        })
    },[driverId])

    return(

        
        <>
        <section>

       <form onSubmit={onSubmit}>
       <div className="main">
           <header>
               <h2 className='driverTitle'>Edit Driver</h2>
           </header>
           <div className="common">
               <div className="first">
                   <label className='label' htmlFor="givenName">First Name</label>
                   <input type="text" className="name" name="givenName" placeholder='Fernando' value={values.givenName} onChange={changeHandler}/>
               </div>
               <div class="last">
                   <label className='label' htmlFor="familyName">Last Name</label>
                   <input type="text" className="name" name="familyName" placeholder='Alonso' value={values.familyName} onChange={changeHandler} />
               </div>
           </div>

           <label className='label' htmlFor="nationality">Nationality</label>
           <input type="text" className="details" name="nationality" placeholder='Spanish' value={values.nationality} onChange={changeHandler}/>

           <label className='label' htmlFor="password">Permanent Number</label>
           <input type="number" className="details" name="permanentNumber" placeholder='14' value={values.permanentNumber} onChange={changeHandler}/>

           <label className='label' htmlFor="confirm-password">ImageUrl</label>
           <input type="text" className="details" name="imageURL" value={values.imageURL}  onChange={changeHandler}/>
           
           <label className='label' htmlFor="confirm-password">Date</label>
           <input type="date" className="details" name="dateOfBirth"  value={values.dateOfBirth} onChange={changeHandler}/>

           <label className='label' htmlFor="confirm-password">Code</label>
           <input type="text" className="details" name="code" placeholder='ALO' value={values.code} onChange={changeHandler}/>
          
           <button type='submit'>Edit Driver</button>
       </div>
   </form>

   </section>

   </>


    )



}
export default DriverEdit