import './Login.css'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import { useForm } from '../../hooks/useForm'
// import logo from '../../images/f1-logo-white.jpg'

const LoginFormKeys = {
    Username: 'username',
    Password: 'password'
}

function Login()
{


    const { onLoginSubmit } = useContext(AuthContext);
    const {values, changeHandler,onSubmit} = useForm({
       [LoginFormKeys.Username]: '',
       [LoginFormKeys.Password]: '',

    },onLoginSubmit)


    return(
        
        <>
        <section>

    <form method='POST'  onSubmit={onSubmit} >
       <div className="main">
           <header>
               <h2 className='driverTitle'>Login</h2>
           </header>

           {/* <img className='imgsign' src={logo} alt='f1logo'></img> */}
         
           <label className='label' >Email</label>
           <input type="text" className="details" name={LoginFormKeys.Username}
           value={values.email}
           onChange={changeHandler} />

           <label className='label' >Password</label>
           <input type="password" className="details" name={LoginFormKeys.Password}
            value={values.password}
            onChange={changeHandler} />
          
           <button type='submit'>Login</button>
       </div>
   </form>

   </section>

   </>
    )




}

export default Login