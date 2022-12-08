import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      {props.name}
    </button>
  );
};

export default LoginButton;
