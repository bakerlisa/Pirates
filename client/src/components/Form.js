import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Delete from '../components/Delete';
import { Link } from 'react-router-dom';

const Form = props => {
    var errorSize = Object.keys(props.dbError).length;
    const [crew,setCrew] = useState([props.mates])
    const [captain,setCaptain] = useState(false)
    const lengths = {
        name: 3,
        crew: 1
    }

    const onChangeHandler = (event) => {
        props.setForm({...props.form,[event.target.name]: event.target.value})
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
        <div class="formWrp">
            <div className="imageWrap">
                <img src={props.form.image} alt={props.form.name} />
                <p>"{props.form.phrase}"</p>
                <div className="buttonWrp">
                    <Link to="/pirates" className="cancle">Cancle</Link>
                    <Delete id={props.form.id} />
                </div>
            </div>
            <form className="" onSubmit={props.onSubmitHandler} >
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
                    <label htmlFor="about">About: </label>
                    <textarea type="text"  name="about"  onChange={onChangeHandler} value={props.form.about} >

                    </textarea>
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
                    <label htmlFor="ship">Flag Ship: </label>
                    <input type="text"  name="ship" value={props.form.ship} placeholder="Ship Name..." onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="othership">Other Ship: </label>
                    <input type="text"  name="othership" value={props.form.othership} placeholder="Other Ships Name..." onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="shipImage">Ship Image: </label>
                    <input type="text"  name="shipImage" value={props.form.shipImage} placeholder="Link to Ships Image..." onChange={onChangeHandler} />
                </div>

                <div>
                    <label htmlFor="phrase">Phrase: </label>
                    <input type="text" name="phrase" value={props.form.phrase}  onChange={onChangeHandler} placeholder="Phrase..." />
                </div>

                <div>
                    <label htmlFor="mates">Crew Mates: </label>
                    <input type="text" name="mates" value={props.form.mates}  onChange={onChangeHandler} placeholder="Comma seperated list" onBlur={onFocusOutHandler}/>
                </div> 

                <div>
                    <label htmlFor="treasure">Treasure: </label>
                    <input min="0" type="number" name="treasure" value={props.form.treasure} onChange={onChangeHandler} placeholder="Treasure..." />
                </div> 

                <div>
                    <label htmlFor="attributes">Attributes: </label>
                    <input type="text" name="attributes" value={props.form.attributes}  onChange={onChangeHandler} placeholder="Comma seperated list" onBlur={onFocusOutHandler}/>
                </div> 
                <h3>Typical Pirate Traits:</h3>
                <div className="typical"> 
                    <div>
                        { 
                            props.form.featurePegleg === true ?  <input type="checkbox" checked  name="featurePegleg" onChange={onCheckboxHandler}/> : <input type="checkbox"  name="featurePegleg" onChange={onCheckboxHandler}/>
                        }
                        <label htmlFor="featurePegleg">Peg Leg</label>
                    </div>

                    <div>
                        { 
                            props.form.featurePatch === true ?  <input type="checkbox" checked  name="featurePatch" onChange={onCheckboxHandler}/> : <input type="checkbox"  name="featurePatch" onChange={onCheckboxHandler}/>
                        }
                        <label htmlFor="featurePatch">Eye patch</label>
                    </div>

                    <div>
                        { 
                            props.form.featureHook === true ?  <input type="checkbox" checked  name="featureHook" onChange={onCheckboxHandler}/> : <input type="checkbox"  name="featureHook" onChange={onCheckboxHandler}/>
                        }
                        <label htmlFor="featureHook">Hook</label>
                    </div>

                    <div>
                        { 
                            props.form.featureRum === true ?  <input type="checkbox" checked  name="featureRum" onChange={onCheckboxHandler}/> : <input type="checkbox"  name="featureRum" onChange={onCheckboxHandler}/>
                        }
                        <label htmlFor="featureRum">Loves Rum:</label>
                    </div>

                    <div>
                        { 
                            props.form.featureTreasure === true ?  <input type="checkbox" checked  name="featureTreasure" onChange={onCheckboxHandler}/> : <input type="checkbox"  name="featureTreasure" onChange={onCheckboxHandler}/>
                        }
                        <label htmlFor="featureTreasure">Loves Treasure:</label>
                    </div>
                </div>
                
                
                {
                    Object.keys(props.error).every((item) => props.error[item]) ? <input type="submit" value="Create" className="submit" /> : <input type="submit" value="Create" disabled className="disabled" />
                }

            </form>
        </div>
    )
}

export default Form;