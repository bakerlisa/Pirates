import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PopUp from './PopUp';

const Navigation = (props) => {
    const [active,setActive] = useState('inactive')
    const login = () =>{
        active == 'inactive' ? setActive('active') : setActive('inactive') 
    }

    return(
        <>
            <nav>
                <Link to="/pirates">Home</Link>
                <Link to="/createPirate">Create </Link>
                <Link to="/resources">Resources </Link>
                <div onClick={login}>Admin</div>
            </nav>

            <PopUp active={active} />
        </>
    )
}

export default Navigation;