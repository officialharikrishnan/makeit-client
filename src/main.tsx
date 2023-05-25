import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/login.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path:'/login',
    element:<Login/>
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router}/>
)
