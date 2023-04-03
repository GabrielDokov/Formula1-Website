import { useContext } from "react";

import { useFormHook } from "../../hooks/useForm";

import { AuthContext } from "../../contexts/AuthContext";

import { Link } from 'react-router-dom'

import {useForm} from 'react-hook-form'

import './Register.css'


function Register() {

    const {register, formState:{errors}, handleSubmit} = useForm();

    const {onRegisterSumbit} = useContext(AuthContext)
    const {values, changeHandler, onSubmit} = useFormHook({
        username: '',
        password: '',
        confirmPass: '',


    },onRegisterSumbit)


    return (
        <>

<>
        <section>

    <form  onSubmit={handleSubmit(onSubmit)}  >
       <div className="main">
           <header>
               <h2 className='driverTitle'>Register</h2>
           </header>
         
           <label className='label' >Email</label>
           <input type="email" className="details" name="username"
           {...register("username",{required:true})} aria-invalid={errors.username ? "true" : "false"}
            value={values.username} 
            onChange={changeHandler}
           />
           {errors.username?.type === 'required' && <span className='alert' role='alert'> Email is required!</span>}

           <label className='label' >Password</label>
           <input type="password" className="details" name="password"
            {...register("password",{required:true})} aria-invalid={errors.password ? "true" : "false"}
            value={values.password} 
            onChange={changeHandler}
            
           />
            {errors.password?.type === 'required' && <span className='alert' role='alert'> Password is required!</span>}

          

          <label className="label">Confirm Password</label>
          <input type="password"className="details" name="confirmPass" 
            {...register("confirmPass",{required:true})} aria-invalid={errors.confirmPass ? "true" : "false"}
          value={values.confirmPass} 
          onChange={changeHandler} >
          </input>
          {errors.confirmPass?.type === 'required' && <span className='alert' role='alert'> Confirm password is required!</span>}


           <button className="registerBtn" type='submit'>Register</button>

           <p>
            <span>If you already have a profile click <Link to="/login" className='link'>here</Link></span>
           </p>
       </div>
   </form>

   </section>

   </>

     
        
        </>
    )



}

export default Register