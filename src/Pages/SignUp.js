import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';


const SignUp = () => {
    const navigate = useNavigate(); 
  
    useEffect(() => {
      document.getElementById('first_name').value = 'John';
      document.getElementById('last_name').value = 'Doe';
      document.getElementById('email').value = 'john.doe@example.com';
      document.getElementById('password').value = 'password123';
      document.getElementById('password2').value = 'password123';
    }, []);

   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate('/Home'); 
    };

  return(
    <>
    <main>
                <div className="signup_container">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="signup_form">
                            <label htmlFor="first_name">First Name:
                                <input type="text" id="first_name" name="first_name" required />
                            </label>
                        </div>
                        <div className="signup_form">
                            <label htmlFor="last_name">Last Name:
                                <input type="text" id="last_name" name="last_name" required />
                            </label>
                        </div>
                        <div className="signup_form">
                            <label htmlFor="email">Email:
                                <input type="email" id="email" name="email" required />
                            </label>
                        </div>
                        <div className="signup_form">
                            <label htmlFor="password">Password:
                                <input type="password" id="password" name="password" required />
                            </label>
                        </div>
                        <div className="signup_form">
                            <label htmlFor="password2">Confirm Password:
                                <input type="password" id="password2" name="password2" required />
                            </label>
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </main>
    </>
  )
}

export default SignUp;
