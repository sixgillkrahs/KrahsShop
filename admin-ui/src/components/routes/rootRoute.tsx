import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import _Layout from "../layoutt/mainLayout";
import HomeView from "../../views/home";
import ProductView from "../../views/product";
import ManufacturerView from "../../views/manufacturerPage/manufacturer";
import CategoryPage from "../../views/categoryPage/category";

const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/product",
    element: <ProductView />,
  },
  {
    path: "/manufacturer",
    element: <ManufacturerView />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <_Layout />,
    children: homeRoutes,
  },
];

const router = createBrowserRouter(routes);

const RootRoute = () => {
  return <RouterProvider router={router} />;
};

export default RootRoute;
