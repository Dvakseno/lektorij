import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import RepeatsElements from '../../components/RepeatedElements/RepeatsElements';
import LogoLektorij from '../../components/LogoLektorij/LogoLektorij';
import classes from './Schedule.css';
import Speakers from '../../components/Speakers/Speakers';
import ScheduleContent from '../../components/ScheduleContent/ScheduleContent';
import Partners from '../../components/Partners/Partners';

class Schedule extends Component {
  wheelHandler = e => {
    let delta = e.deltaY;
    if (this.props.location.pathname === '/schedule') {
      if (delta < 0 && window.pageYOffset === 0) {
        setTimeout(() => this.props.history.replace('/about'), 200);
      }
    }
  };
  render() {
    return (
      <Aux>
        <LogoLektorij />
        <RepeatsElements dark />
        <div onWheel={this.wheelHandler} style={{ width: '100vw' }}>
          <div className={classes.Container}>
            <div className={classes.TitleWrapper}>
              <h2>Выступающие</h2>
              {/* <a href="/">Все выступающие</a> */}
            </div>
            <Speakers />
            <div className={classes.TitleWrapper}>
              <h2>Программа</h2>
              {/* <a href="/">Скачать pdf</a> */}
            </div>
            <ScheduleContent />
            <div className={classes.TitleWrapper}>
              <h2>Информационные партнёры</h2>
            </div>
            <Partners />
          </div>
        </div>
      </Aux>
    );
  }
}

export default Schedule;
