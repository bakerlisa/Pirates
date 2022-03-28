import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/PirateStyles.module.css'
import Like from './Like';

const Pirate = (props) => {
    const [attributes,setAttributes] = useState(props.pirate.attributes)

    return(
        <div className={styled.pirateBox}>            
            <img className={styled.pirateImg} src={props.pirate.image} alt={props.pirate.name} />
            <Link to={`/pirate/${props.pirate._id}`} className={styled.name}>{props.pirate.name}</Link>
            <p className={styled.crew}>{props.pirate.crew} of {props.pirate.ship} </p>
            <ul className={styled.attrList}>
                <li><strong>Attributes: </strong></li>
            {
                attributes.map((item,i) => {
                    return <li key={i}>{item}, </li>
                })
            }
            </ul>
            
            <p className={styled.treasure}><strong>Treasure:</strong> {props.pirate.treasure}</p>
            {/* {
                props.pirate.crew === "Captain" ? <Like like={props.pirate.likes} id={props.pirate._id} /> : ""
            } */}
        </div>
    )
}

export default Pirate;