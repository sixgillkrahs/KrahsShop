import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BasicLayout } from "../layouts";
import Home from "../pages/home";
import Test from "../pages/test";
import NoFoundPage from "../pages/404";

const childRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];

const rootRoute = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: childRoutes,
  },
  {
    path: "*",
    element: <NoFoundPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={rootRoute} />;
};

export default Routes;
