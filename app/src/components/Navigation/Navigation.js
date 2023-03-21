import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  // async function getTeams() {
  //     const response = await fetch('http://ergast.com/api/f1/2023/constructors.json');
  //     const data = await response.json();
  //     console.log((data.MRData.ConstructorTable.Constructors).map((c) => c.name))
  //  }
  //  getTeams()

  return (
    <div className="head">
      <div className="travel">
        <Link style={{ textDecoration: "none", color: "white" }} to="/" className="headingp">Formula1</Link>
      </div>

      <div className="container">
        <nav className="navigation">
          <ul className="lists">
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
            <li className="list signup">
              <i className="fa-solid fa-user"></i>
              <Link style={{ textDecoration: "none", color: "white" }} to="/login">Sign in</Link>
            </li>
            <li className="list signup">
            <i className="fa-solid fa-address-card"></i>
              <Link style={{ textDecoration: "none", color: "white" }} to="/register">Register</Link>
            </li>

            <li className="list signup">
            <i className="fa-solid fa-right-from-bracket"></i>
              <Link style={{ textDecoration: "none", color: "white" }} to="/signin">Logout</Link>
            </li>
            
          </ul>
        </nav>
      </div>
    </div>
  );
  // <iclassName="fa-solid fa-user"></iclassName=>
}

export default Navigation;
