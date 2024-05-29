import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { dataActions } from '../actions/dataActions';
import { useDispatch, useSelector } from 'react-redux';

const Albums = () => {
    // const [albums, setAlbums] = useState([]);
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.data.albums);

    useEffect(() => {
        const getAlbums = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
                dispatch(dataActions.setAlbums(res.data))
                // setAlbums(res.data)
            } catch (error) {
                console.error(error)
            }
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