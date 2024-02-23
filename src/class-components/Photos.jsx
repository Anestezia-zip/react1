import axios from 'axios';
import { Component } from 'react';

class Photos extends Component {
    state = { photos: [] };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {
            this.setState({photos: res.data})
        })
    }
    
  render () {
    return (
        <div>
            <h2>Photos</h2>
            <ul>
                {this.state.photos.map(photo => (
                    <li key={photo.id}>
                        <h3>{photo.title}</h3>
                        <img width={150} src={photo.url} />
                    </li>
                ))}
            </ul>
        </div>
    )
  }

}

export default Photos