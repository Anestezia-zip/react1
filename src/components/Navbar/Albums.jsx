import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const getAlbums = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
            setAlbums(res.data)
        }
        getAlbums()
    }, [])

  return (
    <div style={{backgroundColor: 'lightsalmon'}}>
      <h2>Albums</h2>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Albums