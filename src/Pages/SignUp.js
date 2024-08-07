import React from 'react';
import './SignUp.css';

function SignUp() {

  return(
    <>
    <main>
        <div className="signup_container">
            <h2>Sign Up</h2>
            <form action="#" method="post">
                <div className="signup_form">
                    <label for="first_name">First Name: <input type="text" id="first_name" name="first_name" required /></label>
                    
                </div>
                <div className="signup_form">
                    <label for="last_name">Last Name: <input type="text" id="last_name" name="last_name" required /></label>
                    
                </div>
                <div className="signup_form">
                    <label for="email">Email: <input type="text" id="first_name" name="email" required /></label>
                    
                </div>
                <div className="signup_form">
                    <label for="password">Password: <input type="password" id="password" name="password" required /></label>
                    
                </div>
                <div className="signup_form">
                    <label for="password2">Confirm Password: <input type="password2" id="password2" name="password2" required /></label>
                    
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </main>
    </>
  )
}

export default SignUp;
