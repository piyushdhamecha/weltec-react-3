import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

import { StyledVideo } from "./VideoList.styled";
import { useRef, useState } from "react";

const VideoItem = ({ src, poster }) => {
  const [paused, setPaused] = useState(true);
  const [muted, setMuted] = useState(false);

  const videoRef = useRef();

  const handlePlayPauseClick = () => {
    if(videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause()
    }
    
    setPaused(!paused)
  };

  const handleMuteUnmuteClick = () => {
    if(videoRef.current.muted) {
      videoRef.current.muted = false
    } else {
      videoRef.current.muted = true
    }

    setMuted(!muted)
  }

  return (
    <div>
      <StyledVideo
        poster={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${poster}`}
        src={src}
        ref={videoRef}
      />
      <div>
        <IconButton aria-label="play" size="small" onClick={handlePlayPauseClick}>
          {paused ? <PlayArrowIcon fontSize="10"/> : <PauseIcon fontSize="10" />}
        </IconButton>
        <IconButton aria-label="play" size="small" onClick={handleMuteUnmuteClick}>
          {muted ? <VolumeOffIcon fontSize="10"/> : <VolumeMuteIcon fontSize="10" />}
        </IconButton>
      </div>
    </div>
  );
};

export default VideoItem;
