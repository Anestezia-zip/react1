import UsersComponent from "./UsersComponent";
import "../../../App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const StateLiftingApp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();
      setPosts(data);
    } catch {}
  };

  return (
    <div className="App">
      <Outlet/>
      <UsersComponent posts={posts} />
    </div>
  );
};

export default StateLiftingApp;
