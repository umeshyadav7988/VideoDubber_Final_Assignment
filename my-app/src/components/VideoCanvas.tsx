import React from "react";
import { Resizable } from "re-resizable";
import ReactPlayer from "react-player";

interface VideoCanvasProps {
  videoFile: string | null;
}

const VideoCanvas: React.FC<VideoCanvasProps> = ({ videoFile }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      {videoFile && (
        <Resizable defaultSize={{ width: 640, height: 360 }}>
          <ReactPlayer url={videoFile} controls width="100%" height="100%" />
        </Resizable>
      )}
    </div>
  );
};

export default VideoCanvas;
