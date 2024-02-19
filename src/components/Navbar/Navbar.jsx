import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ol>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/albums">Albums</Link></li>
      </ol>
    </nav>
  );
}

export default NavBar;
