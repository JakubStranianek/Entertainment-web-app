import './App.css';
import {Routes, Route} from "react-router-dom"
import { useState } from "react"
import Login from "./components/login/login.js"
import SignUp from "./components/signUp/signUp.js"
import Home from "./components/mainApp/mainApp.js"
import Movies from './components/mainApp/subPages/movies';
import TvSeries from './components/mainApp/subPages/tvSeries';
import Bookmarked from './components/mainApp/subPages/bookmarked';
import data from "./components/mainApp/data.json";

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
      <Route path='/' element={<Login mail={email} pass={password} validM={validMail} handleM={handleEmail} handleP={handlePassword} handleS={handleSubmit}/>}/>
      <Route path='/signUp' element={<SignUp mail={email} pass={password} validM={validMail} handleM={handleEmail} handleP={handlePassword} handleS={handleSubmit} setPassR={handlePasswordRepeat} passR={passwordRepeat}/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/movies' element={<Movies usedData={data}/>} />
      <Route path='/tvSeries' element={<TvSeries usedData={data}/>} />
      <Route path='/bookMark' element={<Bookmarked usedData={data}/>} />
    </Routes>
  );
}

export default App;
