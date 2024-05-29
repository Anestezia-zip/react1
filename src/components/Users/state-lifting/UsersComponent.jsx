import { useState, useEffect } from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../Routing/AppRoutes";

const UsersComponent = (props) => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  const handleClick = (userId) => navigate(AppRoutes.USERS + '/' + userId)

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
                <User 
                  key={user.id} 
                  user={user} 
                  posts={userPosts} 
                  handleClick={() => handleClick(user.id)}
                />
            )
        })}
    </>
  );
};

export default UsersComponent;
