import React from "react";
import { Route, Redirect } from "react-router-dom";
import fakeAuth from "../fakeAuth";

export default function ProtectedRoute({ children: Component, ...rest }) {
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     fakeAuth.isUserLoggedIn() ? (
    //       // <Component {...props} />
    //       Component
    //     ) : (
    //       <Redirect
    //         to={{
    //           pathname: "/signin",
    //           state: { from: props.location }
    //         }}
    //       />
    //     )
    //   }
    // />
    <Route {...rest}>
      {fakeAuth.isUserLoggedIn() === "true" ? (
        Component
      ) : (
        <Redirect to="/signin" />
      )}
    </Route>
  );
}
