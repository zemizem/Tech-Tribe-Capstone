import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import '../Pages/ContactUs.css';
import Footer from '../Components/MainFooter';

function ContactUs() {
  return (
  <>
    <NavigationBar/>
    <div className='main'>       
      <div className="container">
        <h1>Contact Us</h1>
          </div>
            <form action="#" method="post">
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                </div>
                <div className="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                </div>
                <div className="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>        
    </div>
  <Footer/>
  </>
  )
} 

export default ContactUs;