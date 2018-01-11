import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';
import Navigation from '../../components/Navigation/Navigation';

import About from '../About/About';
import Lektorij from '../Lektorij/Lektorij';
import Schedule from '../Schedule/Schedule';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Lektorij} />
          <Route path="/about" component={About} />
          <Route path="/schedule" component={Schedule} />
        </Switch>
      </Aux>
    );
  }
}

export default Layout;
