import {
  createBrowserRouter,
} from "react-router-dom";
import Layouts from "../Components/Layout/Layouts";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        }
    ]
  },
]);