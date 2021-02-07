import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard, Login } from "pages";

const Navigate = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route
          path="*"
          component={() => (
            <h2 className="center-text">
              404 Not Found ! <br />
              This site under maintenance.
            </h2>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigate;
