import axios from 'axios';
import { Component } from 'react';


class Comments extends Component {
    state = { comments: [] };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            this.setState({comments: res.data})
        })
    }
    
  render () {
    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {this.state.comments.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.email}</h3>
                        <p>{comment.name}</p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
  }

}

export default Comments