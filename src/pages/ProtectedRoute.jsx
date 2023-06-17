import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = () => {
    // Check if the access token is present and not expired
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      // Decode the token and check the expiration
      const tokenExpiration = JSON.parse(atob(accessToken.split(".")[1])).exp;
      return tokenExpiration > Date.now() / 1000;
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
