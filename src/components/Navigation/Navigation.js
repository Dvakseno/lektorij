import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

class Navigation extends Component {
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

    // this.onWheelHandler = e => {
    //   let delta = e.deltaY || e.detail || e.wheelDelta;

    //   if (this.props.location.pathname === '/schedule') {
    //     if (delta < 0 && window.pageYOffset === 0) {
    //       console.log('sa');
    //       this.props.history.push('/about');
    //     }
    //   }
    //   if (this.props.location.pathname === '/about') {
    //     if (delta > 0) {
    //       this.props.history.replace('/schedule');
    //       console.log('as');
    //     } else {
    //       this.props.history.replace('/');
    //       console.log('al');
    //     }
    //   }
    //   if (this.props.location.pathname === '/') {
    //     if (delta > 0) {
    //       this.props.history.replace('/about');
    //       console.log('la');
    //     }
    //   }
    // };
    // this.switchToAnotherPage = () => {
    //   window.addEventListener('wheel', e => this.onWheelHandler(e));
    // };

    // this.switchToAnotherPage();

    const links = navLinks.map(link => {
      // console.log(link);
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
