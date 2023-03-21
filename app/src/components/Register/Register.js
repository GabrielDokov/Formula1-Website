import { useContext } from "react";

import { useForm } from "../../hooks/useForm";

import { AuthContext } from "../../contexts/AuthContext";

import { Link } from 'react-router-dom'


function Register() {

    const {onRegisterSumbit} = useContext(AuthContext)
    const {values, changeHandler, onSubmit} = useForm({
        username: '',
        password: '',
        confirmPass: '',


    },onRegisterSumbit)


    return (
        <>

<>
        <section>

    <form method='POST'  onSubmit={onSubmit}  >
       <div className="main">
           <header>
               <h2 className='driverTitle'>Register</h2>
           </header>
         
           <label className='label' >Email</label>
           <input type="email" className="details" name="username" value={values.username} onChange={changeHandler}
           />

           <label className='label' >Password</label>
           <input type="password" className="details" name="password" value={values.password} onChange={changeHandler}
           />
          

          <label className="label">Confirm Password</label>
          <input type="password"className="details" name="confirmPass" value={values.confirmPass} 
          onChange={changeHandler} ></input>

           <button type='submit'>Login</button>

           <p>
            <span>If you already have a profile click <Link to="/login">here</Link></span>
           </p>
       </div>
   </form>

   </section>

   </>

     
        
        </>
    )



}

export default Register