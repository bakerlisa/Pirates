import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useHistory,Link } from 'react-router-dom';

import Form from '../components/Form';



const AddPirate = (props) => {
    const history = useHistory();
    const [form,setForm] = useState({})

    const [dbError,setDBError] = useState({ })

    const [error,setError] = useState({
        name: false,
        crew: false
    })
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/create/pirate', form)
            .then(res =>  { 
                history.push("/pirates"); 
            })
            .catch(err => {
                setDBError(err.response.data.error.errors)
            });
    }

    return(
        <div>
            <Form  title="Add Pirate" form={form} setForm={setForm}  onSubmitHandler={onSubmitHandler} dbError={dbError} error={error} setError={setError} />
            <Link to="/pirates" className="cancle">Cancle</Link>
        </div>
    )
}

export default AddPirate;