import React from 'react';
import Footer from '../Components/MainFooter';
import NavigationBar from '../Components/NavigationBar';
import './About.css';
import AboutImage from '../Images/about_image.jpg';

/*ChatGPT for about content*/

function About() {
   
 return (
    <>
       <NavigationBar />          
         <main>
            <h1>About Us</h1>
            <div className="content">
                  <img src={AboutImage} alt="About"></img>
                  <div className="info">                     
                     <h3>Our Mission</h3>
                     <p>At Connect Pro, our mission is to revolutionize the hiring process by providing a seamless, efficient, and user-friendly platform that connects talented professionals with employers in need of their expertise. We aim to make hiring and job searching simple, fast, and effective for everyone involved.</p>
                     <h3>What We Do</h3>
                     <h4>For Professionals:</h4>
                     <p>We offer a robust platform where you can showcase your skills, experience, and professional achievements. Whether you're a seasoned expert or a rising star in your field, Connect Pro helps you find opportunities that align with your career goals. Create a profile, upload your resume, and start connecting with employers who value your expertise.</p>
                     <h4>For Employers:</h4>
                     <p>Finding the right talent can be challenging, but with Connect Pro, it doesn't have to be. Our platform allows you to search through a diverse pool of qualified professionals, post job openings, and connect with candidates who meet your specific needs. Whether you're hiring for a permanent position or a temporary project, Connect Pro streamlines the process, saving you time and resources.</p>
                     <h3>Our Vision</h3>
                     <p>We envision a world where finding the right job or the right talent is no longer a daunting task. By leveraging technology and innovation, Connect Pro aims to become the leading marketplace for professional connections, driving success for both job seekers and employers.</p>
                  </div>
            </div>
         </main>         
      <Footer />
      
    </>
 ) 
}

export default About;