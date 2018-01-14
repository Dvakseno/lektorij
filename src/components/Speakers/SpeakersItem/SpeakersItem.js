import React from 'react';

import classes from './SpeakersItem.css';

const speakersItem = props => {
  let image = props.img ? <img src={props.img} alt="" /> : null;
  let link = props.company ? (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.speakersItemCompany}
    >
      {props.company}
    </a>
  ) : null;
  let position = props.position ? (
    <div className={classes.speakersItemPosition}>{props.position}</div>
  ) : null;

  return (
    <div className={classes.speakersItem}>
      <div className={classes.speakersItemImage}>{image}</div>
      <div className={classes.speakersItemInfo}>
        <div className={classes.speakersItemName}>{props.name}</div>
        {link}
        {position}
      </div>
    </div>
  );
};

export default speakersItem;
