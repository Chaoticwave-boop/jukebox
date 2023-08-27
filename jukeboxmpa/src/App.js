import './App.scss';
import React from 'react';
import Home from './jukeboxhome/main';
import Library from './library/libary';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Music from './jukeboxmusic/music';
import User from './User/User';
import Login from './Login/Login';

function App() {
const [ loggedIn, setLoggedIn ] = useState(false);
const [ token, setToken ] = useState('');
  
const handleLogin = (receivedToken) => {
  console.log("the token is" + receivedToken)
  setToken(receivedToken)
  setLoggedIn(true);
};

  return (
    <div className="App">
      <Navbar/>

      <h1>Jukebox App</h1>
      
 
      <BrowserRouter>
        <Routes>
          {/* <Route  path="/" element={<User />}/> */}
          <Route  path="/" element={!loggedIn ? <Login onLogin={handleLogin} /> : <p>Welcome! You are logged in.</p>}/>
          <Route  path="/home" element={<Home />}/>
          <Route  path="/Music" element={<Music token={token}/>}/>
          <Route  path="/Library" element={<Library token={token}/>}/>
        </Routes>
      </BrowserRouter>


      
    </div>
  );
}

export default App;
