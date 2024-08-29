import React from 'react';
import './LogIn.css';

function LogIn () {

  return (
    <>
    <main>
        <div className="login_container">
            <h2>Login</h2>
            <form action="#" method="post">
                <div className="login_form">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="login_form">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">
                <a href="/Home" id='login_link'>Login</a>
                </button>
                
            </form>
        </div>
    </main>
    </>
  )
}

export default LogIn;
