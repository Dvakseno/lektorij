import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './Subscribe.css';

class Subscribe extends Component {
  state = {
    showModal: false
  };

  render() {
    let subDark = null;
    subDark = this.props.dark
      ? [classes.Subscribe, classes.SubscribeDark].join(' ')
      : classes.Subscribe;
    return (
      <Aux>
        <div className={subDark}>
          <div>
            <ul>
              <li>
                <a href="/" rel="noopener noreferrer" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lektorij/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="/" rel="noopener noreferrer" target="_blank">
                  вКонтакте
                </a>
              </li>
            </ul>
            <a href="/subscribe" rel="noopener noreferrer" target="_blank">
              Подписаться
            </a>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Subscribe;
