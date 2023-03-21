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
      console.log(result);
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
        
        
        <>
          <Accordion.Header>{c.circuitName}</Accordion.Header>
          <Accordion.Body>
            Country: {c.Location.country}
            Latitude:{c.Location.lat}     
            Longtitude:{c.Location.long}
            Location:{c.Location.locality}
          </Accordion.Body>
          </>
          
        </Accordion.Item>
     )} 
    </Accordion>
    

    </>
  );
}

export default Circuits;
