import React from 'react';

import classes from './ArtLink.css';

const artLink = props => {
  const styles = {
    shapeRendering: 'geometricPrecision',
    textRendering: 'geometricPrecision',
    imageRendering: 'optimizeQuality',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  };
  let logoLink = null;
  logoLink = props.dark ? [classes.ArtLink, classes.ArtLinkDark].join(' ') : classes.ArtLink;

  return (
    <a
      href="https://www.google.ru/maps/place/%D0%97%D0%BE%D0%BB%D0%BE%D1%82%D0%B0%D1%8F+%D1%83%D0%BB.,+2,+%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B3%D0%BE%D1%84,+%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3,+198516/@59.8853516,29.8949039,17z/data=!4m13!1m7!3m6!1s0x46964731bcab05a5:0x78269f168bf57a06!2z0JfQvtC70L7RgtCw0Y8g0YPQuy4sIDIsINCf0LXRgtC10YDQs9C-0YQsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTg1MTY!3b1!8m2!3d59.8853516!4d29.8970926!3m4!1s0x46964731bcab05a5:0x78269f168bf57a06!8m2!3d59.8853516!4d29.8970926"
      target="_blank"
      rel="noopener noreferrer"
      className={logoLink}
    >
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
      <span>Арт-резиденция КвартаРиата</span>
    </a>
  );
};

export default artLink;
