import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return <div>User with id {userId}</div>;
};

export default User;
