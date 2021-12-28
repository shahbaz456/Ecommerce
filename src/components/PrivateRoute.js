import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const jwttoken = JSON.parse(localStorage.getItem("user"));
  return (
    <Route
      {...rest}
      render={(props) => {
        return jwttoken ? <Component {...props} /> : <Redirect to="/cart" />;
      }}
    />
  );
}
