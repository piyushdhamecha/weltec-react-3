import { IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import { StyledVideo } from "./VideoList.styled";
import { useRef } from "react";

const VideoItem = ({ src, poster}) => {
  const videoRef = useRef()

  const handlePlayClick = () => {
    videoRef.current.play()
  }

  return (
    <div>
      <StyledVideo
        poster={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${poster}`}
        src={src}
        ref={videoRef}
      />
      <div>
        <IconButton aria-label="play" size="small" onClick={handlePlayClick}>
          <PlayArrowIcon size="small" />
        </IconButton>
      </div>
    </div>
  );
};

export default VideoItem