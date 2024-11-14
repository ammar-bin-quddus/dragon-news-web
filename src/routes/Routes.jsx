import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Navigate to='/category/01'></Navigate>
        },
        {
            path: 'category/:id',
            element: <CategoryNews />,
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
        }
    ]
  },
  {
    path: 'news',
    element:<div>news layout</div>
  },
  {
    path: 'auth',
    element: <div>login</div>
  },
  {
    path: '*',
    element: <div>error</div>
  }
]);
