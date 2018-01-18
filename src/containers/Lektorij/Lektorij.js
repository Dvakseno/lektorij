import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import VideoBackground from '../../components/VideoBackground/VideoBackground';
import video from '../../assets/video/background.mp4';
import MainTitle from '../../components/MainTitle/MainTitle';
import BuyTicketButton from '../../components/BuyTicketButton/BuyTicketButton';
import RepeatsElements from '../../components/RepeatedElements/RepeatsElements';

class Lektorij extends Component {
  componentWillUnmount() {
    console.log('[Main Unmount] ');
  }
  render() {
    return (
      <Aux>
        <VideoBackground autoplay="true" loop="true" muted="true" source={video} page="Main" />
        <MainTitle />
        <BuyTicketButton />
        <RepeatsElements />
      </Aux>
    );
  }
}

export default Lektorij;
