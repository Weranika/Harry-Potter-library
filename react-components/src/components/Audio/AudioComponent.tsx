import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PauseIcon from '@mui/icons-material/Pause';
import './audio.scss';

import sounFile from '../../assets/audio/garri-potter-volshebnaya-muzyka.mp3';

function AudioComponent() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [audio] = useState(new Audio(sounFile));
  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [playing]);

  return (
    <IconButton onClick={toggle} className="audio__container">
      {playing ? <PauseIcon /> : <VolumeUpIcon />}
    </IconButton>
  );
}

export default AudioComponent;
