import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account/Account";
import Company from "./pages/Company/Company";
import Dashboard from "./pages/Dashboard/Dashboard";
import Gigs from "./pages/Gigs/Gigs";
import NewGig from "./pages/Gigs/NewGig/NewGig";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route
            path="/gigs"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={Gigs} exact />
                <Route path={`${url}/new-gig`} component={NewGig} exact />
              </>
            )}
          ></Route>
          <Route exact path="/company">
            <Company />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
