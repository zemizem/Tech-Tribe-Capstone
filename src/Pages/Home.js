import React from 'react';
import './Home.css'
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/MainFooter';
import Dashboard from '../Images/dashboard_image.jpg';


function Home () {
  
  return (
    <>
    <NavigationBar/>
    <div className='dashboard_image' style={{backgroundImage: `url(${Dashboard})`}}>
      <div className='dashboard_text'>
        <h1>Welcome!</h1>
        <h2 id='completion'>Profile Completion: 85%</h2>
        <p>Complete your profile to increase your chances of being noticed by employers!</p>
        <h2 id='plan'><strong>Premium Status:</strong> Basic Plan</h2>
        <p>Upgrade to Premium for exclusive features!</p>
       </div>      
        <div className='dashboard_content'>
        <div className='recommendation'>
          <h3 className='home_header'>Job Recommendations:</h3>
          <ol> 
            <li>
              <h5 className="job-header">Junior Software Engineer</h5>
              <p className="job-subheading">Tech Solutions Inc. | San Francisco, CA</p>
              <p className="job-posted">Posted: 3 days ago</p>
            </li>
            <li>
              <h5 className="job-header">Digital Marketing Specialist</h5>
              <p className="job-subheading">MarketGuru | New York, NY</p>
              <p className="job-posted">Posted: 5 days ago</p>
            </li>
            <li>
              <h5 className="job-header">Senior UX/UI Designer</h5>
              <p className="job-subheading">Creative Minds | Los Angeles, CA</p>
              <p className="job-posted">Posted: 1 week ago</p>
            </li>
          </ol>
        </div>
          <div className='events'>
            <h3 className='home_header'>Upcoming Events:</h3>
            <ul>
              <li>
              <h5 className="event-header">Webinar: Resume Building for Tech Professionals</h5>
              <p className="event-subheading">Date: August 10, 2024 | 2:00 PM (PST)</p>
              <p className="event-link">Register Now</p>
            </li>
            <li>
              <h5 className="event-header">Virtual Networking Session: Marketing Professionals</h5>
              <p className="event-subheading">Date: August 15, 2024 | 4:00 PM (PST)</p>
              <p className="event-link">Register Now</p>
            </li>
            </ul>
          </div>
          <div className='resources'>
            <h3 className='home_header'>Tips & Resources:</h3>
              <ul>
                <li>
                  <h5 className="resource-header">How to Write a Compelling Cover Letter</h5>
                  <p className="resource-subheading">Learn how to make your cover letter stand out.</p>
                  <p className="resource-more">Read more</p>
                </li>
                <li>
                    <h5 className="resource-header">Networking Tips for Job Seekers</h5>
                    <p className="resource-subheading">Strategies to expand your professional network.</p>
                    <p className="resource-more">Read more</p>
                </li>
              </ul>
          </div>
        </div>
     </div>
    <div className='dashboard_content'>


    </div>
    <Footer/>
    </>
  )
}


export default Home;