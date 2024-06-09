import { Outlet, createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import { AppRoutes } from "./AppRoutes";
import Navbar from "./Navbar";
import PostComponent from "../components/Posts/PostComponent";
import StateLiftingApp from "../components/Users/state-lifting/StateLiftingApp";
import { PrivateRoute, PublicRoute } from "../HOC/PrivateRoute";
import User from "./User";
import Todos from "../redux-core/components/Todos"
import Albums from "../redux-core/components/Albums";
import Comments from "../redux-core/components/Comments";

const AppLayout = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement:  <h1>Ooooooops, wrong route</h1>,
        children:[
            {
                path: AppRoutes.MAIN,
                element: <MainPage/>
            },
            {
                path: AppRoutes.LOGIN,
                element: <PublicRoute Component={LoginPage}/>
            },
            {
                path: AppRoutes.USERS,
                element: <PrivateRoute Component={StateLiftingApp}/>,
                children: [
                    {
                        path: AppRoutes.USERID,
                        element: <User/>
                    }
                ]
            },
            {
                path: AppRoutes.POSTS,
                element: <PrivateRoute Component={PostComponent}/>,
                children: [
                    {
                        path: AppRoutes.INFO,
                        element: <h1>Info under route /posts/info</h1>
                    }
                ]
            },
            {
                path: AppRoutes.TODOS,
                element: <PrivateRoute Component={Todos}/>
            },
            {
                path: AppRoutes.ALBUMS,
                element: <PrivateRoute Component={Albums}/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments />
            }
        ]
    }
])