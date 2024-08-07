import React from 'react';
import './JobSearch.css';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/MainFooter';


function JobSearch() {

  return (
    <>
    <NavigationBar/>
    <main>
        <div className="search_container">
            <h2>Find Your Dream Job as a Software Engineer</h2>
            <form className="search-form" action="#" method="get">
                <input type="text" id="job-title" name="job-title" placeholder="Software Engineer" value="Software Engineer" readonly/>
                <input type="text" id="location" name="location" placeholder="Location" required/>
                <button id='search_button' type="submit">Search</button>
            </form>
            <section className="job-listings">
                <h3>Available Job Openings</h3>
                <div className="job-card">
                    <h3>Frontend Developer</h3>
                    <p>Company: Tech Innovators</p>
                    <p>Location: San Francisco, CA</p>
                    <p>Requirements: 3+ years of experience in frontend development, proficient in React and Angular.</p>
                    <a href=" " class="btn">Apply Now</a>
                </div>
                <div className="job-card">
                    <h3>Backend Developer</h3>
                    <p>Company: Cloud Solutions</p>
                    <p>Location: New York, NY</p>
                    <p>Requirements: 5+ years of experience in backend development, strong knowledge of Node.js and Python.</p>
                    <a href=" " class="btn">Apply Now</a>
                </div>
                <div className="job-card">
                    <h3>Full Stack Developer</h3>
                    <p>Company: Web Creations</p>
                    <p>Location: Austin, TX</p>
                    <p>Requirements: 4+ years of experience in full stack development, proficient in JavaScript, HTML, CSS, and databases.</p>
                    <a href=" " class="btn">Apply Now</a>
                </div>
            </section>
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default JobSearch;