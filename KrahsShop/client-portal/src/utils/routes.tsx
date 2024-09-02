import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeView from "../pages/home/homeview";
import { LayoutMain } from "../layouts";
import NoFoundPage from "../pages/404";
import RegisterView from "../pages/auth/register";
import LoginView from "../pages/auth/login";
import ProfileView from "../pages/auth/profile";

const childRoutes = [
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/register",
    element: <RegisterView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/profile",
    element: <ProfileView />,
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
