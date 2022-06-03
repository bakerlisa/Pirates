import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return(
        <nav>
            <Link to="/pirates">Home</Link>
            <Link to="/createPirate">Create </Link>
        </nav>
    )
}

export default Navigation;