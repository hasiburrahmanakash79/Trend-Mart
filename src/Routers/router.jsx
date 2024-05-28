import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path: '/',
            element: <LandingPage/>
        }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signUp',
    element: <SignUp/>
  }
]);

export default router;
