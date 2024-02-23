import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ol>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/photos">Photos</Link></li>
      </ol>
    </nav>
  );
}

export default NavBar;
