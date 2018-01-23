import React, { Component } from 'react';

import VideoBackground from '../../components/VideoBackground/VideoBackground';
import video from '../../assets/video/background.mp4';
import MainTitle from '../../components/MainTitle/MainTitle';
import BuyTicketButton from '../../components/BuyTicketButton/BuyTicketButton';
import RepeatsElements from '../../components/RepeatedElements/RepeatsElements';
import Aux from '../../hoc/Auxiliary';
import RegistrationPopup from '../../components/RegistrationPopup/RegistrationPopup';

class Lektorij extends Component {
  state = {
    showPopup: false
  };

  wheelHandler = e => {
    let delta = e.deltaY;
    if (this.props.location.pathname === '/') {
      if (delta > 0) {
        setTimeout(() => this.props.history.replace('/about'), 200);
      }
    }
  };
  buttonHandler = e => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  regClose = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    const styles = {
      width: '100vw',
      height: '100vh'
    };

    let registration = this.state.showPopup ? <RegistrationPopup clicked={this.regClose} /> : null;

    return (
      <Aux>
        {registration}
        <div onWheel={this.wheelHandler} style={styles}>
          <VideoBackground autoplay="true" loop="true" muted="true" source={video} page="Main" />
          <MainTitle />
          <BuyTicketButton clicked={this.buttonHandler} />
          <RepeatsElements />
        </div>
      </Aux>
    );
  }
}

export default Lektorij;
