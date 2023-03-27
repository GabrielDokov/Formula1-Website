import './Teams.css'
import { useState, useEffect } from "react";
import {TeamFactory} from "../../services/teamServices";
import { Link } from 'react-router-dom'
import { useService } from '../../hooks/useService';

function Teams() {
  const [teams, setTeams] = useState([]);

  const teamServices = useService(TeamFactory)

  

  useEffect(() => {
    teamServices.getAllTeams()
    .then((result) => {
      setTeams(result);
    });
  }, []);


  return (
    <>
      <div className="recomended">
        <h2>TEAMS</h2>
        <p>Recomended</p>
      </div>

      <section className="main">
        {teams.map((t) => (
          <div className="boxes" key={t.constructorId}>
            <img src={t.imageUrl} className="boximg" alt="" />

            <h2>
              {t.name}
            </h2>
      
            <Link style={{ textDecoration: "none"}} to={`/teams/${t._id}`}>Details</Link>

          </div>
        ))}
      </section>
    </>
  );
}

export default Teams;
