import Accordion from "react-bootstrap/Accordion";
import { useState, useEffect } from "react";
import * as circuitServices from "../../services/circuitServices";

import './Circuits.css'

function Circuits() {
  const [circuits, setCurtuits] = useState([]);

  useEffect(() => {
    circuitServices.getAllCircuits()
    .then((result) => {
      setCurtuits(result);
      // console.log(result);
    });
  }, []);


  return (
   
<>
<div className="recomended">
            <h2>CIRCUITS</h2>
            <p>Recomended</p>
        </div>
    <Accordion >
       {circuits.map((c) => 
        <Accordion.Item eventKey={c.circuitId} key={c._id} >
          <Accordion.Header>{c.circuitName}</Accordion.Header>
          <Accordion.Body>

            <div className="circuitMain">
            <div className="information">
               <p><b>Country</b>    :{c.Location.country}</p>
               <p><b>Latitude</b>   :{c.Location.lat}</p>  
               <p><b>Longtitude</b> :{c.Location.long}</p>
               <p><b>Location</b>   :{c.Location.locality}</p>
            </div>

            <div>
              <img  class='circuitImg' src={c.Location.imageUrl} alt="CircuitsImg"></img>
            </div>
            </div>
        
          </Accordion.Body>
          
          
        </Accordion.Item>
     )} 
    </Accordion>
    

    </>
  );
}

export default Circuits;
