import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../login.css'
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // goes to search page after logging in
        navigate('/search');
        console.log(email);
        console.log(password);
        console.log("User login info ^^^");
      };

    return (
        <section>
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

                    <div href='links'>
                        <p>
                            Don't have an account? <Link to="/signup">Sign up here.</Link>
                        </p>
                    </div>
                        
                    
                    
                </div>
            </div>
        </section>
        
        
    );
    
}

export default Login;