import React from "react";
import './navbar.scss';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import BungalowIcon from '@mui/icons-material/Bungalow';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/"><LoginIcon/> Login</a>
            <a href="/LoginTest"><MenuBookIcon/> LoginTest</a>
            <a href="/home"><BungalowIcon/> Home</a>
            <a href="Music"><MusicNoteTwoToneIcon/> Music</a>
            <a href="Library"><MenuBookIcon/> Library</a>
        </div>
    )
}




export default Navbar