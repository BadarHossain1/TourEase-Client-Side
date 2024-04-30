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
import ViewDetails from './ViewDetails/ViewDetails';
import Indonesia from './Countries/Indonesia';
import Malaysia from './Countries/Malaysia';
import Vietnam from './Countries/Thailand';
import Cambodia from './Countries/Cambodia';
import Update from './Update/Update';
import PrivateRoute from './PrivateRoute/PrivateRoute';


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
        element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>

      },
      {
        path: '/MyList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>

      },

      {
        path: '/spots/id/:id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
        
         
      }
      , {
        path: '/Countries/Bangladesh',
        element: <Bangladesh></Bangladesh>
      }
      , {
        path: '/Countries/Thailand',
        element: <Indonesia></Indonesia>
      },
      {
       path: '/Countries/Indonesia',
       element: <Indonesia></Indonesia>
     }
      , {
        path: '/Countries/Malaysia',
        element: <Malaysia></Malaysia>
      }
      , {
        path: '/Countries/Vietnam',
        element: <Vietnam></Vietnam>
      }
      , {
        path: '/Countries/Cambodia',
        element: <Cambodia></Cambodia>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>
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
