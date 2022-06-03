import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Delete from '../components/Delete';
import styled from '../css/SinglePirate.module.css'

const SinglePirate = (props) => {
    const { id } = useParams();
    const [pirate,setPirate] = useState([])
    const [newCount, setNewCount] = useState({})
    const [attr,setAttr] = useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`).then(response=>{
            setPirate(response.data.pirate);
            setAttr(response.data.pirate.attributes)
        })
    }, []);
    
    const coutUp = (itemToCount,count) =>{
        var counting = parseInt(count) + 1;

        setNewCount({
            [itemToCount]:  counting
        })

        setPirate({
            ...pirate,
            [itemToCount]: counting
        })

        axios.patch(`http://localhost:8000/api/edit/pirate/${id}`,newCount).then(response=>{
            console.log(response.data)
        })
    }

    return(
        <div className={styled.singlePirate}>
            <h1> { pirate.crew === "Captain" ?    "Captain" : "" } {pirate.name} </h1>
            <h3>"{pirate.phrase}"</h3>
            <img src={pirate.image} alt="" />
            <div className="ship">{ pirate.crew} of the {pirate.ship} </div>
            <p><strong>You'll know him by: </strong> 
                {
                    attr.map((item,i) => {return <span key={i}>{item}, </span>
                    })
                }
            </p>
            <p className='ship'></p>
            <p><strong>Treaseure: </strong>{pirate.treasure}</p>
            <p><strong>He's Recieved: </strong> {pirate.likes} five star reviews</p>

            <div className={styled.halloweenVote}>
                <h2>Halloweed Dressup Vote:</h2>
                <p>For halloween {pirate.name} should wear (click to vote): </p>

                <p className={styled.vote} onClick={() => coutUp("eyePatch",pirate.eyePatch) }>Eye Patch: <strong>{pirate.eyePatch}</strong></p>
                <p className={styled.vote}  onClick={() => coutUp("pegLeg",pirate.pegLeg) }>Peg Leg: <strong>{pirate.pegLeg}</strong></p>
                <p className={styled.vote}  onClick={() => coutUp("hook",pirate.hook) }>Hook: <strong>{pirate.hook}</strong></p>
            </div>

            <h3>Q&A:</h3>
            <p>Does he have an eye patch: {pirate.featurePatch === true ? "Yes!" : "No"} </p>
            <p>Does he have a peg leg: {pirate.featurePegleg === true ? "Yes!" : "No"} </p>
            <p>Does he have a hook: {pirate.featureHook === true ? "Yes!" : "No"} </p>

            <Link className="edit" to={`/editPirate/${id}`}>Edit</Link>
            <Delete id={id} />
        </div>
    )
}

export default SinglePirate;