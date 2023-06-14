import React from "react";
import './navbar.scss';
import MusicNoteTwoToneIcon from '@mui/icons-material/MusicNoteTwoTone';
import BungalowIcon from '@mui/icons-material/Bungalow';
import MenuBookIcon from '@mui/icons-material/MenuBook';


const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/"><BungalowIcon/> Home</a>
            <a href="Music"><MusicNoteTwoToneIcon/> Music</a>
            <a href="Library"><MenuBookIcon/> Library</a>
        </div>
    )
}




export default Navbar