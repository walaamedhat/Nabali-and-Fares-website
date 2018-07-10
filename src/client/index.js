import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import ContactUs from './components/contactUS';
import OurProjects from './components/ourProjects';
import Page404 from './components/page404';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div class='app'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contactUs' component={ContactUs} />
          <Route exact path='/ourprojects' component={OurProjects} />
          <Route component={Page404}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
