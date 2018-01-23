import React, { Component } from 'react';

import classes from './BuyTicketButton.css';

class BuyTicketButton extends Component {
  render() {
    return (
      <a href="/" className={classes.BuyTicketButton} onClick={this.props.clicked}>
        Купить билет
      </a>
    );
  }
}

export default BuyTicketButton;
