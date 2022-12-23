import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = () => {
  const { isAuthenticated, loginWithRedirect} = useAuth0();
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={loginWithRedirect()} />;
  }
};

export default withAuthenticationRequired(ProtectedRoute, {});
