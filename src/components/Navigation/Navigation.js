import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.css';

const navigation = props => {
  let navClass = null;
  navClass = props.dark
    ? [classes.Navigation, classes.NavigationDark].join(' ')
    : classes.Navigation;
  return (
    <ul className={navClass}>
      <li>
        <NavLink
          to="/"
          exact
          activeClassName={classes.NavigationItemActive}
          className={classes.NavigationItem}
        />
      </li>
      <li>
        <NavLink
          to="/about"
          activeClassName={classes.NavigationItemActive}
          className={classes.NavigationItem}
        />
      </li>
      <li>
        <NavLink
          to="/schedule"
          activeClassName={classes.NavigationItemActive}
          className={classes.NavigationItem}
        />
      </li>
    </ul>
  );
};

export default navigation;
