import "../../../App.css";
import { useState, useEffect, createContext } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

export const AppContext = createContext(null);

const ContextApp = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData('https://jsonplaceholder.typicode.com/users', setUsers);
    getData('https://jsonplaceholder.typicode.com/posts', setPosts);
  }, []);

  const getData = async (url, setState) => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setState(data);
    } catch (e) {console.error(e)}
  };

  const deletePost = (postId) => {
    setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
  };

  return (
    <div className="App">
      <AppContext.Provider value={{posts, users, setPosts, deletePost}}>
        <Child2 />
        <Child1 />
      </AppContext.Provider>
    </div>
  );
};

export default ContextApp;
