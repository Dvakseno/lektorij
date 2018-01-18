import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

class Navigation extends Component {
  componentWillUnmount() {
    console.log('[Navigation Unmount] ');
  }

  render() {
    const navLinks = [
      {
        id: 1,
        pathname: '/',
        isExact: true
      },
      {
        id: 2,
        pathname: '/about',
        isExact: false
      },
      {
        id: 3,
        pathname: '/schedule',
        isExact: false
      }
    ];

    const links = navLinks.map(link => {
      let isDark = false;
      if (this.props.location.pathname === '/schedule') {
        isDark = true;
      }
      return (
        <NavigationItem
          key={link.id}
          pathname={link.pathname}
          isExact={link.isExact}
          dark={isDark}
        />
      );
    });

    return <ul className={classes.Navigation}>{links}</ul>;
  }
}

export default withRouter(Navigation);
