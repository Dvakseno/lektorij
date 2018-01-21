import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Mobile from './containers/Mobile/Mobile';

class App extends Component {
  render() {
    let appContent = null;
    if (document.documentElement.clientWidth <= 812) {
      appContent = (
        <div className="App">
          <Mobile />
        </div>
      );
    } else {
      appContent = (
        <BrowserRouter>
          <div className="App">
            <Layout />
          </div>
        </BrowserRouter>
      );
    }
    return (
      <BrowserRouter>
        <div className="App">{appContent}</div>
      </BrowserRouter>
    );
  }
}

export default App;
