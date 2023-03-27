import './CreateDriver.css'
import {useState} from 'react';
// import * as driverServices from './services/driverServices'

function CreateDriver({
    onCreateDriverSubmit
}){


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
        e.preventDefault();
        onCreateDriverSubmit(values)

    }
    

   

    return(

         <>
         <section>

        <form onSubmit={onSubmit}>
        <div className="main">
            <header>
                <h2 className='driverTitle'>Create Driver</h2>
            </header>
            <div className="common">
                <div className="first">
                    <label className='label' htmlFor="givenName">First Name</label>
                    <input type="text" className="name" name="givenName" placeholder='Fernando' value={values.givenName} onChange={onChangeHandler}/>
                </div>
                <div class="last">
                    <label className='label' htmlFor="familyName">Last Name</label>
                    <input type="text" className="name" name="familyName" placeholder='Alonso' value={values.familyName} onChange={onChangeHandler} />
                </div>
            </div>

            <label className='label' htmlFor="nationality">Nationality</label>
            <input type="text" className="details" name="nationality" placeholder='Spanish' value={values.nationality} onChange={onChangeHandler}/>

            <label className='label' htmlFor="password">Permanent Number</label>
            <input type="number" className="details" name="permanentNumber" placeholder='14' value={values.permanentNumber} onChange={onChangeHandler}/>

            <label className='label' htmlFor="confirm-password">ImageUrl</label>
            <input type="text" className="details" name="imageURL" value={values.imageURL}  onChange={onChangeHandler}/>
            
            <label className='label' htmlFor="confirm-password">Date</label>
            <input type="date" className="details" name="dateOfBirth"  value={values.dateOfBirth} onChange={onChangeHandler}/>

            <label className='label' htmlFor="confirm-password">Code</label>
            <input type="text" className="details" name="code" placeholder='ALO' value={values.code} onChange={onChangeHandler}/>
           
            <button type='submit'>Add Driver</button>
        </div>
    </form>

    </section>

    </>
    )



}

export default CreateDriver;