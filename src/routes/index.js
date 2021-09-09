import { Route, Switch } from "react-router";
import DashboardComic from "../pages/Dashboard-Comic";
import DashboardMain from "../pages/Dashboard-Main";
import DashboardUser from "../pages/Dashboard-User";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/main">
        <DashboardMain />
      </Route>
      <Route path="/comic">
        <DashboardComic />
      </Route>
      <Route path="/profile">
        <DashboardUser />
      </Route>
    </Switch>
  );
};

export default Routes;
