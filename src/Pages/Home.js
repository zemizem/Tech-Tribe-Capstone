import React from 'react';
import './Home.css'
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/MainFooter';
import Dashboard from '../Images/dashboard_image.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home () {
  
  return (
    <>
    <NavigationBar/>
    <div className='home_body'>
    <div className='dashboard_image' style={{backgroundImage: `url(${Dashboard})`}}>
      <div className='dashboard_text'>
        <h1 id='welcome'>Welcome!</h1>
        <h2 id='completion'>Profile Completion: 85%</h2>
        <p>Complete your profile to increase your chances of being noticed by employers!</p>
        <h2 id='plan'><strong>Premium Status:</strong> Basic Plan</h2>
        <p>Upgrade to Premium for exclusive features!</p>
       </div>      
      </div> 
    
    <div className='dashboard_content'>
        <Carousel>
            <Carousel.Item>
        <h3 className='home_header'>Job Recommendations:</h3>
        <div className='container_card'>          
          {/* Inner Card 1 */}
          <div className='content_card'>
              <h5 className="job-header">Junior Software Engineer</h5>
              <p className="job-subheading">Tech Solutions Inc. | San Francisco, CA</p>
              <p className="job-posted">Posted: 3 days ago</p>
            </div>
             {/* Inner Card 2 */}
             <div className='content_card'>
              <h5 className="job-header">Digital Marketing Specialist</h5>
              <p className="job-subheading">MarketGuru | New York, NY</p>
              <p className="job-posted">Posted: 5 days ago</p>
           </div>
          {/* Inner Card 3 */}
           <div className='content_card'>
              <h5 className="job-header">Senior UX/UI Designer</h5>
              <p className="job-subheading">Creative Minds | Los Angeles, CA</p>
              <p className="job-posted">Posted: 1 week ago</p>
          </div>          
        </div>
        </Carousel.Item>

        {/* Upcoming Events */}
        <Carousel.Item>
          <h3 className='home_header'>Upcoming Events:</h3>
            {/* Inner Card 4 */}
          <div className='container_card'>            
            <div className='content_card'>
              <h5 className="event-header">Webinar: Resume Building for Tech Professionals</h5>
              <p className="event-subheading">Date: August 10, 2024 | 2:00 PM (PST)</p>
              <p className="event-link"><button type="register">Register Now</button></p>
              
            </div>
            {/* Inner Card 5 */}
            <div className='content_card'>
              <h5 className="event-header">Virtual Networking Session: Marketing Professionals</h5>
              <p className="event-subheading">Date: August 15, 2024 | 4:00 PM (PST)</p>
              <p className="event-link"><button type="register">Register Now</button></p>
            </div>
          </div>
          </Carousel.Item>

            {/* Tips & Resources */}
            <Carousel.Item>
             <h3 className='home_header'>Tips & Resources:</h3> 
          <div className='container_card'>          
              {/* Inner Card 6 */}
            <div className='content_card'>
                  <h5 className="resource-header">How to Write a Compelling Cover Letter</h5>
                  <p className="resource-subheading">Learn how to make your cover letter stand out.</p>
                  <p className="resource-more"><a href=" " className='resource'>Read more</a></p>
              </div>
               {/* Inner Card 7 */}
              <div className='content_card'> 
                    <h5 className="resource-header">Networking Tips for Job Seekers</h5>
                    <p className="resource-subheading">Strategies to expand your professional network.</p>
                    <p className="resource-more"><a href=" " className='resource'>Read more</a></p>
                </div>
          </div>
          </Carousel.Item>
          </Carousel>
        </div>
   </div>
   <Footer/>
    </>
  )
}


export default Home;