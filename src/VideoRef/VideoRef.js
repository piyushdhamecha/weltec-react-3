import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

import React, { useRef, useState } from "react";
import { StyledVideo } from "./VideoRef.styled";

const VideoRef = () => {
  const [paused, setPaused] = useState(true)
  const videoRef = useRef({ paused: true })
  // console.log({ videoRef })
  // const handleMouseEnter = (e) => {
  //   e.target.play();
  // };

  // const handleMouseLeave = (e) => {
  //   e.target.pause();
  // };

  const handlePlayClick = () => {
    // const videoDom = document.getElementById('video-component')

    // videoDom.play()
    videoRef.current.play()
  }

  const handlePauseClick = () => {
    // const videoDom = document.getElementById('video-component')

    // videoDom.pause()
    videoRef.current.pause()
  }

  const handlePlayPauseClick = () => {
    if(videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }

    setPaused(!paused)
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start">
      <StyledVideo
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        ref={videoRef}
        // id="video-component"
        muted
      />
      <div>
        <IconButton aria-label="play" onClick={handlePlayPauseClick}>
          {paused ? <PlayArrowIcon /> : <PauseIcon />}
        </IconButton>
      </div>
    </Box>
  );
};

export default VideoRef;
