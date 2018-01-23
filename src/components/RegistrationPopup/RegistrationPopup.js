import React, { Component } from 'react';

import classes from './RegistrationPopup.css';

class RegistrationPopup extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://timepad.ru/js/tpwf/loader/min/loader.js';
    script.async = true;
    script.defer = true;
    script.charset = 'utf-8';
    script.setAttribute('data-timepad-customized', '33359');
    script.setAttribute('data-twf2s-event--id', '644648');
    script.setAttribute('data-timepad-widget-v2', 'event_register');
    const wrapper = document.querySelector('.' + classes.Registration);
    wrapper.appendChild(script);
  }

  // componentWillUpdate() {
  // const style = document.createElement('style');
  // style.type = 'text/css';
  // style.textContent = '.i-page{background-color: rgba(255,255,255, 1)!important; padding: 20px;}';
  // const iframe = document.getElementsByTagName('iframe');
  // console.log(iframe);
  // const iframeWrap = document.querySelector('.' + classes.Registration);
  // console.log(iframeWrap);
  // }

  render() {
    return (
      <div className={classes.RegistrationPopup} onClick={this.props.clicked}>
        <div className={classes.Registration} />
      </div>
    );
  }
}

export default RegistrationPopup;
