import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import styled from '../css/DeleteStyles.module.css'

const Delete = (props) =>{
    const history = useHistory();
    
    const onDeleteHandler = (i) => {
        if(window.confirm("Are you sure you want to remove this Priate?")){ 
            axios.delete(`http://localhost:8000/api/delete/pirate/${props.id}`).then(response=>{
                console.log("Pirate deleted")
                history.push("/pirates"); 
            })
        }
    }

    return(
        <div className={styled.delete} onClick={() => {onDeleteHandler(props.indx)} } >Delete</div>
    )
}

export default Delete;