import axios from 'axios';
import { Component } from 'react';


class Posts extends Component {
    state = { posts: [] };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            this.setState({posts: res.data})
        })
    }
    
  render () {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {this.state.posts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
  }

}

export default Posts