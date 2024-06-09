import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostServices } from '../../services/apiServices';

const Albums = () => {
    // const [albums, setAlbums] = useState([]);
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.data.albums);

    useEffect(() => {
        PostServices.getAlbums(dispatch)
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