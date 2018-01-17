import React, { Component } from 'react';

import classes from './Timepad.css';

class Timepad extends Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.src = '//timepad.ru/js/tpwf/loader.min.js';
    script.async = true;
    script.setAttribute('data-timepad-widget', 'org_subscribe');
    script.textContent =
      '(function () { return { "event":{"id": 120174}, "orgtag": "lektorij"  }; })();';

    const wrapper = document.querySelector('.' + classes.Timepad);
    wrapper.appendChild(script);
  }
  render() {
    let timepadClass = null;
    timepadClass = this.props.showModal
      ? [classes.Timepad, classes.TimepadActive].join(' ')
      : classes.Timepad;
    return <div className={timepadClass} />;
  }
}

export default Timepad;
