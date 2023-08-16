import React, { useState } from 'react';

const AddToPlaylist = ({ userToken }) => {
  const [musicName, setMusicName] = useState('');

  const handleAddToPlaylist = async () => {
    // Call your backend add-to-playlist API with the user token
    const response = await fetch('/api/add-to-playlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`,
      },
      body: JSON.stringify({ MusicName: musicName }), // Send the music name to add
    });

    if (response.ok) {
      // Handle success
    } else {
      // Handle error
    }
  };

  return (
    <div>
      <input type="text" placeholder="Music Name" onChange={(e) => setMusicName(e.target.value)} />
      <button onClick={handleAddToPlaylist}>Add to Playlist</button>
    </div>
  );
};

export default AddToPlaylist;