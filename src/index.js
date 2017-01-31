import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Home from './Home';
import About from './About';
import Store from './Store';
import Hammers from './Hammers';
import StoreLanding from './StoreLanding';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/store" component={Store} >
      <Route path="home" component={StoreLanding} />
      <Route path="hammers" component={Hammers} />
    </Route>
  </Router>,
  document.getElementById('root')
);