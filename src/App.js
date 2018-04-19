import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import YmlProfile from './components/users/ymlprofilepage/YmlProfilePage'
import YmlLogin from './components/users/YmlLogin'

/*
const Topic = ({match}) => {
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
}


const Topics = ({match}) => {
  <div>
    <h2>Topics</h2>
    <ul>
      
    </ul>
  </div>
}*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <YmlLogin />
      </div>
    );
  }
}

export default App;
