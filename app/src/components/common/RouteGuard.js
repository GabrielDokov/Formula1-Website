import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


function RouteGuard({
    children
}){

    
    const  { isAuthenticated }= useContext(AuthContext);

    console.log('route guard')

    if(!isAuthenticated){
     return <Navigate to='/login'></Navigate>
    }

    
    return children ? children : <Outlet></Outlet>



}

export default RouteGuard