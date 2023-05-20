/* eslint-disable no-unused-vars */
/* eslint-disable no-import-assign */
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Shared/Blog/Blog";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllToys from "../pages/Shared/AllToy/AllToys";
import AddToy from "../pages/Shared/AddToy/AddToy";
import MyToy from "../pages/Shared/MyToy/MyToy";
import UpdateToy from "../pages/Shared/Update/UpdateToy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "mytoy",
        element: <MyToy></MyToy>,
      },
      {
        path: "mytoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singletoy/${params.id}`),
      },
    ],
  },
]);

export default router;
