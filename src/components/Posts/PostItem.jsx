import { useState } from "react";

const PostItem = (props) => {
  const { post, handleDeletePost } = props;
  return (
    <>
      {post.status == "active" && (
        <div style={{ minHeight: "200px", backgroundColor: "lightgreen" }}>
          <h3>Status: {post.status}</h3>
          <p style={{ width: "300px" }}>
            <b>Serial:</b> {post.capsule_serial}
          </p>
          <button onClick={()=>handleDeletePost(post.capsule_serial)}>Delete</button>
        </div>
      )}
    </>
  );
};

export default PostItem;
