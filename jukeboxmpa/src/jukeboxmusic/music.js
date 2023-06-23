import React from "react";
import './music.scss';
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import {TextField, Button, Box} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


const Music = () => {
    const [ music, setMusic ] = useState();
    const [ library, setLibrary ] = useState();

      useEffect(() => {
        fetch("/api/music").then (
          response => response.json()
          
        ).then((data) => setMusic(data));

      }, []);

      useEffect(() => {
        fetch("/api/library/content").then (
          response => response.json()
          
        ).then((data) => setLibrary(data));
  
      }, []);

    return (
        <div className="music_page">
            <div className="musictext">
                <h1>Add your music and search</h1>
            
                <p>{!music ? "Loading..." : <MusicBox music={music} library={library}/>}</p>
            </div>

        </div>
    )
}

const MusicBox = ({ music, library }) => {
    const [ Searched, SetSearched ] = useState();
    const [ filteredmusic, setFilteredMusic ] = useState(music);
        
    const FilteredMusic = () => {
       
        if (Searched) {
            const newGameList = [...music].filter((music) => {
                if (music.Name.toLowerCase().includes(Searched.toLowerCase())){
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

            <p>{!music ? "Loading..." : <ShowMusic music={filteredmusic} Searched={Searched} library={library}/>}</p>
        </div>
    )
}



const ShowMusic = ({ music, library }) => {
    const [ open , setOpen ] = useState(false);

    const AddToLibrary = (base) => {
        fetch('/api/library', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: base.Name ,
                Artist: base.Artist,
                Genre: base.Genre 
            })
        }).then(() => setOpen(true))
    }


    
   return (
    <div className="music_box">
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <MuiAlert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}  variant="filled">
                Added
            </MuiAlert>
        </Snackbar>
        {music.map((base, index) => {
            return (
                <div >
                    <Box className="box" sx={{ width: 200, height: 200 , '&:hover': { backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7]},}}>
                        <h1>{base.Name}</h1>
                        <p>artist : {base.Artist}</p>
                        <p>genre : {base.Genre}</p>
                        <Button onClick={() => AddToLibrary(base)}><AddIcon/></Button>
                    </Box>
                </div>
            )
        })}
    </div>
   )
}


export default Music