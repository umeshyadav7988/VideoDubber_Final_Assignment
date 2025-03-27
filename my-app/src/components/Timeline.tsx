import React from "react";
import { Slider } from "@mantine/core";

const Timeline: React.FC = () => {
  return (
    <div style={{ padding: 20, backgroundColor: "#222", color: "#fff" }}>
      <Slider defaultValue={50} label="Timeline" />
    </div>
  );
};

export default Timeline;
