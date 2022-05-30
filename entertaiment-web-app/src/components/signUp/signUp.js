import React from 'react'
import {Link} from "react-router-dom"
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function signUp(props) {

  const {validM, pass, handleS, mail, handleM, handleP, passR, setPassR} = props

  return (
    <div className='wholeLogin'>
        <Logo className="loginLogo"/>

        <div className='loginWindow' id="signUpForm">
            <div className='loginContent'>
            <h3>Sign Up</h3>

            <form>
                <input type={"text"} placeholder="Email address" maxLength={29} value={mail} onChange={handleM}></input>
                {validM || mail.length === 0  ? "" : <div className='error'>Enter valid mail</div>}
              
                <input type={"password"} placeholder="Password" value={pass} onChange={handleP} required></input>
                {pass.length === 0  ? <div className='error'>Can’t be empty</div> : ""}

                <input type={"password"} placeholder="Repeat password" value={passR} onChange={setPassR} required></input>
                {passR === pass ? "" : <div className='error'>Password doesn’t match</div>}
            </form>

            
            <Link to={validM && passR === pass && pass.length > 0 ? "/home" : ""}>
                <button onSubmit={handleS}>Create an account</button>
            </Link>
            
            <p>Already have an account? <Link to="/" id="signUp">Login</Link> </p>
            </div>
        </div>
    </div>
  )
}
