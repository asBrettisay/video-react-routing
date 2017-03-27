import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Store from './Store';
import Hammers from './Hammers';
import Nails from './Nails';
import Drills from './Drills';
import StoreLanding from './StoreLanding'
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/store" render={() => (
        <Store>
            <Route path="/store/drills" component={Drills} />
            <Route path="/store/hammers" component={Hammers} />
            <Route path="/store/nails" component={Nails} />
            <Route exact path="/store" component={StoreLanding} />
        </Store>
      )} />
    </div>
  </Router>,
  document.getElementById('root')
);
