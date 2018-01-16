import React from 'react';

import classes from './Backdrop.css';

const backdrop = props => {
  // let backdropClass = null;
  // backdropClass=props.showBackdrop ? [classes.Backdrop, classes.BackdropActive] : classes.Backdrop;
  // return props.showBackdrop ? <div className={classes.Backdrop} /> : null;
  if (props.showBackdrop) {
    document.body.style.overflow = 'hidden';
    return <div className={classes.Backdrop} />;
  } else {
    document.body.style.overflow = 'visible';
    return null;
  }
};

export default backdrop;
