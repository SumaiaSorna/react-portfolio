import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./Navigation.css";

export const Navigation = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        centered
        onChange={handleChange}
        aria-label="navigation tabs"
      >
        <Tab value="about" label="About Me" />
        <Tab value="projects" label="Projects" />
        <Tab value="contact" label="Contact Me" />
      </Tabs>
    </Box>
  );
};
