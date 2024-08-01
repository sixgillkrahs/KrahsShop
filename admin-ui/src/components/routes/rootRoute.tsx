import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom'
import _Layout from '../layout/mainLayout';
import HomeViews from '../../views/home';


const homeRoutes :RouteObject[] = [
    {
        path:"/",
        element:<HomeViews/>
    }
]

const routes: RouteObject[] = [
  {
    path: "/",
    element: <_Layout/>,
    children: homeRoutes,
  },
];

const router = createBrowserRouter(routes);


const RootRoute = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default RootRoute