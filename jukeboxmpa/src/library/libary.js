import React from "react";
import './library.scss';
import { useState, useEffect } from "react";
import {TextField, Button, Box} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


const Library = () => {
    const [ library, setLibrary ] = useState();

    useEffect(() => {
      fetch("/api/library/content").then (
        response => response.json()
        
      ).then((data) => setLibrary(data));

    }, []);

    return (
        <div className="library_page">
            <div className="musictext">
                <h1>Your music</h1>
                <p>{!library ? "Loading..." : <LibraryBox library={library} />}</p>
            </div>
        </div>
    )
}
 
const LibraryBox = ({library}) => {

    const [ Searched, SetSearched ] = useState();
    const [ filteredmusic, setFilteredMusic ] = useState(library);
        
    const FilteredMusic = () => {
    
        if (Searched) {
            const newGameList = [...library].filter((library) => {
                if (library.Name.toLowerCase().includes(Searched.toLowerCase())){
                    return true
                } else {
                    return false
                }
            });

            setFilteredMusic(newGameList);
        } else {
            setFilteredMusic(library)
        }
    }

    return (
        <div>
            <div>   
                <TextField variant="outlined" className="inputfield" onChange={(event) => SetSearched(event.target.value)}/>
                <Button color="primary" variant="contained" onClick={() => FilteredMusic()}>Search</Button>
            </div>

            <p>{!library ? "Loading..." : <ShowMusic music={filteredmusic} Searched={Searched}/>}</p>
        </div>
    )
}




const ShowMusic = ({ music }) => {
    const [ currentMusic, setCurrentMusic ] = useState(music);
    const [ open , setOpen ] = useState(false)

    const getNewMusic = () => {
        fetch("/api/library/content").then (
            response => response.json()
            
        ).then((data) => setCurrentMusic(data));
    }

    const DeleteMusic = (base) => {
        console.log(base)
        fetch(`/api/library/delete/${base.id}`, {
            method: 'DELETE',
        }).then((response) => response.json()).then(() => getNewMusic()).then(() => setOpen(true))
    }
    
    return (
     <div className="music_box">
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <MuiAlert onClose={() => setOpen(false)} severity="error" sx={{ width: '100%' }}  variant="filled">
                Deleted
            </MuiAlert>
        </Snackbar>
         {currentMusic.map((base, index) => {
             return (
                 <div >
                    <Box className="box" sx={{ width: 200, height: 200 , '&:hover': { backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7]},}}>
                        <h1>{base.Name}</h1>
                        <p>artist : {base.Artist}</p>
                        <p>genre : {base.Genre}</p>
                        <Button onClick={() => DeleteMusic(base)}><DeleteIcon/></Button>
                    </Box>
                 </div>
             )
         })}
     </div>
    )
 }
 

export default Library