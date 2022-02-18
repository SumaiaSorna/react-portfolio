import React from "react";
import { Button } from "@mui/material";

import "./Button.css";

export const CustomButton = ({ text, icon }) => {
  return;
  <Button
    className="custom-btn"
    endIcon={icon ? <div className="btn-icon-container">{icon}</div> : null}
  >
    <span className="btn-text"></span>
    {text}
  </Button>;
};
