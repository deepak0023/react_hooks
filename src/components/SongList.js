import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'Song 1', id: 1 },
        { title: 'Song 2', id: 2 },
        { title: 'song 3', id: 3 }
    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, { title: title, id: uuidv1() }]);
    };
    useEffect(() => {
        console.log('useEffect callback', songs);
      }, [songs]);
    useEffect(() => {
        console.log('useEffect callback', age);
      }, [age]);
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li> );
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    );
}

export default SongList;