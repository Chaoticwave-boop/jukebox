import React from "react";
import './music.scss';
import { useState } from "react";

import {TextField, Button, Box} from '@mui/material';


const Music = () => {
    const [music, setMusic] = useState([
        {
            name: "thunderstruck",
            artist:"acdc" ,
            genre: "rock",
            file: "acdc.mp3",
    
        },
        {
            name: "i dont wanna hear it",
            artist:"minor threat" ,
            genre: "rock",
            file: "minor.mp3",
        }
    ]);

    return (
        <div className="music_page">
            <div className="musictext">
                <h1>Add your music and search</h1>
                <SearchBar/>

                <MusicBox music={music} />
            </div>

        </div>
    )
}

const SearchBar = () => {
    return (
        <div>   
            <TextField variant="outlined" className="inputfield"/>
            <Button color="primary" variant="contained">Search</Button>
         </div>
    )
}

const MusicBox = ({music}) => {
    return (
        <div className="music_box">
            {music.map((base, index) => {
                return (
                    <div>
                        <Box className="box" sx={{ width: 200, height: 200 , '&:hover': { backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7]},}}>
                            <h1>{base.name}</h1>
                            <p>artist : {base.artist}</p>
                            <p>genre : {base.genre}</p>
                            <p>file : {base.file}</p>
                        </Box>
                    </div>
                )
            })}
            
        </div>
    )
}




export default Music