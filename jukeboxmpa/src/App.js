import './App.scss';
import React from 'react';
import Home from './jukeboxhome/main';
import Library from './library/libary';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Music from './jukeboxmusic/music';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/Music" element={<Music />}/>
          <Route  path="/Library" element={<Library />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
