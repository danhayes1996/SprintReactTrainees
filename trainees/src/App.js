import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomeComponent from './HomeComponent';
import CreateComponent from './CreateComponent';
import UpdateComponent from './UpdateComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav id="navBar" className="navbar navbar-dark bg-dark">
          <p className="navbar-brand text-light mb-0">Trainees</p>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto text-right">
              <li className="nav-item">
                <a className="nav-link" href="/create">Add A Trainee</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Sign Out</a>
              </li>
            </ul>
          </div>
        </nav>

        <Router>
          <Route path="/create" component={CreateComponent}></Route>
          <Route path="/update" component={UpdateComponent}></Route>
          <Route path="/home" component={HomeComponent}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
