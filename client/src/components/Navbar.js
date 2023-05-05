import React from 'react';

function NavBar() {
    return (
        <nav>
            <div className='navLeft'>
                <button>Login</button>
            </div>
            <div className='navRight'>
                <a href='#'>Account</a>
            </div>
        </nav>
    );
}

export default NavBar;