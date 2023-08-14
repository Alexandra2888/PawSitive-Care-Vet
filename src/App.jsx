import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomeLayout from "./pages/homeLayout/HomeLayout";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Appointments from "./pages/appointments/Apponintments";




const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword/>
      },
      {
        path: 'appointments',
        element: <Appointments/>
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router = {router}></RouterProvider>
}

export default App;