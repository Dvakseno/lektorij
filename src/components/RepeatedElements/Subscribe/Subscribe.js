import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
// import Timepad from '../../Timepad/Timepad';
import classes from './Subscribe.css';
// import Backdrop from '../../Backdrop/Backdrop';

class Subscribe extends Component {
  state = {
    showModal: false
  };

  modalHandler = event => {
    event.preventDefault();
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    let subDark = null;
    subDark = this.props.dark
      ? [classes.Subscribe, classes.SubscribeDark].join(' ')
      : classes.Subscribe;
    return (
      <Aux>
        {/* <Timepad showModal={this.state.showModal} /> */}
        {/* <Backdrop showBackdrop={this.state.showModal} onClick={this.test} /> */}
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
            <a href="/" rel="noopener noreferrer" target="_blank" onClick={this.modalHandler}>
              Подписаться
            </a>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Subscribe;
