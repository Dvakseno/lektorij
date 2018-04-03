import React from 'react';

import classes from './ScheduleItem.css';

const ScheduleItem = ({ time = null, children, right = null }) => (
  <div
    className={
      right ? [classes.ScheduleItem, classes.ScheduleItemRight].join(' ') : classes.ScheduleItem
    }
  >
    <div className={classes.Time}>{time}</div>
    <div>{children}</div>
  </div>
);

export default ScheduleItem;
