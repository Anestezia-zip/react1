import { useEffect } from "react";
import PostItem, { LoremPostItem } from "./PostItem";
import { useState } from "react";
import { posts } from "./posts";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../redux-core/actions/dataActions";

const PostComponent = () => {
  // const [posts, setPosts] = useState([]);
  const posts = useSelector((state) => state.data.posts)
  const store = useSelector((store) => store)
  // console.log(store);
  const dispatch = useDispatch()

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      let response = await fetch("https://api.spacexdata.com/v3/capsules/");
      let data = await response.json();
      dispatch(dataActions.setPosts(data));
    } catch {}
  };

  const handleDeletePost = (id) => {
    dispatch(dataActions.deletePostById(id))
    console.log(id);
  }

  return (
    <>
      <Outlet/>
      {posts?.map((post) => (
          <PostItem key={post.capsule_serial} post={post} handleDeletePost={handleDeletePost} />
      ))}
    </>
  );
};

export default PostComponent;
