import React from 'react';

import classes from './Partner.css';

const Partner = props => (
  <a href={props.link} target="_blank" rel="noopener noreferrer" className={classes.PartnersItem}>
    <img src={props.image} alt="" />
  </a>
);

export default Partner;
