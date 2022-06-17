import React from 'react'
import styled from '../css/PopUp.module.css'

const PopUp = (props) => {
    return(
        
            <div className={`${styled.popwarp} ${props.active}`}>
                <div className={styled.exit}>X</div>
                <h3>Admin Password:</h3>

                <form>
                    <input type="text" name="pass" placeholder="Password..."/>
                    <input type="submit" value="submit" className={styled.submit} />
                </form>
            </div>
    )
}

export default PopUp;