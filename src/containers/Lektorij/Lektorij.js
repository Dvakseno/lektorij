import React, { Component } from 'react';

import VideoBackground from '../../components/VideoBackground/VideoBackground';
import video from '../../assets/video/background.mp4';
import MainTitle from '../../components/MainTitle/MainTitle';
import BuyTicketButton from '../../components/BuyTicketButton/BuyTicketButton';
import RepeatsElements from '../../components/RepeatedElements/RepeatsElements';

class Lektorij extends Component {
  wheelHandler = e => {
    let delta = e.deltaY;
    if (this.props.location.pathname === '/') {
      if (delta > 0) {
        setTimeout(() => this.props.history.replace('/about'), 100);
      }
    }
  };
  render() {
    const styles = {
      width: '100vw',
      height: '100vh'
    };
    return (
      <div onWheel={this.wheelHandler} style={styles}>
        <VideoBackground autoplay="true" loop="true" muted="true" source={video} page="Main" />
        <MainTitle />
        <BuyTicketButton />
        <RepeatsElements />
      </div>
    );
  }
}

export default Lektorij;
