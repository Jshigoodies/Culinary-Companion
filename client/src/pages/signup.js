import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login.css';
import { useLocation } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function Signup() {

    const isLoggedIn = Auth.loggedIn();

    const [addUser, {error, data}] = useMutation(ADD_USER);
    const [login, {errors, datas}] = useMutation(LOGIN_USER);
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

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // goes to search page after signing in
        navigate('/search');
        // console.log(email);
        // console.log(password);
        // console.log("User login info ^^^");
        localStorage.setItem('email', email);
        try {
            const username = email;
            await addUser({
                variables: {
                    username,
                    email,
                    password
                },
            })

            const { data } = await login({
                variables: { email, password, username }
              });
          
              const token = data.login.token;
              Auth.login(token);

            //console.log(data);
        }
        catch (e)
        {
            console.log(e);
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
                        <h1>SignUp</h1>
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

                        <div className='links'>
                            <p>
                                Already have an account? <Link to="/login">Log in here.</Link>
                            </p>
                        </div>
                            
                        
                        
                    </div>
                </div>
            )}

            
        </section>
    );
}

export default Signup;