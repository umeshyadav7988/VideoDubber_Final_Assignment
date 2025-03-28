import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mantine/core";

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
    setIsPlaying(false);
    setTime(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && videoRef.current) {
        setTime(Math.floor(videoRef.current.currentTime));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw", padding: "20px", display: "flex" }}>
      {/* Scrollable Sidebar */}
     {/* Scrollable Sidebar with Square Buttons */}
<div
  style={{
    position: "relative",
    width: "80px",
    height: "90vh",
    borderRight: "2px solid #4a5568",
    overflowY: "auto",
    padding: "4px",
  }}
>
  <Button style={{ marginBottom: "10px", width: "50px", height: "50px" }}>Video</Button>
  <Button style={{ marginBottom: "10px", width: "50px", height: "50px" }}>Audio</Button>
  <Button style={{ marginBottom: "10px", width: "50px", height: "50px" }}>Subt</Button>
  <Button style={{ marginBottom: "10px", width: "50px", height: "50px" }}>Text</Button>
  <Button style={{ marginBottom: "10px", width: "50px", height: "50px" }}>Elem</Button>
  <Button style={{ marginBottom: "10px", width: "50px", height: "50px" }}>Sett</Button>
</div>

      {/* Square Dotted Box for Upload */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "200px",
          width: "150px",
          height: "150px",
          border: "2px dashed #4a5568",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileUpload}
          style={{ display: "none" }}
          accept="video/*"
        />
        <label htmlFor="fileUpload">
          <Button component="span">Upload</Button>
        </label>
      </div>

      {/* New Buttons Below Upload Box */}
      <div
        style={{
          position: "absolute",
          top: "180px",
          left: "200px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <Button>Record</Button>
        <Button>Brand Kit</Button>
        <Button>Text To Speech</Button>
        <Button>Voice Clone</Button>
      </div>

      {/* Video Display with Fixed Size */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "150px",
          width: "40vw",
          height: "40vh",
          backgroundColor: "black",
          border: "2px solid #4a5568",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {file ? (
          <video
            ref={videoRef}
            src={URL.createObjectURL(file)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            controls
          />
        ) : (
          <p style={{ color: "white", textAlign: "center", paddingTop: "40px" }}>
            No video uploaded
          </p>
        )}
      </div>

     {/* Control Buttons Below Video - Only Visible When Video is Uploaded */}
{file && (
  <div
    style={{
      position: "absolute",
      bottom: "11%",
      right: "60px",
      width: "100vw",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#f7fafc",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #4a5568",
    }}
  >
    <Button
      onClick={handlePlayPause}
      style={{
        backgroundColor: isPlaying ? "#f56565" : "#68d391",
        color: "#fff",
        width: "100px",
      }}
    >
      {isPlaying ? "Pause" : "Play"}
    </Button>
    <Button
      onClick={handleStop}
      style={{ width: "100px" }}
    >
      Stop
    </Button>
    <p>Time: {time}s</p>
  </div>
)}

    </div>
  );
};

export default App;
