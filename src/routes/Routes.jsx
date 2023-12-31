import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
// import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import LoginLayout from "../layout/LoginLayout";
import PrivetRoute from './PrivetRoute';
import Trems from "../pages/Shared/Trems/Trems";

const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/catagory/0'></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/trems',
        element:<Trems></Trems>
      }
    ]
  },
  {
    path: "/catagory",
    element: <Main></Main>,
    children: [
  
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://daragon-server-alive1258.vercel.app/catagory/${params.id}`),
      },
    ],
  },
  {
    path: "/news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivetRoute><News></News></PrivetRoute>,
        loader: ({ params }) =>
          fetch(`https://daragon-server-alive1258.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
export default router;
