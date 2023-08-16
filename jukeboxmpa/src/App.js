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
  
const [loggedIn, setLoggedIn] = useState(false);
  
const handleLogin = (token) => {
  // Here you can set the token in state or perform other actions
  // to indicate that the user is logged in.
  setLoggedIn(true);
};

  return (
    <div className="App">
      <Navbar/>

      <h1>Jukebox App</h1>
      {!loggedIn ? <Login onLogin={handleLogin} /> : <p>Welcome! You are logged in.</p>}
 
      <BrowserRouter>
        <Routes>
          {/* <Route  path="/" element={<User />}/> */}
          <Route  path="/LoginTest" element={<Login />}/>

          <Route  path="/home" element={<Home />}/>
          <Route  path="/Music" element={<Music />}/>
          <Route  path="/Library" element={<Library />}/>
        </Routes>
      </BrowserRouter>


      
    </div>
  );
}

export default App;
