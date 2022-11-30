import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <section>
      <h2>Log In to get started</h2>
      <div>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    </section>
  );
};

export default LoginButton;