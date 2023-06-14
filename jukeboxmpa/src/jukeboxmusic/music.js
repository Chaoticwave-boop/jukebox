import React from "react";
import './music.scss';
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import {TextField, Button, Box} from '@mui/material';


const Music = () => {
    const [ music, setMusic ] = useState();

    useEffect(() => {
        fetch("/api").then (
          response => response.json()
        ).then((data) => setMusic(data));
      }, []);

    return (
        <div className="music_page">
            <div className="musictext">
                <h1>Add your music and search</h1>
            
                <p>{!music ? "Loading..." : <MusicBox music={music} />}</p>
            </div>

        </div>
    )
}


const MusicBox = ({ music }) => {
    const [ Searched, SetSearched ] = useState();
    const [ filteredmusic, setFilteredMusic ] = useState(music);
        
    const FilteredMusic = () => {
       
        if (Searched) {
            const newGameList = [...music].filter((music) => {
                if (music.name.toLowerCase().includes(Searched.toLowerCase())){
                    return true
                } else {
                    return false
                }
            });

            setFilteredMusic(newGameList);
        } else {
            setFilteredMusic(music)
        }
    }

    return (
        <div>
            <div>   
                <TextField variant="outlined" className="inputfield" onChange={(event) => SetSearched(event.target.value)}/>
                <Button color="primary" variant="contained" onClick={() => FilteredMusic()}>Search</Button>
            </div>

            <p>{!music ? "Loading..." : <ShowMusic music={filteredmusic} Searched={Searched}/>}</p>
        </div>
    )
}



const ShowMusic = ({music, Searched}) => {
    
   return (
    <div className="music_box">
        {music.map((base, index) => {
            return (
                <div >
                    <Box className="box" sx={{ width: 200, height: 200 , '&:hover': { backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7]},}}>
                        <h1>{base.name}</h1>
                        <p>artist : {base.artist}</p>
                        <p>genre : {base.genre}</p>
                        <Button ><AddIcon/></Button>
                    </Box>
                </div>
            )
        })}
    </div>
   )
}


export default Music