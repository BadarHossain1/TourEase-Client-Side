import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './assets/Register/Register';
import AddTouristSpot from './AddTouristSpot/AddTouristSpot';
import ErrorPage from './ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      // {
      //   path: '/AllTouristSpot',
      //   element: 
      // },
       {
        path: '/AddTouristSpot',
        element: <AddTouristSpot></AddTouristSpot>
        
      }, 
      // {
      //   path: '/MyList',
      //   element: 

      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
