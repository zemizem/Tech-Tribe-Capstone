import React from 'react';
import './News.css';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/MainFooter';

function News() {

  return (
    <>
    <NavigationBar/>
      <main>
        {/* Chatgpt for the wording */}
        <div className="news_container">
          <h2>Stay Up to Date</h2>
              <p>Welcome to the Connect Pro news hub! Here, you can stay informed about the latest developments, updates, and trends in the professional world. Whether you're an employer or a job seeker, our news section is designed to keep you ahead of the curve.</p>
            <h3>Latest News and Updates</h3>
          <div className='news_info' id='paragraph'>
          <h4>Platform Enhancements:</h4> <p>Discover the newest features and improvements on Connect Pro. We’re constantly updating our platform to provide you with the best user experience and the most efficient tools for your hiring or job search needs.</p>
          <h4>Industry Insights:</h4> 
          <p>Gain valuable insights into the latest trends and changes across various industries. Stay informed about what’s happening in your field and understand how it impacts your career or hiring strategies.</p> 
          <h4>Success Stories:</h4> 
          <p>Read inspiring success stories from professionals and employers who have found success through Connect Pro. Learn from their experiences and get tips on how to make the most out of our platform.</p>
          <h4>Upcoming Events:</h4> 
          <p>Stay in the loop about upcoming webinars, workshops, and networking events hosted by Connect Pro. These events are designed to help you grow your professional network and enhance your skills.</p>
          <h4>Subscribe to Our Newsletter: </h4>
          <form action="#" method="post">
          <div className="form-group">
                    <input type="email" placeholder='Email' id="subscribe_email" name="email" required/>
              <button type='submit' id='subscribe_button' >Subscribe</button>
                </div>
          </form>
          <br></br>
          <h3>Join Our Socials!</h3>
          </div>
          </div>
      </main>
    <Footer />
    </>
  )
}

export default News;