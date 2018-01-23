import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Aux from '../../hoc/Auxiliary';

import About from '../About/About';
import Lektorij from '../Lektorij/Lektorij';
import Schedule from '../Schedule/Schedule';
import Timepad from '../../components/Timepad/Timepad';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Switch>
          <Route path="/subscribe" component={Timepad} />
          <Route path="/" exact component={Lektorij} />
          <Route path="/about" component={About} />
          <Route path="/schedule" component={Schedule} />
          <Redirect to="/" />
        </Switch>
      </Aux>
    );
  }
}

export default Layout;
