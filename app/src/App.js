import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Drivers from "./components/Drivers/Drivers";
import Footer from "./components/Footer/Footer";
import{Routes, Route, useNavigate, useParams} from 'react-router-dom';
import Circuits from "./components/Circuits/Circuits";
import Teams from "./components/Teams/Teams";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateDriver from "./components/CreateDriver/CreateDriver";
import DriverEdit from "./components/DriverEdit/DriverEdit";

import  {driverServiceFactory} from './services/driverServices'

import DriverDetails from "./components/DriverDetails/DriverDetails";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import Register from "./components/Register/Register";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";

import {authServiceFactory} from './services/authServices'

import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
// import ScrollUp from "./components/ScrollUp";
// import { GameContext } from "./contexts/GameContext";
import { DriverContext } from "./contexts/DriverContext";



// import {useService} from "./hooks/useService";

//import {driverServiceFactory} from './services/driverServices'





function App() {


  const[auth, setAuth] = useState({});


  const driverServices = driverServiceFactory(auth.accessToken)
  const authService = authServiceFactory(auth.accessToken)

  const navigate = useNavigate();


  const onCreateDriverSubmit = async (data) => {
   const newDriver = await driverServices.create(data);
   navigate('/drivers')
  }




  const onLoginSubmit = async (data) => {
  const result =  await authService.login(data);
   setAuth(result);
   navigate('/')
  
  }

  const onRegisterSumbit = async(data) => {

    const {confirmPass, ...registerData} = data
    if(confirmPass !== registerData.password){
      return;
    }
    const result = await authService.register(registerData);
    setAuth(result)
    navigate('/')

  }

  const onLogout = async () => {
    authService.logout();
    setAuth({});
  }

  const onEditDriverSubmit = async (data) => {
    const result = await driverServices.editOne(data);
    console.log(result)

   navigate('/')

  }



  const context = {
    onLoginSubmit,
    onRegisterSumbit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    username: auth.username,
    isAuthenticated: !!auth.accessToken
  }  





  return (
    
<AuthContext.Provider value={context}>
  <DriverContext.Provider value={context}>
    <Navigation></Navigation> 
      <Routes>
          <Route path="/" element={<Header></Header>}></Route>
          <Route path="/circuits" element={<Circuits></Circuits>}></Route>
          <Route path="/teams" element={<Teams></Teams>}></Route>
          <Route path="/drivers" element={ <Drivers></Drivers>} ></Route>
          <Route path='/create-driver' element={<CreateDriver onCreateDriverSubmit={onCreateDriverSubmit}></CreateDriver>}></Route>
          <Route path="/drivers/:driverId" element={<DriverDetails></DriverDetails>}></Route>
          <Route path='/teams/:teamId' element={<TeamDetails></TeamDetails>}></Route>
          <Route path='/login' element={<Login ></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
          <Route path="/drivers/:driverId/edit" element={<DriverEdit onEditDriverSubmit={onEditDriverSubmit}></DriverEdit>}></Route>
      </Routes>
    <Footer></Footer>
  </DriverContext.Provider>
</AuthContext.Provider>
    
  );
}

export default App;
