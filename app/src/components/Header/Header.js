import videof1 from '../../video/f1video.mp4'
import './Header.css'

function Header(){

    return(
        <header className="heading">

        <div className="banner">
            <video  src={videof1} type="video/mp4" autoPlay muted loop>
              
            </video>

        </div>


        <div className="title">
        

            <h1 className="maintitle"><b>WELCOME TO THE F1 WORLD</b></h1>

            <h3 className="secondtitle">Everything about Formula1 in one place!</h3> 
          
        </div>

    </header>

    )



}

export default Header