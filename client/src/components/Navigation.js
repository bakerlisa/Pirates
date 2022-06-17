import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Navigation = (props) => {
    const [active,setActive] = useState('inactive')
    const [pass,setPass] = useState('')
    const [error,setError] = useState('')
    const [welcome,setWelcome] = useState(false)
    const logged = sessionStorage.getItem("loggedin");

    const onChangeHadnler = (event) => {
        setPass(event.target.value)
    }

    const login = () =>{
        active == 'inactive' ? setActive('active') : setActive('inactive') 
    }
    const exit = () => {
        setActive('inactive')
    }
    const checkPass = (event) => {
        event.preventDefault();
        console.log(props.login)
        console.log(pass)
        if(pass === props.login){
            setWelcome(true)
            sessionStorage.setItem("loggedin", "true");
        }else{
            setError("Nope. You're wrong")
        }
    }

    return(
        <>
            <nav>
                <Link to="/pirates">Captains</Link>
                {
                    logged === "true" ? <Link to="/createPirate">Create </Link> : ""
                }
                <Link to="/resources">Resources </Link>
                <div onClick={login}>Admin</div>
            </nav>

            <div className={`popwarp ${active}`}>
                <div className="exit" onClick={exit} >X</div>
                {
                    logged === "true" ? <><h3>Welcome</h3><p>All editing abilities unlocked!</p></> : <><h3>Admin Password:</h3><form onSubmit={checkPass}>
                    <input type="text" name="pass" placeholder="Password..." onChange={onChangeHadnler}/>
                    <input type="submit" value="submit" className="submit" />
                    <span>{error}</span>
                    </form>
                    </>
                }
            </div>
        </>
    )
}

export default Navigation;