import React from 'react'; 
import './MainFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <> 
    <div className="footer_container1">
      <div className="social_icons">
        <a href='https://www.linkedin.com/' target='blank'>
          <FontAwesomeIcon icon={faLinkedin} className='social_icon' style={{ color: "#ffffff" }}/>
            </a>
        <a href='https://www.instagram.com/' target='blank'>
          <FontAwesomeIcon icon={faInstagram} className='social_icon' style={{ color: "#f6f7f9" }}/>
            </a>
        <a href='https://www.facebook.com/' target='blank'>
          <FontAwesomeIcon icon={faFacebook} className='social_icon' style={{ color: "#ffffff" }}/>
            </a>
        <a href='https://www.tiktok.com/' target='blank'>
          <FontAwesomeIcon icon={faTiktok} className='social_icon' style={{ color: "#ffffff" }}/>
            </a>
        <a href='https://www.youtube.com/' target='blank'>
          <FontAwesomeIcon icon={faYoutube} className='social_icon' style={{ color: "#ffffff" }}/>
            </a>
        </div>
      <div className="footer_navbar1">
        <ul>
            <li><a href="/About">About</a></li>
            <li><a href="/News">News</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
          </ul>
  
    </div>
      <footer className="footer2">
      <p>&copy; {currentYear} ConnectPro. All rights reserved.</p>
    </footer>
    </div>
    </>
  )
}



export default Footer;