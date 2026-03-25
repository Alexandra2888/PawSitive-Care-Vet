import { Navigate } from "react-router-dom";

import { useUserAuth } from "../../contexts/UserAuthContext";

const ProtectedRoute = ({ children }: any) => {
  const { user, loading } = useUserAuth();

  if (loading) {
    return null;
  }
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default ProtectedRoute;
