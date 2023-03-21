import f1logo from '../../images/f1-logo-white.jpg'
import './Footer.css'


function Footer(){

    return(
        
        <>
    <footer className="footer">

    <div className="foothead">
        <img className='footerimg' src={f1logo} alt=""/>
    </div>

    <div className="footerfirst">
        <ul className="footlist">
            <li>Tour packages</li>
            <li>Personalized offers</li>
            <li>Special deals</li>
            <li>Summer holiday</li>
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
            <li><i className="fa-brands fa-facebook-f"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
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