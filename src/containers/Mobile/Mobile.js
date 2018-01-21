import React from 'react';

import classes from './Mobile.css';

const mobile = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.Title}>
        Лекторий<br />СПБ<br />14 — 15<br />04.2018
      </h1>
      <div className={classes.Subtitle}>Брендинг. Диджитал. Процессы</div>
      <div className={classes.Social}>
        <ul>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">вКонтакте</a>
          </li>
        </ul>
      </div>
      <a href="/" className={classes.RegButton}>
        Регистрация
      </a>
    </div>
  );
};

export default mobile;
