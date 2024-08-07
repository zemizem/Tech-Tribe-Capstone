import React, {useState, useEffect, useCallback} from 'react';
import './Landing.css';
import homepage from '../Images/homepage_image.jpg';
import logo from '../Images/logo.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

/*Youtube tutorial for the navigation toggle */
function Body (){ 
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuActive(prevState => !prevState);
  }, []);

  useEffect(() => {
    const menu = document.getElementById('mobile_menu');
    if (menu) {
      menu.addEventListener('click', toggleMenu);
    }

    return () => {
      if (menu) {
          menu.removeEventListener('click', toggleMenu);
      }
    };
  }, [toggleMenu]);

  const currentYear = new Date().getFullYear();
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar_container" id= 'navbar'>
              <img src={logo} alt="navbar_logo"/>
        <div className={`navbar_toggle ${isMenuActive ? 'is-active' : ''}`} id="mobile_menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
           </div>
       </div>
       <ul className={`navbar_menu ${isMenuActive ? 'active' : ''}`}>
                  <li className="navbar_item">
                      <a href="LogIn" className="navbar1_link">Login</a>
                  </li>
                  <li>
                      <a href="SignUp" className="navbar1_link">Sign Up</a>
                  </li> 
              </ul>            
      </nav>       
        <div className="body-container">
          <div className="left-content">
              <div className="main-heading">Connect Pro</div>
              <div className="sub-heading">Your dream job awaits!</div>
              <div className="description">
              Welcome to Connect Pro, your premier digital marketplace designed to bridge the gap between skilled professionals and employers seeking top talent. Whether you're looking for full-time employees or temporary team members, Connect Pro is your go-to platform for finding the perfect match.
              </div>
          </div>
          <div class="right-content">
              <img src={homepage} alt="homepage" />
          </div>
        </div>
        <div className="footer_containers">
      <div className="social_icons">
        <a href='https://www.linkedin.com/' target='blank'>
          <FontAwesomeIcon icon={faLinkedin} className='socials_icon' style={{ color: "#ffffff" }}/>
            </a>
        <a href='https://www.instagram.com/' target='blank'>
          <FontAwesomeIcon icon={faInstagram} className='socials_icon' style={{ color: "#f6f7f9" }}/>
            </a>
        <a href='https://www.facebook.com/' target='blank'>
          <FontAwesomeIcon icon={faFacebook} className='socials_icon' style={{ color: "#ffffff" }}/>
            </a>
        <a href='https://www.tiktok.com/' target='blank'>
          <FontAwesomeIcon icon={faTiktok} className='socials_icon' style={{ color: "#ffffff" }}/>
            </a>
        <a href='https://www.youtube.com/' target='blank'>
          <FontAwesomeIcon icon={faYoutube} className='socials_icon' style={{ color: "#ffffff" }}/>
            </a>
        </div>
      <div className="footer_navbars">
        <ul>
            <li><a href="/About">About</a></li>
            <li><a href="/News">News</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
            <li><a href="/OurTeam">Our Team</a></li>
          </ul>
    </div>
    <footer className="footer2">
      <p>&copy; {currentYear} ConnectPro. All rights reserved.</p>
    </footer>
    </div>
    </>
  )
}

export default Body;
