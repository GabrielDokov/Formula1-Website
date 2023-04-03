import './Login.css'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import { useFormHook } from '../../hooks/useForm'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

// import logo from '../../images/f1-logo-white.jpg'



// const LoginFormKeys = {
//     Username: 'username',
//     Password: 'password'
// }

function Login()
{

    const {register, formState:{errors}, handleSubmit} = useForm();


    const { onLoginSubmit } = useContext(AuthContext);
    const {values, changeHandler,onSubmit} = useFormHook({
    //    [LoginFormKeys.Username]: '',
    //    [LoginFormKeys.Password]: '',

    username: '',
    password: '',


    },onLoginSubmit)


    return(
        
        <>
        <section>

    <form  className='loginForm' onSubmit={handleSubmit(onSubmit)} >
       <div className="main">
           <header>
               <h2 className='driverTitle'>Login</h2>
           </header>
         
           <label className='label' >Email</label>
           <input type="email" className="details" name='username'
             {...register("username",{required:true})} aria-invalid={errors.username ? "true" : "false"}
           value={values.email}
           onChange={changeHandler} />
           {errors.username?.type === 'required' && <span className='alert' role='alert'> Email is required!</span>}

           <label className='label' >Password</label>
           <input type="password" className="details" name="password"
           {...register("password",{required:true, minLength:6, maxLength:10})} aria-invalid={errors.password ? "true" : "false"}
            value={values.password}
            onChange={changeHandler} />
            {errors.password?.type === 'required' && <span className='alert' role='alert'> Password is required!</span>}


          
           <button className='loginBtn' type='submit'>Login</button>
           <p>
            <span className='span'>If you don't have a profile click <Link to="/register" className='link'>here</Link></span>
           </p>
       </div>
   </form>

   </section>

   </>
    )




}

export default Login