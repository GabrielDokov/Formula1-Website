import './TeamDetails.css'
import {TeamFactory} from '../../services/teamServices'
import { useState, useEffect ,useContext} from 'react';
import { useParams , Link, useNavigate } from 'react-router-dom';
import { useService } from '../../hooks/useService';

// import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";


function TeamDetails(){

   const {userId} = useContext(AuthContext);
   const  { teamId } = useParams();
   const teamServices = useService(TeamFactory)

    const [team, setTeam] = useState({});

    useEffect(() => {

        teamServices.getOne(teamId)
        .then(result => {
            setTeam(result)
        })

    }, [teamId])


    const navigaion = useNavigate();
    const onDeleteTeam = () => {
        let config = window.confirm('Are you sure you want to delete this driver?');
         if(config){
        teamServices.delOne(teamId)
         navigaion('/teams')
         }

    }


    return(
        <>

        <div className="card">
  <img src={team.imageUrl} alt="Avatar" />
  <div className="container">
    <h4><b>{team.name} </b></h4>

    <div className='teamDetails'>

    <p><b>Nationality</b>:  {team.nationality}</p>
    <p><b>Driver 1</b>:  {team.driver1} </p>
    <p><b>Driver 2</b>:  {team.driver2} </p>
    <p><b>Reserved Driver</b>:  {team.reserveDriver}</p>

    {team._ownerId === userId && (
        
          <>
          <Link to={`/teams/${team._id}/edit`} className="edit">EDIT</Link>
          <button  className="delete" onClick={onDeleteTeam}>DELETE</button>
          </>
        )}

    </div>
  </div>
</div> 

        </>
    )




}

export default TeamDetails