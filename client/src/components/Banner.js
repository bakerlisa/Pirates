import React from 'react'
import styled from '../css/Banner.module.css'

const Banner = (props) => {
    return(
        <div className={`${styled.banner} ${props.page}`}>
            <h1><span>{props.subtitle} {props.member}</span>  {props.title} </h1>
        </div>
    )
}

export default Banner;