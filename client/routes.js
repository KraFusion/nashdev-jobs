import React from "react";
import { IndexRoute, Route } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Account/Login";
import Signup from "./components/Account/Signup";
import Profile from "./components/Account/Profile";
import Forgot from "./components/Account/Forgot";
import Reset from "./components/Account/Reset";
import CompanyList from "./components/Companies/List";
import CompanyForm from "./components/Companies/Form";

export default function getRoutes(store) {
  const ensureAuthenticated = (nextState, replace) => {
    if (!store.getState().auth.token) {
      replace("/login");
    }
  };
  const skipIfAuthenticated = (nextState, replace) => {
    if (store.getState().auth.token) {
      replace("/");
    }
  };
  const clearMessages = () => {
    store.dispatch({
      type: "CLEAR_MESSAGES"
    });
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} onLeave={clearMessages} />
      <Route
        path="/login"
        component={Login}
        onEnter={skipIfAuthenticated}
        onLeave={clearMessages}
      />
      <Route
        path="/signup"
        component={Signup}
        onEnter={skipIfAuthenticated}
        onLeave={clearMessages}
      />
      <Route
        path="/account"
        component={Profile}
        onEnter={ensureAuthenticated}
        onLeave={clearMessages}
      />
      <Route
        path="/forgot"
        component={Forgot}
        onEnter={skipIfAuthenticated}
        onLeave={clearMessages}
      />
      <Route
        path="/reset/:token"
        component={Reset}
        onEnter={skipIfAuthenticated}
        onLeave={clearMessages}
      />

      <Route
        path="/companies"
        component={CompanyList}
        onLeave={clearMessages}
      />
      <Route
        path="/companies/add"
        component={CompanyForm}
        onLeave={clearMessages}
      />

      <Route path="*" component={NotFound} onLeave={clearMessages} />
    </Route>
  );
}
