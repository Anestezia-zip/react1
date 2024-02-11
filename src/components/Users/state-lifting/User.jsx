import { useState } from "react"


const User = ({user, posts}) => {
    const [show, setShow] = useState(false)

    const togglePosts = () => setShow(!show)

    return(
        <div style={{backgroundColor: 'lightsteelblue', border: '8px solid beige', maxWidth: '400px', padding: '10px'}}>
            <h1 style={{ color: "green" }}>{user.name}</h1>
            <button onClick={togglePosts}>{show ? 'Hide posts' : 'Show posts'}</button>
            {show && posts.map(post => (
                <p><b>Title: </b>{post.title}</p>
            ))}
        </div>
    )
}

export default User