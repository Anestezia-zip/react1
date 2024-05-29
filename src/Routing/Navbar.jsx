import { Link } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

const Navbar = () => {
  const buttons = [
    {
        label: "Main",
        route: AppRoutes.MAIN,
    },
    {
      label: "Todos",
      route: AppRoutes.TODOS,
    },
    {
      label: "Albums",
      route: AppRoutes.ALBUMS,
    },
    {
      label: "Comments",
      route: AppRoutes.COMMENTS,
    },
    {
        label: "Users",
        route: AppRoutes.USERS,
    },
    {
        label: "Posts",
        route: AppRoutes.POSTS,
    }
  ];

  return (
    <div style={{width:'100%',height:'60', backgroundColor:'beige', display:'flex',justifyContent:'space-around'}}>
      {buttons.map((btn, idx) => 
        <Link key={idx} to={btn.route}>{btn.label}</Link>
      )}
    </div>
  );
};

export default Navbar;
