import React from 'react';

import classes from './SpeakersItem.css';

const speakersItem = props => {
  let image = null;
  if (props.img && props.fb) {
    image = (
      <a
        href={props.fb}
        className={classes.speakersItemImage}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.img} alt="" />
      </a>
    );
  } else if (props.img && !props.fb) {
    image = (
      <div className={classes.speakersItemImage}>
        <img src={props.img} alt="" />
      </div>
    );
  } else {
    image = <div className={classes.speakersItemImage} />;
  }
  let link = null;
  if (props.company && props.href) {
    link = (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.speakersItemCompany}
      >
        {props.company}
      </a>
    );
  } else if (props.company && !props.href) {
    link = <span className={classes.speakersItemCompany}>{props.company}</span>;
  }
  let position = props.position ? (
    <div className={classes.speakersItemPosition}>{props.position}</div>
  ) : null;

  return (
    <div className={classes.speakersItem}>
      {image}
      <div className={classes.speakersItemInfo}>
        <div className={classes.speakersItemName}>{props.name}</div>
        {position}
        {link}
      </div>
    </div>
  );
};

export default speakersItem;
