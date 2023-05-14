import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
//make sure to leave the <Link to='/> because it's the home page

function NavBar() {

    const isLoggedIn = Auth.loggedIn();

    const handleLogout = () => {
        // Call the logout function from the Auth service
        localStorage.removeItem('email');
        Auth.logout();
      };

  return (
    <div className='navDiv'>
        <nav>
        <div className='navLeft'>
            <Link to='/'>
                <img width={50} height={50} src="logo.png" alt="logo" />
            </Link>

        </div>
        <div className='navRight'>
            {isLoggedIn ? (
                <div>
                    <Link to='/create'>
                        <button>Create</button>
                    </Link>
                    <Link to='/search'>
                        <button>Search</button>
                    </Link>
                    <Link to='/favorites'>
                        <button>Favorites</button>
                    </Link>
                    <Link>
                        <button onClick={handleLogout}>Logout</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to='/signup'>
                        <button>SignUp</button>
                    </Link>
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                </div>
            )}
            
        </div>
        </nav>
    </div>
  );
}

export default NavBar;
