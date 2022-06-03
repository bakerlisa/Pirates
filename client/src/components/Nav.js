import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <Link to="/pirates">Home</Link>
            <Link to="/createPirate">Create </Link>
        </nav>
    )
}
export default Nav;