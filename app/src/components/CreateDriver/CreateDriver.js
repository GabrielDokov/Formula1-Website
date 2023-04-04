import './CreateDriver.css'
import {useState} from 'react';
// import * as driverServices from './services/driverServices'
import {useForm} from 'react-hook-form'

function CreateDriver({
    onCreateDriverSubmit
}){

    const {register, formState:{errors}, handleSubmit} = useForm();


    const [values, setValues] = useState({
        givenName: '',
        familyName: '',
        nationality: '',
        permanentNumber: '',
        imageURL: '',
        dateOfBirth: '',
        code: '',

    })

    const onChangeHandler = (e) => {

        setValues(state => ({...state, [e.target.name]: e.target.value}))

    }

    const onSubmit = (e) => {
        onCreateDriverSubmit(values)
    }
    

   

    return(

         <>
         <section>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main">
            <header>
                <h2 className='driverTitle'>Create Driver</h2>
            </header>
            <div className="common">
                <div className="first">
                    <label className='label' htmlFor="givenName">First Name</label>
                    <input type="text" className="name" 
                    {...register("givenName",{required:true, minLength:3, maxLength:15})} aria-invalid={errors.givenName ? "true" : "false"} 
                    placeholder='Fernando' value={values.givenName} onChange={onChangeHandler}/>
                    {errors.givenName?.type=== 'required' && <p className='alert' role='alert'> First name is required!</p>}
                </div>


                <div className="last">
                    <label className='label' htmlFor="familyName">Last Name</label>
                    <input type="text" className="name" name="familyName" 
                    {...register("familyName",{required:true, minLength:3, maxLength:15})} aria-invalid={errors.familyName ? "true" : "false"} 
                     placeholder='Alonso' value={values.familyName} onChange={onChangeHandler} />
                     {errors.familyName?.type=== 'required' && <p  className='alert' role='alert'> Family name is required</p>}
                </div>
            </div>

            <label className='label' htmlFor="nationality">Nationality</label>
            <input type="text" className="details" name="nationality" 
            {...register("nationality",{required:true, minLength:3, maxLength:15})} aria-invalid={errors.nationality ? "true" : "false"} 
            placeholder='Spanish' value={values.nationality} onChange={onChangeHandler}/>
             {errors.nationality?.type=== 'required' && <p  className='alert' role='alert'> Nationality is required!</p>}



            <label className='label' htmlFor="permanentNumber">Permanent Number</label>
            <input type="number" className="details" name="permanentNumber"
             {...register("permanentNumber",{required:true,minLength:1, maxLength:99})} aria-invalid={errors.permanentNumber ? "true" : "false"} 
            placeholder='14' value={values.permanentNumber} onChange={onChangeHandler}/>
             {errors.permanentNumber?.type === 'required' && <p  className='alert' role='alert'> Permanent Number is required!</p>}



            <label className='label' htmlFor="imageURL">ImageUrl</label>
            <input type="text" className="details" name="imageURL" placeholder='https://exampleURL.com'
             {...register("imageURL",{required:true,})} aria-invalid={errors.imageURL ? "true" : "false"}
             value={values.imageURL}  onChange={onChangeHandler}/>
                {errors.imageURL?.type === 'required' && <p  className='alert' role='alert'> ImageUrl is required!</p>}


            
            <label className='label' htmlFor="dateOfBirth">Date</label>
            <input type="date" className="details" name="dateOfBirth" 
            {...register("dateOfBirth",{required:true,})} aria-invalid={errors.dateOfBirth ? "true" : "false"}
             value={values.dateOfBirth} onChange={onChangeHandler}/>
              {errors.dateOfBirth?.type === 'required' && <p  className='alert' role='alert'> Data of birth is required!</p>}


            <label className='label' htmlFor="code">Code</label>
            <input type="text" className="details" name="code" 
             {...register("code",{required:true,})} aria-invalid={errors.code ? "true" : "false"}
             placeholder='ALO' value={values.code} onChange={onChangeHandler}/>
               {errors.code?.type === 'required' && <p  className='alert' role='alert'> Code is required!</p>}
           
            <button className='addBtn' type='submit'>Add Driver</button>
        </div>
    </form>

    </section>

    </>
    )



}

export default CreateDriver;