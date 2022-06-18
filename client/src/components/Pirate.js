import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../css/PirateStyles.module.css'
import Like from './Like';

const Pirate = (props) => {
    const [attributes,setAttributes] = useState(props.pirate.attributes)

    return(
        <div className={styled.pirateBox}>            
            <div className={styled.pirateImgWrp}>
                <img className={styled.pirateImg} src={props.pirate.image} alt={props.pirate.name} />
            </div>
            <Link to={`/pirate/${props.pirate._id}`} className={styled.name}>{props.pirate.name}</Link>
            
            <p className={styled.treasure}><strong>Ships Taken:</strong> {props.pirate.treasure}</p>
        </div>
    )
}

export default Pirate;