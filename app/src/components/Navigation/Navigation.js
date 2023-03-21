import "./Navigation.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
function Navigation() {
  
  const { isAuthenticated , username } = useContext(AuthContext);

  return (

   
    <div className="head">

   
   
   
        <div className="travel">
        <Link  to="/" className="headingp">Formula1</Link>
        </div>

        <div className="container">
        <nav className="navigation">  
        <ul className="lists">


        {isAuthenticated && (

<>
            <li className="list">
              <Link className='navItems'to="/circuits">Circuits</Link>
            </li>
            <li className="list">
              <Link className='navItems' to="/teams">Teams</Link>
            </li>
            <li className="list">
              <Link className='navItems'to="/drivers">Drivers</Link>
            </li>
            <li className="list">
              <Link className='navItems'to="/create-driver">Add Driver</Link>
            </li>

            <li className="list">
              <Link className='navItems'to="/create-driver">{username}</Link>
            </li>

            <li className="list signup">
            <i className="fa-solid fa-right-from-bracket"></i>
              <Link className="navItems" to="/logout">Logout</Link>
            </li>

            </>
        )}


{!isAuthenticated && (

<div className="noUser">
               <li className="list login">
               <i className="fa-solid fa-user"></i>
               <Link className="navItems" to="/login">Sign in</Link>
               </li>
               <li className="list register">
               <i className="fa-solid fa-address-card"></i>
               <Link className="navItems" to="/register">Register</Link>
               </li>
</div>

)}
        
        
          </ul>
        </nav>
      </div>


    </div>
     
  )
 
}

export default Navigation;
