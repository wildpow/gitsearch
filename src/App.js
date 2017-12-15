import React, { Component } from 'react';
import Logo from './components/Logo/Logo.js';
import RepoSearch from './components/RepoSearch/RepoSearch.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <RepoSearch />
      </div>
    );
  }
}

export default App;
