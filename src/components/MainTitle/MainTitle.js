import React from 'react';

import classes from './MainTitle.css';

const mainTitle = () => (
  <div className={classes.Title}>
    <h1>
      Лекторий
      <br />Спб
      <br />14 — 15
      <br />04.2018
    </h1>
    <div className={classes.Subtitle}>Брендинг. Диджитал. Процессы</div>
  </div>
);

export default mainTitle;
