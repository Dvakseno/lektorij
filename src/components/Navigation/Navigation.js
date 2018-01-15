import React from 'react';

import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigation = props => {
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
    return (
      <NavigationItem
        key={link.id}
        pathname={link.pathname}
        isExact={link.isExact}
        dark={props.dark}
      />
    );
  });

  return <ul className={classes.Navigation}>{links}</ul>;
};

export default navigation;
