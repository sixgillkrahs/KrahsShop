import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "../pages/home/homeview";
import { LayoutMain } from "../layouts";
import NoFoundPage from "../pages/404";

const childRoutes = [
  {
    path: "/",
    element: <HomeView />,
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: childRoutes,
  },
  {
    path: "*",
    element: <NoFoundPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
