import { Route, Switch } from "react-router";
import AboutUs from "../pages/About-Us";
import DashboardComic from "../pages/Dashboard-Comic";
import DashboardMain from "../pages/Dashboard-Main";
import DashboardUser from "../pages/Dashboard-User";
import FAQ from "../pages/FAQ";
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
      <Route path="/comic/:comicId">
        <DashboardComic />
      </Route>
      <Route path="/profile">
        <DashboardUser />
      </Route>
      <Route exact path="/faq">
        <FAQ />
      </Route>
      <Route exact path="/about">
        <AboutUs />
      </Route>
    </Switch>
  );
};

export default Routes;
