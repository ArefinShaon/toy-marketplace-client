import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp";
import AddToys from "../Pages/AddToys/AddToys";

import MyToys from "../Pages/MyToys/MyToys";
import AllToys from "../Pages/Alltoys/AllToys";
import Blog from "../Pages/Blog/Blog";
import ViewDetail from "../Pages/ViewDetail/ViewDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import AboutInfo from "../Pages/AboutInfo/AboutInfo";


const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            },
            {
                path: '/addToy',
                element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: '/myToy',
                element:<MyToys></MyToys>
            },
            {
                path: '/allToy',
                element:<AllToys></AllToys>
            },
            {
                path: '/about',
                element:<AboutInfo></AboutInfo>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'detail/:id',
                element: <PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>,
                loader: ({params}) => fetch(`https://toy-server-gold.vercel.app/addtoys/${params.id}`)
            }
      ]
    },
]);
  
export default router;