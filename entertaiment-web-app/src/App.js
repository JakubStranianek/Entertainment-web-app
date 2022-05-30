import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"
import { useState } from "react"
import Login from "./components/login/login.js"
import SignUp from "./components/signUp/signUp.js"
import Home from "./components/mainApp/mainApp.js"


function App() {

    const [validMail, setValidMail] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
  
    const handleEmail = (e) => {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setEmail(e.target.value);

      if (re.test(email) ) {
          setValidMail(true);
      }
      else {
          setValidMail(false);
      }

      console.log(validMail)
  }

  const handlePassword = (e) =>{
      setPassword(e.target.value);
  } 

  const handlePasswordRepeat = (e) =>{
    setPasswordRepeat(e.target.value);
} 

  const handleSubmit = (e) =>{
      e.prevent.default();
  }

  return (
    <Routes>
      <Route path='/logIn' element={<Login mail={email} pass={password} validM={validMail} handleM={handleEmail} handleP={handlePassword} handleS={handleSubmit}/>}/>
      <Route path='/signUp' element={<SignUp mail={email} pass={password} validM={validMail} handleM={handleEmail} handleP={handlePassword} handleS={handleSubmit} setPassR={handlePasswordRepeat} passR={passwordRepeat}/>} />
      <Route path='/' 
      render={() => {
        return (
            <Navigate to="/home" /> 
        )
    }} element={<Home/>}/>
      <Route path='/movies' element={<Home/>}/>
      <Route path='/tvSeries' element={<Home/>}/>
      <Route path='/bookmark' element={<Home/>}/>
    </Routes>
  );
}

export default App;
