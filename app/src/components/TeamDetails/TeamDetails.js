import * as teamServices from '../../services/teamServices'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TeamDetails(){

    const  { teamId } = useParams();
    console.log(teamId)

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
    <p>Nationality: {team.nationality}</p>
    <p>Driver 1: {team.driver1} </p>
    <p>Driver 2: {team.driver2} </p>
    <p>Reserved Driver: {team.reserveDriver} </p>

    <a href="#">EDIT</a>
    <a href='#'>Delete</a>
  </div>
</div> 

        </>
    )




}

export default TeamDetails;