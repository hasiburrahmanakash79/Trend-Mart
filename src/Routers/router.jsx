import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import LandingPage from "../Pages/LandingPage/LandingPage";

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
]);

export default router;
