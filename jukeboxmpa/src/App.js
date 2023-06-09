import './App.scss';
import Home from './jukeboxhome/main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
