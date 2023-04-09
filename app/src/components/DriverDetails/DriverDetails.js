import { useEffect, useState , useContext } from "react";
import { useParams,useNavigate, Link } from "react-router-dom"
import './DriverDetails.css';
import {driverServiceFactory} from '../../services/driverServices';

import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";
import {commentServiceFactory} from '../../services/commentServices'

import {useFormHook} from '../../hooks/useForm'
// import {useForm} from 'react-hook-form'


function DriverDetails(){


  // const {register, formState:{errors}, handleSubmit} = useForm();

    const  { driverId } = useParams();
    const [driver, setDriver] = useState({})
    const {userId, isAuthenticated, username} = useContext(AuthContext);
    const driverServices = useService(driverServiceFactory)
    const commentService = useService(commentServiceFactory)

    // console.log(isAuthenticated);
    // console.log(userId)





    useEffect(() => {

      Promise.all([
        driverServices.getOne(driverId),
        commentService.getAll(driverId)
      ])
      .then(([driverData,comments]) => {
        setDriver({
          ...driverData,
          comments,
        });
      })


    },[driverId])

    const navigaion = useNavigate();
    
    const onDeleteDriver = () => {
      let config = window.confirm('Are you sure you want to delete this driver?');
      if(config){
        driverServices.delOne(driverId)
        navigaion('/drivers')
      }
     
      
    }


  
      
    const onCommentSubmit = async(values) => {
      const response = await commentService.create(driverId, values.comment)
     
      setDriver(state => ({
        ...state,
        comments:[...state.comments, {
          ...response,
          author:{
            username
          }
        }],

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

    </div>

   {driver._ownerId === userId && (

  <>
    <Link to={`/drivers/${driver._id}/edit`} className="edit">EDIT</Link>
    <button  className="delete" onClick={onDeleteDriver}>Delete</button>


    
  </>
)}
<div className="details-comments">
                    <h2>Comments:</h2>
                    <ul className="commentUl">
                      {driver.comments && driver.comments.map(c => (
                            <li key={c._id} className="comment">
                                <p><b className="username">{c.author.username}</b>:  {c.comment}</p>
                            </li>
                      ))}
                    </ul>

                    {!driver.comments?.length && (
                      <p className="no-comment">No comments.</p>
                      // TO DO
                    )}
                   
                </div>
  </div>
</div> 



{isAuthenticated && (
  <article className="article">

      <h2>Add Comments:</h2>
      <form onSubmit={(onSubmit)}>
      <textarea name="comment" placeholder="Comment..." value={values.comment} onChange={changeHandler}></textarea>
      <button type="submit" value='Add Comment'>Add Comment</button>
      </form>

  </article>

 )}

</>









  
       
    )




}

export default DriverDetails