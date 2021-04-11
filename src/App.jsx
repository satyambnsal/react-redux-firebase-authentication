import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Navigation from "./components/Navigation";
import * as ROUTES from "./constants/routes";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <hr />
        <Switch>
          {/* <Route path={ROUTES.HOME}>
            <HomePage />
          </Route> */}
          <ProtectedRoute path={ROUTES.HOME}>
            <HomePage />
          </ProtectedRoute>
          <Route path={ROUTES.SIGN_IN}>
            <SignInPage />
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <SignUpPage />
          </Route>
          <Route path={ROUTES.LANDING}>
            <LandingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
