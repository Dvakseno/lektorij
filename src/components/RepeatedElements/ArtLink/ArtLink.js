import React from 'react';

import classes from './ArtLink.css';
import point from '../../../assets/images/point.png';
import pointActive from '../../../assets/images/point_ac.png';

const artLink = () => (
  <a href="/" className={classes.ArtLink}>
    <img src={point} className={classes.Image} alt="" />
    <img src={pointActive} className={classes.ImageActive} alt="" />
    <div>Арт-резиденция Кварта Риата</div>
  </a>
);

export default artLink;
