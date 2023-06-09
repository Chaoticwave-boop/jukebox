import React from "react";
import './navbar.scss';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import BungalowIcon from '@mui/icons-material/Bungalow';


const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/"><BungalowIcon/> Home</a>
            <a href="music"><MusicNoteTwoToneIcon/> Music</a>
        </div>
    )
}




export default Navbar