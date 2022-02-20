import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

import "./Button.css";

export const CustomButton = () => {
  return (
    <div className="btn-container">
      <Button
        variant="outlined"
        target="_blank"
        href="https://drive.google.com/drive/u/0/folders/1nSkFUGEJtUQk9S_Zpas5DtltJ6RwcDbf"
        className="btn"
      >
        Download CV
        <DownloadIcon className="btn-icon-container" />
      </Button>
    </div>
  );
};
