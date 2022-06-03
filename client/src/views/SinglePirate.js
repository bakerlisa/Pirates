import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Delete from '../components/Delete';
import styled from '../css/SinglePirate.module.css'
import Banner from '../components/Banner'

const SinglePirate = (props) => {
    const { id } = useParams();
    const [pirate,setPirate] = useState([])
    const [newCount, setNewCount] = useState({})
    const [crew,setCrew] = useState([props.mates])
    const [attr,setAttr] = useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`).then(response=>{
            setPirate(response.data.pirate);
            setAttr(response.data.pirate.attributes);
            setCrew(response.data.pirate.mates);
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
        <>
            <Banner page="singlepirate" subtitle={`Aboard the ${pirate.ship}`} title={`${pirate.name}`} />
            <div className="container">
                <div className={styled.singlePirate}>
                    <div className="col-2">
                        <img src={pirate.image} alt={pirate.name} />
                        <h3>"{pirate.phrase}"</h3>
                    </div>

                    <div className="col-2">
                        <h2> { pirate.crew === "captain" ?    "Captain" : `${ pirate.crew}`  } of the {pirate.ship}</h2>
                        <p class={styled.favorite}><strong>Vote as Your Favorite Pirate: </strong> {pirate.likes} </p>
                    
                        <p><strong>You'll know him by: </strong></p>
                        <p>
                            {
                                attr.map((item,i) => {return <span key={i}>{item}, </span>
                                })
                            }
                        </p>
                    </div>
                </div>

                <div className="aboutWrp">
                    {pirate.about}
                </div>

                <div className="crewWrp">
                    <h3>Crew:</h3>
                        <ul>
                        {
                            crew.map((item,i) => {
                                return <li key={i}>{item} </li>
                            })
                        }
                        </ul>
                </div>

                <div className="piratingStats">
                    <p><strong>Treaseure: </strong>{pirate.treasure}</p>
                </div>

                <div className="questionAnswer">
                    <h3>Q&A:</h3>
                    <p>Does he have an eye patch: {pirate.featurePatch === true ? "Yes!" : "No"} </p>
                    <p>Does he have a peg leg: {pirate.featurePegleg === true ? "Yes!" : "No"} </p>
                    <p>Does he have a hook: {pirate.featureHook === true ? "Yes!" : "No"} </p>
                </div>

                <Link className="edit" to={`/editPirate/${id}`}>Edit</Link>
            </div>
        </>
    )
}

export default SinglePirate;