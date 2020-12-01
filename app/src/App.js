import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import About from './components/AboutComponent';
import Home from './components/HomeComponent';

export default class App extends Component {
  componentWillMount() {
    document.title = 'Phi12ip'
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

          </Switch>
        </div>
      </Router>
    );

  }
}