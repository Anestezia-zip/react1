import { useEffect } from "react";
import PostItem, { LoremPostItem } from "./PostItem";
import { useState } from "react";
import { posts } from "./posts";

const PostComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      let response = await fetch("https://api.spacexdata.com/v3/capsules/");
      let data = await response.json();
      setPosts(data);
    } catch {}
  };

  return (
    <>
      {posts?.map((post) => (
        <PostItem key={post.capsule_serial} post={post} />
      ))}
    </>
  );
};

export const LoremPostComponent = () => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <LoremPostItem post={post} />
        </div>
      ))}
    </>
  );
};

export default PostComponent;
