import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, WISMO!</h1>
      </div>
    );
  }
}

export default hot(module)(App);
