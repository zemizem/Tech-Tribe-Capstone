import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Billing from './Pages/Billing';
import Employer from './Pages/Employer';
import Landing from './Pages/Landing';
import News from './Pages/News';
import JobSearch from './Pages/JobSearch';
import Profile from './Pages/Profile';
import Inbox from './Pages/Inbox';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route index element={<Landing/>}></Route>
          <Route path='/Home' element={<Home/>} />
          <Route path='LogIn' element={<LogIn/>} />
          <Route path='SignUp' element={<SignUp/>} />
          <Route path='/About' element={<About />} />
          <Route path='ContactUs' element= {<ContactUs/>} />
          <Route path='Billing' element={<Billing/>} />
          <Route path='Employer' element={<Employer />} />
          <Route path='/' element={<Landing />} />
          <Route path='News' element={<News/>} />
          <Route path='Search' element={<JobSearch/>} />
          <Route path='Profile' element={<Profile/>} />
          <Route path='Inbox' element={<Inbox/>} />     
      </Routes> 
   </BrowserRouter>
   </>      
)
}

export default App;
