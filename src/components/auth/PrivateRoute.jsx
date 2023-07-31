import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";



export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    console.log(checkingStatus);
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}