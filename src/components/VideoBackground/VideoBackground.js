import React, { Component } from 'react';

import classes from './VideoBackground.css';
import Aux from '../../hoc/Auxiliary';

import playButton from '../../assets/images/play.png';
import playButtonHover from '../../assets/images/play_ac.png';
import pauseButton from '../../assets/images/pause.png';
import pauseButtonHover from '../../assets/images/pause_ac.png';

class VideoBackground extends Component {
  state = {
    play: false
  };

  componentWillUnmount() {
    const navigation = document.querySelector('.App>ul');
    navigation.style.opacity = '1';
  }

  playHandler = () => {
    this.setState({ play: !this.state.play });
  };

  hoverControlHandler = status => {
    const control = document.querySelector('.' + classes.VideoControls);
    let button = null;
    let buttonHover = null;
    button = status ? playButton : pauseButton;
    buttonHover = status ? playButtonHover : pauseButtonHover;
    control.addEventListener('mouseover', () => {
      control.style.backgroundImage = 'url(' + buttonHover + ')';
    });
    control.addEventListener('mouseout', () => {
      control.style.backgroundImage = 'url(' + button + ')';
    });
  };

  showPauseButton = () => {
    const control = document.querySelector('.' + classes.VideoControls);
    const hidePauseButton = () => {
      control.classList.add(classes.VideoBackgroundHidden);
    };
    let timeout = setTimeout(hidePauseButton, 1000);
    window.addEventListener('mousemove', () => {
      clearTimeout(timeout);
      control.classList.remove(classes.VideoBackgroundHidden);
      if (this.state.play) {
        timeout = setTimeout(hidePauseButton, 1000);
      }
    });
  };

  componentDidMount() {
    if (this.props.page === 'About') {
      this.hoverControlHandler(!this.state.play);
      this.showPauseButton();
    }
    if (this.props.page === 'About' || this.props.page === 'Main') {
      this.videoSize();
      this.resizeWindowHandler();
    }
  }

  videoSize = () => {
    const video = document.querySelector('.' + classes.VideoBackground + ' video');
    video.style.width = window.innerWidth + 'px';
    if (video.offsetHeight < window.innerHeight) {
      video.style.width = 'auto';
      video.style.height = window.innerHeight + 'px';
    }
    console.log(video.offsetWidth, video.offsetHeight);
  };

  resizeWindowHandler = () => {
    window.addEventListener('resize', () => {
      const video = document.querySelector('.' + classes.VideoBackground + ' video');
      video.style.height = 'auto';
      video.style.width = window.innerWidth + 'px';
      if (video.offsetHeight < window.innerHeight) {
        video.style.width = 'auto';
        video.style.height = window.innerHeight + 'px';
      }
      console.log(video.offsetWidth, video.offsetHeight);
    });
  };

  componentWillUpdate() {
    if (this.props.page === 'About') {
      const bgvideo = document.querySelector('.' + classes.VideoBackground);
      const video = bgvideo.firstChild;
      const contentwrapper = document.querySelector('.' + this.props.classNameVisible);

      const navigation = document.querySelector('.App>ul');

      if (!this.state.play) {
        video.play();
        bgvideo.classList.add(classes.Play);
        contentwrapper.style.opacity = '0';
        navigation.style.opacity = '0';
        this.hoverControlHandler(this.state.play);
      } else {
        video.pause();
        bgvideo.classList.remove(classes.Play);
        contentwrapper.style.opacity = '1';
        navigation.style.opacity = '1';
        this.hoverControlHandler(this.state.play);
      }
    }
  }

  render() {
    const stylesPlay = {
      backgroundImage: 'url(' + playButton + ')'
    };
    const stylePause = {
      backgroundImage: 'url(' + pauseButton + ')'
    };

    let styles = this.state.play ? stylePause : stylesPlay;

    let Page = null;
    let controls = null;
    if (this.props.page === 'Main') {
      Page = classes.Main;
    } else {
      Page = classes.About;
      controls = (
        <button className={classes.VideoControls} style={styles} onClick={this.playHandler} />
      );
    }

    return (
      <Aux>
        {controls}
        <div className={[classes.VideoBackground, Page].join(' ')}>
          <video
            src={this.props.source}
            autoPlay={this.props.autoplay}
            loop={this.props.loop}
            muted={this.props.muted}
          />
        </div>
      </Aux>
    );
  }
}

export default VideoBackground;
