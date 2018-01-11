import React from 'react';

import classes from './AboutTop.css';

const aboutTop = () => (
  <div className={classes.AboutTop}>
    <h2 className="about-title">О</h2>
    <div className={classes.Descripton}>
      <div className={classes.DescriptonItem}>
        <span>
          2
          <br />дня
        </span>
        <ul>
          <li>Брендинг</li>
          <li>Диджитал</li>
          <li>Процессы</li>
        </ul>
      </div>
      <div className={classes.DescriptonItem}>
        <span>
          13
          <br />экспертов
        </span>
        <ul>
          <li>Лекции</li>
          <li>Дизайн-игры</li>
          <li>Интенсивы</li>
          <li>Мастер-классы</li>
          <li>Дискуссии</li>
        </ul>
      </div>
    </div>
  </div>
);

export default aboutTop;
