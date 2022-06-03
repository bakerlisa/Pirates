import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Pirate from '../components/Pirate';

const Home = (props) => {
    const [pirates,setPirates] = useState([])
    
    const _ = require("lodash"); 
    let gfg = _.sortBy(pirates, ['_v:', 'name']);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates`).then(response=>{
            setPirates(response.data.pirates);
        })
    }, []);


    return(
        <>
            <Banner title="Current Captain Roster" subtitle="Pirate Port: Tortuga" page="homebanner" />
            <div>
                <div className="allPirates">
                    {
                        gfg.map((item,i) => {
                            return <Pirate key={i} pirate={item}/>
                        }) 
                    }
                </div>
            </div>
        </>
    )
}

export default Home;