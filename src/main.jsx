import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to ={"/category/01"}></Navigate>
      },
      {
        path:"/category/:id",
        element: <h2>This is category</h2>
      }
    ]
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>
  },
  {
    path: "/login",
    element: <h1>Login</h1>
  },
  {
    path: "*",
    element: <h1>Error</h1>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
