import {
  createBrowserRouter,
} from "react-router-dom";
import Layouts from "../Components/Layout/Layouts";
import Home from "../Components/Home/Home";
import Home2 from "../Components/Home2/Home2";
import Cafe from "../Components/Cafe/Cafe";
import Shop from "../Components/Shop/Shop";
import SignIn from "../Components/SignIn/SignIn";
import Blogs from "../Components/Blogs/Blogs";
import SignUp from "../Components/SignUp/SignUp";
import Privateroute from "../Components/Privateroute/Privateroute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
         {
            path: '/bookCafe',
            element: <Home2></Home2>
        },
        {
            path: '/bookstore',
            element: <Cafe></Cafe>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
         {
          path: '/signIn',
          element: <SignIn></SignIn>
        },
        {
          path:'/blogs',
          element: <Blogs></Blogs>
        },
          {
          path:'/signup',
          element: <SignUp></SignUp>
        }


    ]
  },
]);