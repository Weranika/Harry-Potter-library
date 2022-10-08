import React from 'react';
import { IconButton } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PauseIcon from '@mui/icons-material/Pause';
import sounFile from '../../assets/audio/garri-potter-volshebnaya-muzyka.mp3';
import './audio.scss';

interface IMusicState {
  play: boolean;
}

class Music extends React.Component<IMusicState, IMusicState> {
  private audio: HTMLAudioElement;

  constructor(props: IMusicState) {
    super(props);
    this.state = {
      play: false,
    };
    this.audio = new Audio(sounFile);
  }

  componentDidMount() {
    this.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', () => this.setState({ play: false }));
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return (
      <IconButton onClick={this.togglePlay} className="audio__container">
        {this.state.play ? <PauseIcon /> : <VolumeUpIcon />}
      </IconButton>
    );
  }
}

export default Music;
