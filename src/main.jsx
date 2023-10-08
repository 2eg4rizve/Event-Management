import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import Sdetails from './pages/Services/Sdetails';
import PivateRoute from './components/PivateRoute/PivateRoute';
import Speciality from './components/Speciality/Speciality';
import ContactUs from './pages/ContactUs/ContactUs';
import Albam from './pages/Albam/Albam';
import Festive from './components/Festive/Festive';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/serviceDetails/:id",
        element: <PivateRoute><Sdetails></Sdetails></PivateRoute>,
        loader: () => fetch("/servicesdata.json")

      },
      {
        path: "/blog",
        element: <PivateRoute><Blog></Blog></PivateRoute>
      },
      {
        path: "/speciality",
        element: <Speciality></Speciality>

      },
      {
        path: "/albam",
        element: <PivateRoute><Albam></Albam></PivateRoute> 

      },
      {
        path: "/festive",
        element: <PivateRoute><Festive></Festive></PivateRoute>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>

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
