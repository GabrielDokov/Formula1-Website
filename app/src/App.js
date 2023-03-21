import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Drivers from "./components/Drivers/Drivers";
import Footer from "./components/Footer/Footer";
import{Routes, Route, useNavigate} from 'react-router-dom';
import Circuits from "./components/Circuits/Circuits";
import Teams from "./components/Teams/Teams";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateDriver from "./components/CreateDriver/CreateDriver";
import * as driverServices from './services/driverServices'
import DriverDetails from "./components/DriverDetails/DriverDetails";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import Register from "./components/Register/Register";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";
import * as AuthService from './services/authServices'
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";


function App() {

  const[auth, setAuth] = useState({});

  const navigate = useNavigate();
  const onCreateGameSubmit = async (data) => {
   const newDriver = await driverServices.create(data);
   console.log(newDriver);
   navigate('/drivers')
  }


  const onLoginSubmit = async (data) => {
  const result =  await AuthService.login(data);
   setAuth(result);

   navigate('/')
  
      console.log(result);
  }


  
  const onRegisterSumbit = async(data) => {

    const {confirmPass, ...registerData} = data


    if(confirmPass !== registerData.password){
      return;
    }

    const result = await AuthService.register(registerData);

    setAuth(result)
    navigate('/')

  }



  const context = {
    onLoginSubmit,
    onRegisterSumbit,
    userId: auth._id,
    token: auth.accessToken,
    username: auth.username,
    isAuthenticated: !!auth.accessToken
  }





  return (
    
<AuthContext.Provider value={context}>
    <Navigation></Navigation> 
      <Routes>
          <Route path="/" element={<Header></Header>}></Route>
          <Route path="/circuits" element={<Circuits></Circuits>}></Route>
          <Route path="/teams" element={<Teams></Teams>}></Route>
          <Route path="/drivers" element={ <Drivers></Drivers>} ></Route>
          <Route path='/create-driver' element={<CreateDriver onCreateGameSubmit={onCreateGameSubmit}></CreateDriver>}></Route>
          <Route path="/drivers/:driverId" element={<DriverDetails></DriverDetails>}></Route>
          <Route path='/teams/:teamId' element={<TeamDetails></TeamDetails>}></Route>
          <Route path='/login' element={<Login ></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
      </Routes>
    <Footer></Footer>
</AuthContext.Provider>
    
  );
}

export default App;
