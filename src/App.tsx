import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Account from "./pages/Account/Account";
import Company from "./pages/Company/Company";
import Dashboard from "./pages/Dashboard/Dashboard";
import Gigs from "./pages/Gigs/Gigs";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/gigs">
            <Gigs />
          </Route>
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
