import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

import "./LogIn.css";

const LogIn = () => {
  const { loginWithGoogle, setUser } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogIn = () => {
    loginWithGoogle().then((result) => {
      history.push(redirect_uri);
      setUser(result.user);
    });
  };

  return (
    <div className=" col s12 m6 offset-m3 center-align">
      <a
        onClick={handleGoogleLogIn}
        className="google-div oauth-container btn darken-4 white black-text"
      >
        <div className="left">
          <img
            width="20px"
            // style="margin-top:7px; margin-right:8px"
            alt="Google sign-in"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          />
        </div>
        Login with Google
      </a>
    </div>
  );
};

export default LogIn;
