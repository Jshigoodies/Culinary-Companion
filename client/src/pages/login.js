import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link, /*useNavigate*/} from 'react-router-dom';
import '../login.css';
import {useMutation} from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function Login() {

    const isLoggedIn = Auth.loggedIn();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const [login, {error, data}] = useMutation(LOGIN_USER);

    const location = useLocation();

    useEffect(() => {
        // Get the current URL path
        const path = location.pathname;

        // Select the HTML element that you want to modify
        const container = document.querySelector('body');

        // Set the overflow property based on the current path
        if (path === '/search') {
            container.style.overflow = 'auto';
        } else if (path === '/login' || path === '/signup') {
            container.style.overflow = 'hidden';
        }
    }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Set the username value to be the same as the email value
        const username = email;
        localStorage.setItem('email', email);
    
        // Perform the login mutation
        const { data } = await login({
          variables: { email, password, username }
        });
    
        const token = data.login.token;
        Auth.login(token);
        setErrorMessage('');
        //navigate('/search');
      } catch (error) {
        console.error(error);
        setErrorMessage('Wrong Username Or Password!');
      }
  };

      return (
        <section>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            
            {isLoggedIn ? (
                <div className='login'>
                    <div className='content'>
                        <h1>You are already logged in</h1>
                    </div>
                </div>
            ) : (
                <div className='login'>
                    <div className='content'>
                        <h1>Login</h1>
                        <form className='form' onSubmit={handleSubmit}>
                            <div className='inputBx'>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                <i>Username</i>
                            </div>
                            <div className='inputBx'>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <i>Password</i>
                            </div>
                            <div className='inputBx'>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                        {errorMessage && <p>{errorMessage}</p>}
    
                        <div className='links'>
                            <p>
                                Don't have an account? <Link to="/signup">Sign up here.</Link>
                            </p>
                        </div>
                            
                        
                        
                    </div>
                </div>
            )}
            
        </section>
        
        
    );
    
}

export default Login;