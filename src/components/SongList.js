import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Song 1', id: 1 },
        { title: 'Song 2', id: 2 },
        { title: 'song 3', id: 3 }
    ]);
    const addSong = () => {
        setSongs([...songs, { title: 'new song', id: uuidv1() }]);
    };
    return (
    <div className="song-list">
        <ul>
            {songs.map(song => {
                return ( <li key={song.id}>{song.title}</li> );
            })}
        </ul>
        <button onClick={addSong}>Add a song</button>
    </div>
  );
}

export default SongList;