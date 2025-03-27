import React from "react";
import { Button, FileInput } from "@mantine/core";

interface SidebarProps {
  setVideoFile: (file: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setVideoFile }) => {
  const handleFileUpload = (event: File | null) => {
    if (event) {
      setVideoFile(URL.createObjectURL(event));
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <FileInput label="Upload Video" accept="video/*" onChange={handleFileUpload} />
      <Button fullWidth mt="md">Add Text</Button>
      <Button fullWidth mt="md">Add Image</Button>
    </div>
  );
};

export default Sidebar;
