import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayouts from "../components/layouts/AuthLayouts";
import Login from "../components/Login";
import Register from "../components/Register";
import NewsDetails from "../pages/NewsDetails";

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
    path: '/news/:id',
    element:<NewsDetails />,
    loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: 'auth',
    element: <AuthLayouts />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      }
    ]
  },
  {
    path: '*',
    element: <div>error</div>
  }
]);
