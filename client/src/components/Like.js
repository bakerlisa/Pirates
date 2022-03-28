import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from '../css/LikesStyles.module.css'

const Like = (props) => {
    const [pirate,setPirate] = useState({})

    const addLikeHandler = (amount) =>{
        setPirate({
            ...pirate,
            likes: pirate.likes+1
        })

    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${props.id}`).then(response=>{
            console.log(response.data.pirate)
            setPirate(response.data.pirate);
        })
    }, [pirate.likes]);



    return(
        <p className={styled.likes} onClick={() => addLikeHandler() }><strong>Votes for Best Captain:</strong> {}</p>
    );
}

export default Like;