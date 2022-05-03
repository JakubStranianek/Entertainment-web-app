import './App.css';
import {Routes, Route} from "react-router-dom"

import Login from "./components/login/login.js"
import SignUp from "./components/signUp/signUp.js"
import MainApp from "./components/mainApp/mainApp.js"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path='/mainApp' element={<MainApp/>} />
    </Routes>
  );
}

export default App;
