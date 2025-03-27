import React, { useState } from "react";
import { Button } from "@mantine/core";

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Upload Button at Top-Left */}
      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
        <label htmlFor="fileUpload">
          <Button component="span">Upload File</Button>
        </label>
        {file && <p>Uploaded: {file.name}</p>}
      </div>

      {/* Main Content */}
      <div className="content" style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to the File Upload Page</h1>
      </div>
    </div>
  );
};

export default App;
