import './App.css';
import {Routes, Route, Navigate} from "react-router-dom"

import Login from "./components/login/login.js"
import SignUp from "./components/signUp/signUp.js"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signUp' element={<SignUp/>} />
    </Routes>
  );
}

export default App;
