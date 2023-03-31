import './TeamEdit.css'

import { TeamFactory } from "../../services/teamServices";
import { useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react";
import { useService } from "../../hooks/useService";

function TeamEdit(){


    const  { teamId } = useParams();
    const teamServices = useService(TeamFactory);
    const [currentTeam, setCurrentTeam] = useState({});

    const navigate = useNavigate();

    useEffect(() => {

       teamServices.getOne(teamId)
       .then(result => {
        setCurrentTeam(result)
       })
    },[teamId])


    const Submit = (e) => {

       e.preventDefault()

       const result = Object.fromEntries(new FormData(e.target))

       teamServices.editOne(teamId,result)
       .then(result => {
        setCurrentTeam(teamId,result);
           navigate(`/teams/${teamId}`)

       })
    }


    return(
        <>
        <section>

       <form method='post' onSubmit={Submit}>
       <div className="main">
           <header>
               <h2 className='driverTitle'>Edit Team</h2>
           </header>

           <label className='label' htmlFor="confirm-password">Team Name</label>
           <input type="text" className="details" name="name"  defaultValue={currentTeam.name}  />
          

           <label className='label' htmlFor="nationality">Nationality</label>
           <input type="text" className="details" name="nationality"  defaultValue={currentTeam.nationality}  />

           <label className='label' htmlFor="password">Image URL</label>
           <input type="text" className="details" name="imageUrl"  defaultValue={currentTeam.imageUrl} />


           <label className='label' htmlFor="password">Driver 1</label>
           <input type="text" className="details" name="driver1"  defaultValue={currentTeam.driver1} />


           <label className='label' htmlFor="confirm-password">Driver 2</label>
           <input type="text" className="details" name="driver2" defaultValue={currentTeam.driver2} />
           
           <label className='label' htmlFor="confirm-password">Reserved Driver</label>
           <input type="text" className="details" name="reserveDriver" defaultValue={currentTeam.reserveDriver}   />

        
          
           <button className="editTeam" type='submit'>Edit Team</button>
       </div>
   </form>

   </section>

   </>
    )


}

export default TeamEdit;