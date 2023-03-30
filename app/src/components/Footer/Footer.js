import f1logo from '../../images/f1-logo-white.jpg'
import './Footer.css'
// import { Link } from 'react-router-dom'


function Footer(){

    return(
        
        <>
    <footer className="footer">

    <div className="foothead">
        <img className='footerimg' src={f1logo} alt=""/>
    </div>

    <div className="footerfirst">
        <ul className="footlist">
            <li>Home</li>
            <li>Circuits</li>
            <li>Teams</li>
            <li>Drivers</li>
        </ul>
    </div>

   

    <div className="foootersecond">
        <ul className="footlist">
            <li>About us</li>
            <li>FAQ</li>
            <li>Terms and conditions</li>
            <li>Contact</li>
        </ul>

    </div>

    <div className="follow">
        <li>Follow us on</li>
        <div className="icons">
            <li><a className='social' href='/https://www.facebook.com/Formula1'><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a  className='social'href='https://www.instagram.com/f1/?hl=bg'><i className="fa-brands fa-instagram"></i></a></li>
            <li><a  className='social'href='https://twitter.com/F1'><i className="fa-brands fa-twitter"></i></a> </li>
        </div>
    </div>


</footer>

<div className='rights'>
<h3>Designed by <a href='https://www.facebook.com/gabcho.dokov'>Gabriel</a></h3>
<p>2023 Gabriel Dokov. All rights reserved</p>
</div>

</>
    )



}

export default Footer