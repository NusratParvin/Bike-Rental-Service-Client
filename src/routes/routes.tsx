import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { adminRoutes } from "./admin.routes";
import { userRoutes } from "./user.routes";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import BikeDetails from "../components/User/BikeDetails";
import BikeListing from "../pages/BikeListing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bike-listing",
        element: <BikeListing />,
      },
      {
        path: `/bike-details/:bikeId`,
        element: <BikeDetails />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  adminRoutes,
  userRoutes,
]);
