import { useRef, useState, useEffect } from "react";

import data from "./data";
import { StyledListContainer } from "./VideoList.styled";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    setTimeout(() => {
      setVideoData(data.categories[0].videos);
    }, 2000);
  }, []);

  return (
    <div>
      <h3>Video list</h3>
      <StyledListContainer>
        {videoData &&
          videoData.length > 0 &&
          videoData.map((videoItem) => {
            return (
              <VideoItem src={videoItem.sources[0]} poster={videoItem.thumb} />
            );
          })}
      </StyledListContainer>
    </div>
  );
};

export default VideoList;
