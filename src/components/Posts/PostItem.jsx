import { useState } from "react";

const PostItem = (props) => {
  const { post } = props;
  return (
    <>
      {post.status == "active" && (
        <div style={{ minHeight: "200px", backgroundColor: "lightgreen" }}>
          <h3>Status: {post.status}</h3>
          <p style={{ width: "300px" }}>
            <b>Serial:</b> {post.capsule_serial}
          </p>
        </div>
      )}
    </>
  );
};

export const LoremPostItem = (props) => {
  const { post } = props;
  const [show, setShow] = useState(false);

  const toggleBody = () => {
    setShow(!show);
  };

  return (
    <>
      <div style={{ minHeight: "200px", backgroundColor: "lightblue" }}>
        <h3>ID: {post.id}</h3>
        <p style={{ width: "300px" }}>
          <b>Title:</b> {post.title}
        </p>
        <button onClick={toggleBody}>Show body</button>
        {show && <p style={{maxWidth: '300px'}}>{post.body}</p>}
      </div>
    </>
  );
};

export default PostItem;
