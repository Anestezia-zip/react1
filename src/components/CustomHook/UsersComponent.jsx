import useFetch from "./useFetch";

const UsersComponent = () => {
  const { data: users, loading, err } = useFetch("users");
//   const { data: posts, loading, err } = useFetch("posts");
//   const { data: comments, loading, err } = useFetch("comments");

  if (loading) return <div>Loading...</div>;

  if (err) return <div>User Error: {err?.message}</div>
//   if (err) return <div>Post Error: {err?.message}</div>
//   if (err) return <div>Comment Error: {err?.message}</div>

  return (
    <div>
      <div>
        <h2>Users</h2>
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      {/* <div>
        <h2>Posts</h2>
        <ul>
          {posts?.slice(0, 10).map((post) => (
            <li key={post.id}>
              <h3>Status: {post.title}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments?.slice(0, 10).map((comment) => (
            <li key={comment.id}>
              <strong>{comment.email}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default UsersComponent;
