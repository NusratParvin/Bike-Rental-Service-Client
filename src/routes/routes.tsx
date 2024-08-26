import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { adminRoutes } from "./admin.routes";
import { userRoutes } from "./user.routes";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
