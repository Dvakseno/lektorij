import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import VideoBackground from '../../components/VideoBackground/VideoBackground';
import video from '../../assets/video/Lektorij2018.mp4';
import RepeatedElements from '../../components/RepeatedElements/RepeatsElements';
import LogoLektorij from '../../components/LogoLektorij/LogoLektorij';
import AboutTop from '../../components/AboutTop/AboutTop';
import AboutBottom from '../../components/AboutBottom/AboutBottom';
import classes from './About.css';

class About extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  wheelHandler = e => {
    let delta = e.deltaY;
    if (this.props.location.pathname === '/about') {
      if (delta > 0) {
        setTimeout(() => this.props.history.replace('/schedule'), 100);
      } else {
        setTimeout(() => this.props.history.replace('/'), 100);
      }
    }
  };
  render() {
    return (
      <Aux>
        <VideoBackground
          autoplay={null}
          loop="true"
          muted={null}
          source={video}
          page="About"
          classNameVisible={classes.AboutWrapper}
        />
        <div className={classes.AboutWrapper} onWheel={this.wheelHandler}>
          <RepeatedElements />
          <LogoLektorij />
          <AboutTop />
          <AboutBottom />
        </div>
      </Aux>
    );
  }
}

export default About;
