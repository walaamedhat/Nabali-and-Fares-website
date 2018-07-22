import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';

import indexRoutes from "./routes/index.jsx";
import PrivateRoute from "./authRoute";
import Dashboard from "./layouts/Dashboard/Dashboard.jsx";
import UserProfile from "./views/UserProfile/UserProfile";


import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import dashboardRoutes from "./routes/dashboard.jsx";
import Login from './views/Login/Login';
import Page404 from './components/page404';
import store from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/login' ComponentName={Login} />
        {indexRoutes.map((prop, key) => {
          return <PrivateRoute path={prop.path} ComponentName={prop.component} key={key} />;
        })}
        <PrivateRoute path='/user' ComponentName={Dashboard} />;
        <PrivateRoute path='/mediacenter' ComponentName={Dashboard} />;
        <PrivateRoute path='/addnews' ComponentName={Dashboard} />;
        <PrivateRoute path='/ourprojects' ComponentName={Dashboard} />;
        <PrivateRoute path='/' ComponentName={Login} />;
        <Route component={Page404}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
//
