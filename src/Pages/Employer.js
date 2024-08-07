import React from 'react';
import '../Pages/Employer.css';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/MainFooter';
import Employee1 from '../Images/Employee_1.jpg';
import Employee2 from '../Images/Employee_2.jpg';
import Employee3 from '../Images/Employee_3.png';

function Employer() {

  return (
    <body>
    <NavigationBar/>
    <nav className='body'>
    <div className="job_container">
        <div class="left-panel">
            <h1>Browse Professionals</h1>
            <h3>For people looking to hire</h3>
            <p>Explore detailed profiles of potential candidates. Each profile includes a resume, portfolio, and professional achievements, giving you a complete picture of their capabilities.</p>
            <p>Reach out to professionals directly through our secure messaging system. Discuss your job requirements, schedule interviews, and find the perfect fit for your team.</p>
        </div>
        <div className="right-panel">
            <div className="job_card">
                <img src={Employee1} alt="David Ramirez" /> 
                <h3>David Ramirez</h3>
                <h5>Digital Marketing Specialist</h5>
                <p>Creative digital marketing specialist with 5 years of experience in social media, SEO, and content creation. Proven success in increasing engagement and driving campaign results through data-driven strategies.

</p>
                <a href=" ">&#8594;</a>
            </div>
            <div className="job_card">
                <img src={Employee2} alt="Michael Johnson" />
                <h3>Michael Johnson</h3>
                <h5> Data Analyst</h5>
                <p>Detail-oriented data analyst with 6 years of experience in data management and visualization. Skilled in SQL, Python, and data tools like Tableau, with a focus on turning data into actionable insights.</p>
                <a href=" ">&#8594;</a>
            </div>
            <div className="job_card">
                <img src={Employee3} alt="Sarah Thompson" />
                <h3>Sarah Thompson</h3>
                <h5>Senior Software Engineer</h5>
                <p>Experienced software engineer with 8 years in developing scalable web applications. Skilled in JavaScript, React, and Node.js, with a strong track record of optimizing performance and leading engineering teams.</p>
                <a href=" ">&#8594;</a>
            </div>
        </div>
        </div>
     </nav>
    <Footer/>
    </body>
  )
}

export default Employer;