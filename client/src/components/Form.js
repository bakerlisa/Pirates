import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = props => {
    var errorSize = Object.keys(props.dbError).length;
    const [captain,setCaptain] = useState(false)
    const lengths = {
        name: 3,
        crew: 1
    }

    const onChangeHandler = (event) => {
        props.setForm({...props.form,[event.target.name]: event.target.value})
        console.log(event.target.value.length)
        if(event.target.name in props.error){
            if(event.target.value.length >= lengths[event.target.name]){
                props.setError({...props.error,[event.target.name]:true})
            }else{
                props.setError({...props.error,[event.target.name]:false})
            }
        }
    }

    const onFocusOutHandler = (event) => {
        const copyCurrentAttributes = props.form[event.target.name]
        const arr = copyCurrentAttributes.split(',');
        props.setForm({...props.form, [event.target.name]: arr})
    }

    const onCheckboxHandler = (event)  => {
        console.log(event.target.checked)

        props.setForm({...props.form, [event.target.name]: event.target.checked})

    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirate/captain').then(response=>{
            setCaptain(true)
        })
        .catch(err => {
            setCaptain(false)
        });
    }, []);
    
    return(
        <>
            <h1>{props.title}</h1>
            <form onSubmit={props.onSubmitHandler} >
                <div className="errWrp">
                    {
                        errorSize > 1 ? <><h4>Entries Required: </h4> {Object.keys(props.dbError).join(', ')}</> : ""
                    }
                </div>

                <div>
                    <label htmlFor="name">Pirate: </label>
                    <input type="text"  name="name" value={props.form.name} placeholder="Pirate Name" onChange={onChangeHandler} />
                    {
                        props.error.name ? "" : <span>Please enter a priate name</span>
                    }
                </div>

                <div>
                    <label htmlFor="crew">Crew Position: </label>
                    <select defaultValue="empty" name="crew" value={props.form.crew} onChange={onChangeHandler}>
                        <option value="empty" disabled>Select Position</option>
                        { captain === true ? <option value="captain" disabled>Captain</option>  : <option value="captain">Captain</option>}    
                            
                        <option value="First Mate">First Mate</option>
                        <option value="Second Mate">Second Mate</option>
                        <option value="Bootswain">Bootswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                        <option value="Cook">Cook</option>
                    </select>
                    {
                        props.error.crew ? "" : <span>Please enter a crew position</span>
                    }
                </div>
                <div>
                    <label htmlFor="image">Priate Image: </label>
                    <input type="text"  name="image" value={props.form.image} placeholder="image url..." onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="ship">Aboard Ship: </label>
                    <input type="text"  name="ship" value={props.form.ship} placeholder="Ship Name..." onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="phrase">Phrase: </label>
                    <input type="text" name="phrase" value={props.form.phrase}  onChange={onChangeHandler} placeholder="Phrase..." />
                </div>

                <div>
                    <label htmlFor="treasure">Treasure: </label>
                    <input min="0" type="number" name="treasure" value={props.form.treasure} onChange={onChangeHandler} placeholder="Treasure..." />
                </div> 

                <div>
                    <label htmlFor="attributes">Attributes: </label>
                    <input type="text" name="attributes" value={props.form.attributes}  onChange={onChangeHandler} placeholder="Comma seperated list" onBlur={onFocusOutHandler}/>
                </div> 

                <div>
                    <label htmlFor="featurePegleg">Peg Leg</label>
                    { 
                        props.form.featurePegleg === true ?  <input type="checkbox" checked  name="featurePegleg" onChange={onCheckboxHandler}/> : <input type="checkbox"  name="featurePegleg" onChange={onCheckboxHandler}/>
                    }
                </div>

                <div>
                    <label htmlFor="featurePatch">Eye patch</label>
                    { 
                        props.form.featurePatch === true ?  <input type="checkbox" checked  name="featurePatch" onChange={onCheckboxHandler}/> : <input type="checkbox"  name="featurePatch" onChange={onCheckboxHandler}/>
                    }
                </div>

                <div>
                    <label htmlFor="featureHook">Hook</label>
                    { 
                        props.form.featureHook === true ?  <input type="checkbox" checked  name="featureHook" onChange={onCheckboxHandler}/> : <input type="checkbox"  name="featureHook" onChange={onCheckboxHandler}/>
                    }
                </div>
                
                {
                    Object.keys(props.error).every((item) => props.error[item]) ? <input type="submit" value="Create" className="submit" /> : <input type="submit" value="Create" disabled className="disabled" />
                }

            </form>
        </>
    )
}

export default Form;