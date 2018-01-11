import React from 'react';

import classes from './Subscribe.css';

const subscribe = () => (
  <div className={classes.Subscribe}>
    <div>
      <ul>
        <li>
          <a href="/" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="/" target="_blank">
            вКонтакте
          </a>
        </li>
      </ul>
      <a href="/" target="_blank">
        Подписаться
      </a>
    </div>
  </div>
);

export default subscribe;
