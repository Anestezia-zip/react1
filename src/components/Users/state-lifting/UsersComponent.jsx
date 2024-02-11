import { useState, useEffect } from "react";
import User from "./User";

const UsersComponent = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
    } catch {}
  };

  return (
    <>
        {users.map(user => {
            const userPosts = props.posts.filter(post => post.userId === user.id)
            return(
                <User key={user.id} user={user} posts={userPosts} />
            )
        })}
    </>
  );
};

export default UsersComponent;
