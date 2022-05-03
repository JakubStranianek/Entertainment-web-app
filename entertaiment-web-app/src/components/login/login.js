import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {Link} from "react-router-dom"
import "../login/login.scss"

import { useState } from "react"

export default function Login() {

    const [validMail, setValidMail] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmail(e.target.value);

        if (re.test(email) ) {
            setValidMail(true);
        }
        else {
            setValidMail(false);
        }

    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);

        if (password.length === 0) {
           
        }
    } 

    const handleSubmit = (e) =>{
        e.prevent.default();

        return (
            <Link to={"/signUp"}></Link>
        );
    } 

  return (
    <div className='wholeLogin'>
        <Logo className="loginLogo"/>

        <div className='loginWindow'>
            <div className='loginContent'>
            <h3>Login</h3>

            <form>
                <label for="text">{validMail || email.length === 0  ? "" : "Enter valid mail"}</label>
                <input type={"text"} placeholder="Email address" maxLength={29} value={email} onChange={handleEmail}></input>
                <label for="password">{password.length === 0  ? "Can’t be empty" : ""}</label>
                <input type={"password"} placeholder="Password" value={password} onChange={handlePassword} required></input>
            </form>

            <Link to={validMail && password.length > 0 ? "/mainApp" : ""}>
                <button onSubmit={handleSubmit}>Login to your account</button>
            </Link>

            <p>Don’t have an account? <Link to="/signUp" id="signUp"> Sign Up</Link> </p>
            </div>
        </div>
    </div>
  )
}
