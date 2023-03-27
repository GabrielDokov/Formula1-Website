import './TeamDetails.css'
import {TeamFactory} from '../../services/teamServices'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useService } from '../../hooks/useService';

function TeamDetails(){

    const  { teamId } = useParams();
    console.log(teamId)

    const teamServices = useService(TeamFactory)

    const [team, setTeam] = useState({});

    useEffect(() => {

        teamServices.getOne(teamId)
        .then(result => {
            setTeam(result)
        })

    }, [teamId])




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

    </div>
  </div>
</div> 

        </>
    )




}

export default TeamDetails;