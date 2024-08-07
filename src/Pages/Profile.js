import React from 'react';
import './Profile.css';
import NavigationBar from '../Components/NavigationBar';
import ProfilePic from '../Images/profile.jpg';
import Footer from '../Components/MainFooter';
/*ChatGPT for profile content*/
function Profile() {

  return (
    <>
    <NavigationBar/>    
        <div className="profile">
            <img src={ProfilePic} alt="profile_Pic" className='profile_pic' />
            <div className='profile_banner'>Change Picture</div>
          </div>
          <div className="profile_container" >          
          <div className='left_profile'>
            <ul className='profile_menu'>
                  <li className="profile_items">
                    <a href=" " className="profile_links">Profile </a>
                    </li>
                  <li>
                    <a href=" " className="profile_links">Job Preferences </a>
                    </li> 
                  <li>
                    <a href=" " className="profile_links">Account Settings</a>
                    </li> 
                    <li>
                    <a href=" " className="profile_links">Resume</a>
                    </li> 
                  <li>
                    <a href=" " className="profile_links">Help Center</a>
                    </li> 
                  <li>
                    <a href="/" className="profile_links">Sign Out</a>
                    </li>               
                </ul>
          </div>
          <div className="right_profile">
            <h1>Account Details</h1>
            <h3>Personal Information</h3>
            <ul>Name: Emily Zhang </ul>
            <ul>Job Title: Graphic Designer </ul>
            <ul>Location: Los Angeles, CA</ul>
            <br/>
            <h3>Education</h3>
            <h5>Bachelor of Fine Arts in Graphic Design</h5>
            <p>California Institute of the Arts</p>
            <br/>
            <h3>Work Experience</h3>
            <h5>Graphic Designer</h5>
            <p>Creative Minds, Los Angeles, CA
            Feb 2020 - Present</p>
            <li>Designed branding materials, including logos, brochures, and business cards for various clients. </li>
            <li>Collaborated with the marketing team to create visual content for social media and email campaigns.</li>
            <li>Managed multiple projects simultaneously, meeting tight deadlines and exceeding client expectations.</li>
            <br/>
            <h5>Junior Graphic Designer</h5>
            <p>Visual Concepts, Los Angeles, CA
            Jun 2018 - Jan 2020</p>
            <li>Assisted in the design and production of marketing materials. </li>
            <li>Created mockups and prototypes for client presentations.</li>
            <li>Contributed to the development of brand guidelines for new clients.</li>
            <br/>
            <h3>Skills</h3>
            <li>Adobe Photoshop</li>  
            <li>Adobe Illustrator</li>
            <li>Adobe InDesign</li>   
            <li>Branding</li>    
            <li>Typography</li>   
            <li>Layout Design</li>   
            <br/>            
            <h2>ConnectPro basic plan</h2>
            <p>
              Upgrade to ConnectPro premium to access  top-tier job listings, advanced networking tools, and personalized career support. Click <a href='Billing'>here </a> to upgrade.
              </p>
            
             
            <a href=" " className="edit_profile">Edit Profile</a>
        </div>
        </div>
    <Footer/>
    </>
     
  )
}

export default Profile;