import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {Link} from "react-router-dom"
import "../login/login.scss"

export default function Login(props) { 
    const { mail, pass, validM, handleM, handleS, handleP} = props
  return (
    <div className='wholeLogin'>
        <Logo className="loginLogo"/>

        <div className='loginWindow'>
            <div className='loginContent'>
            <h3>Login</h3>

            <form>
                <input type={"text"} placeholder="Email address" maxLength={29} value={mail} onChange={handleM}></input>
                {validM || mail.length === 0  ? "" : <div className='error'>Enter valid mail</div>}
                <input type={"password"} placeholder="Password" value={pass} onChange={handleP} required></input>
                {pass.length === 0  ? <div className='error'>Can’t be empty</div> : ""}
            </form>

            <Link to={validM && pass.length > 0 ? "/mainApp" : ""}>
                <button onSubmit={handleS}>Login to your account</button>
            </Link>

            <p>Don’t have an account? <Link to="/signUp" id="signUp"> Sign Up</Link> </p>
            </div>
        </div>
    </div>
  )
}
