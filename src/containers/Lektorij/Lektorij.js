import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary';
import VideoBackground from '../../components/VideoBackground/VideoBackground';
import video from '../../assets/video/background.mp4';
import MainTitle from '../../components/MainTitle/MainTitle';
import BuyTicketButton from '../../components/BuyTicketButton/BuyTicketButton';
import DesignLine from '../../components/DesignLine/DesignLine';
import RepeatsElements from '../../components/RepeatedElements/RepeatsElements';
import Navigation from '../../components/Navigation/Navigation';

class Lektorij extends Component {
  render() {
    return (
      <Aux>
        <VideoBackground autoplay="true" loop="true" muted="true" source={video} page="Main" />
        <MainTitle />
        <BuyTicketButton />
        <DesignLine />
        <RepeatsElements />
        <Navigation />
      </Aux>
    );
  }
}

export default Lektorij;
