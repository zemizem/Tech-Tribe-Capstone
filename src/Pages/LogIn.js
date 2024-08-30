import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        
        document.getElementById('username').value = 'testuser';
        document.getElementById('password').value = 'testpassword';

       
        navigate('/Home');
    }, [navigate]);


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
                <button type="button" onClick={() => navigate('/Home')}>Login</button>
                
            </form>
        </div>
    </main>
    </>
  )
}

export default LogIn;
