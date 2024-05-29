import { Link } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"
import Navbar from "./Navbar"

const MainPage = () => {
  return (
    <div>
        <h1>Main page</h1>
        <h3>
            <Link to={AppRoutes.LOGIN}>Login</Link> to proceed
        </h3>
    </div>
  )
}

export default MainPage