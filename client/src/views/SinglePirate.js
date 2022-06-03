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
                        <h3 class={styled.phrase}>"{pirate.phrase}"</h3>
                    </div>

                    <div className="col-2">
                        <h2> { pirate.crew === "captain" ?    "Captain" : `${ pirate.crew}`  } of the {pirate.ship}</h2>
                        <p class={styled.favorite}><strong>Vote as Your Favorite Pirate: </strong> {pirate.likes} </p>
                        <p><strong>Ships Taken: </strong>{pirate.treasure}</p>
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
                    <h2>About</h2>
                    <p>{pirate.about}</p>
                </div>

                <div className={styled.crewWrp}>
                    <h2>Known Crew:</h2>
                        <div className={styled.imageWrap}>
                            <img src={pirate.shipImage} alt={`Image of the ${pirate.ship}`} />
                        </div>
                        <ul>
                        {
                            crew.map((item,i) => {
                                return <li key={i}>{item} </li>
                            })
                        }
                        </ul>
                </div>

                <Link className="edit" to={`/editPirate/${id}`}>Edit</Link>
            </div>
        </>
    )
}

export default SinglePirate;