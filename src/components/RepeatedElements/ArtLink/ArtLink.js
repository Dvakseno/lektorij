import React from 'react';

import classes from './ArtLink.css';

const artLink = () => {
  const styles = {
    shapeRendering: 'geometricPrecision',
    textRendering: 'geometricPrecision',
    imageRendering: 'optimizeQuality',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  };
  return (
    <a href="/" className={classes.ArtLink}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10px"
        height="12px"
        version="1.1"
        style={styles}
        viewBox="0 0 133440 165537"
      >
        <path
          className={classes.LogoFill}
          d="M66606 165537c24716,-27079 66834,-61197 66834,-98833 0,-36855 -29882,-66704 -66720,-66704 -36839,0 -66720,29849 -66720,66704 0,37783 41889,71787 66606,98833zm19877 -79265c5067,-5035 8179,-12025 8179,-19748 0,-7690 -3112,-14712 -8179,-19747 -5051,-5051 -12057,-8195 -19763,-8195 -7707,0 -14713,3144 -19764,8195 -5067,5035 -8179,12057 -8179,19747 0,7723 3112,14713 8179,19748 5051,5083 12057,8227 19764,8227 7706,0 14712,-3144 19763,-8227z"
        />
      </svg>
      <div>Арт-резиденция Кварта Риата</div>
    </a>
  );
};

export default artLink;
