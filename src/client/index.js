import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import Footer from './components/footer';
import Home from './components/home';
import ContactUs from './components/contactUS';
import OurProjects from './components/ourProjects';
import MediaCenter from './components/mediacenterpage'
import ProjectPage from './components/projectpage'
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
          <Route path='/mediacenter' component={MediaCenter} />
          <Route path='/project' component={ProjectPage} />
          <Route component={Page404}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
