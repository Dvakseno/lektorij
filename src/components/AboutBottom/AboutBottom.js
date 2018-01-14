import React from 'react';

import classes from './AboutBottom.css';

const aboutBottom = () => (
  <div className={classes.AboutBottom}>
    <div className={classes.AboutBottomContainer}>
      <div className={classes.AboutBottomDescription}>
        <span>III встреча с лучшими специалистами индустрии дизайна.</span>
        <span>
          Разные точки зрения, естественная атмосфера и честные разговоры об успехах и неудачах.
        </span>
        <a href="http://strelkalektorij.ru/" rel="noopener noreferrer" target="_blank">
          Встреча 2017
        </a>
      </div>
    </div>
  </div>
);

export default aboutBottom;
