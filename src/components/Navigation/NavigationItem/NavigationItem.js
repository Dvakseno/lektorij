import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = props => {
  let navClass = null;
  navClass = props.dark
    ? [classes.NavigationItem, classes.NavigationItemDark].join(' ')
    : classes.NavigationItem;
  return (
    <li className={classes.NavigationItemWrapper}>
      <NavLink
        to={props.pathname}
        exact={props.isExact}
        activeClassName={classes.NavigationItemActive}
        className={navClass}
      />
    </li>
  );
};

export default navigationItem;
