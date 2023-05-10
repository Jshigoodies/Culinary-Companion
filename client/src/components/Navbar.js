import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navDiv'>
        <nav>
        <div className='navLeft'>
            <a href='/'><p>LOGO GOES HERE</p></a>
        </div>
        <div className='navRight'>
            <Link to='/create'>
                <button>Create</button>
            </Link>
            <Link to='/search'>
                <button>Search</button>
            </Link>
            <Link to='/signup'>
                <button>SignUp</button>
            </Link>
            <Link to='/login'>
                <button>Login</button>
            </Link>
        </div>
        </nav>
    </div>
  );
}

export default NavBar;
