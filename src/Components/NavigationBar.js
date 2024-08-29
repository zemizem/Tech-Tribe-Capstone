import React, {useState, useEffect, useCallback} from 'react';
import '../Components/NavigationBar.css';


function NavigationBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);

 const toggleMenu = useCallback(() => {
   setIsMenuActive(prevState => !prevState);
 }, []);

 useEffect(() => {
   const menu = document.getElementById('mobile_menu1');
   if (menu) {
     menu.addEventListener('click', toggleMenu);
   }

   return () => {
     if (menu) {
         menu.removeEventListener('click', toggleMenu);
     }
   };
 }, [toggleMenu]);

 return (
  <>
      <div className="navbar1" id= 'navbar_about1'>
         <h1><a href="Home" className='logo'>ConnectPro</a></h1>   
      <div className={`navbar_toggle1 ${isMenuActive ? 'is-active' : ''}`} id="mobile_menu1">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
               </div> 
               <ul className={`navbar_menu1 ${isMenuActive ? 'active' : ''}`}>
                        <li className="navbar_items">
                           <a href="/Home" className="navbar_links">Home</a>
                        </li>
                        <li>
                           <a href="Search" className="navbar_links">Job Search </a>
                        </li> 
                        <li>
                           <a href="Inbox" className="navbar_links">Inbox</a>
                        </li> 
                        <li>
                           <a href="Billing" className="navbar_links">Billing </a>
                        </li> 
                        <li className="navbar_item">
                           <a href="Profile" className="navbar_links">Profile</a>
                        </li>
                        <li className="navbar_items">
                           <a href="Employer" className="navbar_links">Employers</a>
                           </li>
                        
                        
               {/*} <li className='search_bar'>
                           <div className="search">
                              <input type="text" placeholder="Search"></input>
                           </div>
                        </li> */}
                  </ul>       
      </div>    
       
     </>
  )
}

export default NavigationBar;