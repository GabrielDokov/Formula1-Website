import { useEffect, useState , useContext } from "react";
import { useParams,useNavigate, Link } from "react-router-dom"
import './DriverDetails.css';
import {driverServiceFactory} from '../../services/driverServices';

import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";
import * as commentServices from '../../services/commentServices'

import {useFormHook} from '../../hooks/useForm'
import {useForm} from 'react-hook-form'


function DriverDetails(){


  const {register, formState:{errors}, handleSubmit} = useForm();

    const  { driverId } = useParams();
    const [driver, setDriver] = useState({})
    const {userId, isAuthenticated} = useContext(AuthContext);
    const driverServices = useService(driverServiceFactory)

    // console.log(isAuthenticated);
    // console.log(userId)





    useEffect(() => {

      Promise.all([
        driverServices.getOne(driverId),
        commentServices.getAll(driverId)
      ])
      .then(([driverData,comments]) => {
        setDriver({
          ...driverData,
          comments,
        });
      })

      // driverServices.getOne(driverId)
      //   .then(result => {
      //       setDriver(result)
      //   })

    },[driverId])

    const navigaion = useNavigate();
    
    const onDeleteDriver = () => {
      let config = window.confirm('Are you sure you want to delete this driver?');
      if(config){
        driverServices.delOne(driverId)
        navigaion('/drivers')
      }
     
      
    }

    const [likes, setLike] = useState(0)
    const onLike = () => {
      setLike(likes+1)

    }
  

      
    const onCommentSubmit = async(values) => {
      const response = await commentServices.create(driverId, values.comment)
     
      setDriver(state => ({
        ...state,
        comments:[...state.comments, response],

      }))
    }

      

    const {values,changeHandler,onSubmit} = useFormHook({
      comments: ''

    },onCommentSubmit);




    return(
       

<>
<div className="card" key={driver.driverId} >
  <img src={driver.imageURL} alt="Avatar" />
  <div className="container">
    <h4><b>{driver.givenName} {driver.familyName}</b></h4>


    <div className="dri">

       <div className="driverItems">
         <p><b>Nationality</b>: {driver.nationality}</p>
         <p><b>Driver Number</b>: {driver.permanentNumber}</p>
         <p><b>Date of Birth</b>: {driver.dateOfBirth}</p>
         <p><b>Driver Code</b>: {driver.code}</p>
      </div>
  
        <div >
         <button onClick={onLike} className="like"><i className="fa-solid fa-heart">{likes}</i></button>
        </div>

    </div>

   {driver._ownerId === userId && (

  <>
    <Link to={`/drivers/${driver._id}/edit`} className="edit">EDIT</Link>
    <button  className="delete" onClick={onDeleteDriver}>Delete</button>


    
  </>
)}
<div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                      {driver.comments && driver.comments.map(c => (

                      
                      
                            <li key={c._id} className="comment">
                                <p>{c.comment}</p>
                            </li>
                      ))}
                    </ul>

                    {!driver.comments?.length && (
                      <p className="no-comment">No comments.</p>
                    )}
                   
                </div>
  </div>
</div> 



{isAuthenticated && (
    <article>

<label>Add Comments:</label>
<form onSubmit={handleSubmit(onSubmit)}>
  <textarea name="comment" placeholder="Comment..." value={values.comment} onChange={changeHandler}></textarea>
  <input type="submit" value='Add Comment'></input>
</form>

</article>
 )}

</>









  
       
    )




}

export default DriverDetails