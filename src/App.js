import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Case from './Case';
import Category from './Category';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/case/:id" component={Case}/>
          <Route exact path="/category/:id" component={Category}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
