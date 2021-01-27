import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard, Login } from "pages";

const Navigate = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigate;
