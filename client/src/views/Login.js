import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/Login.module.css'

const Login = (props) => {
    return(
        <div className={styled.banner}>
            <div className={styled.txtWrp}>
                <h1>Pirates</h1>
                <Link to="/pirates" className={styled.button}>Join a Crew</Link>
            </div>    
        </div>
    )
}

export default Login;