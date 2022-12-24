import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

 const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    logout({
      returnTo: window.location.origin,
    });
  };

  return (
    <button className="border bg-main-blue rounded-lg p-3 text-white font-bold" onClick={handleLogout}>
      Log Out
    </button>
  );
};
export default LogoutButton;