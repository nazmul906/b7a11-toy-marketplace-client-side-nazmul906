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
import ViewDetails from "../pages/Shared/Details/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
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
        element: (
          <PrivateRoute>
            {" "}
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "mytoy",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "mytoy/:id",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/singletoy/${params.id}`
          ),
      },
      {
        path: "viewdetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-nazmul906.vercel.app/singletoy/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
