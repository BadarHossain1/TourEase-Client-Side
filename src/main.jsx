import React from 'react'
import ReactDOM from 'react-dom/client'
import MyList from '../src/MyList/MyList'

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
import AllTouristSpot from './AllTouristSpot/AllTouristSpot';

import AuthProvider from './AuthProvider/AuthProvider';
import Bangladesh from './Countries/Bangladesh';

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
      {
        path: '/AllTouristSpot',
        element: <AllTouristSpot></AllTouristSpot>
      },
      {
        path: '/AddTouristSpot',
        element: <AddTouristSpot></AddTouristSpot>

      },
      {
        path: '/MyList',
        element: <MyList></MyList>

      }
      ,{
        path: '/Countries/Bangladesh',
        element: <Bangladesh></Bangladesh>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
