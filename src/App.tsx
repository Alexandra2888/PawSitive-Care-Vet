import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "./pages/homeLayout";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { ForgotPassword } from "./pages/forgotpassword";
import { AddAppointments } from "./pages/addAppointments";
import { Appointments } from "./pages/appointments";
import { UserAuthContextProvider } from "../contexts/UserAuthContext";
import { ProtectedRoute } from "./components/protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "add-appointments",
        element: (
          <ProtectedRoute>
            <AddAppointments />
          </ProtectedRoute>
        ),
      },
      {
        path: "appointments",
        element: (
          <ProtectedRoute>
            <Appointments />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export const App = () => {
  return (
    <UserAuthContextProvider>
      <RouterProvider router={router} />
    </UserAuthContextProvider>
  );
};


