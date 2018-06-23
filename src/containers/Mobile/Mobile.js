import React from 'react';

import classes from './Mobile.css';

import download from '../../assets/images/download.png';
import pdf from '../../assets/docs/programma.pdf';

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
            <a href="https://www.facebook.com/lektorij/" rel="noopener noreferrer" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lektorij/" rel="noopener noreferrer" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://vk.com/designlektorij" rel="noopener noreferrer" target="_blank">
              вКонтакте
            </a>
          </li>
        </ul>
      </div>
      <div className={classes.DownloadWrapper}>
        <a href={pdf} download className={classes.Download}>
          <img src={download} alt="" />
          <span>Скачать программу</span>
        </a>
      </div>
      <a href="https://lektorij.timepad.ru/event/644648/" className={classes.RegButton}>
        Регистрация
      </a>
    </div>
  );
};

export default mobile;
