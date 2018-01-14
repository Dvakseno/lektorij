import React from 'react';

import classes from './Subscribe.css';

const subscribe = props => {
  let subDark = null;
  subDark = props.dark ? [classes.Subscribe, classes.SubscribeDark].join(' ') : classes.Subscribe;
  return (
    <div className={subDark}>
      <div>
        <ul>
          <li>
            <a href="/" rel="noopener noreferrer" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/lektorij/" rel="noopener noreferrer" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="/" rel="noopener noreferrer" target="_blank">
              вКонтакте
            </a>
          </li>
        </ul>
        <a href="/" rel="noopener noreferrer" target="_blank">
          Подписаться
        </a>
      </div>
    </div>
  );
};

export default subscribe;
