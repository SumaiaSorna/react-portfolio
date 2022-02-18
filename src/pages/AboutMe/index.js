import React from "react";
import { Grid, Typography } from "@mui/material";

import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <>
      {/* AboutMe */}
      <Grid container className="section">
        <Grid item>
          <span></span>
          <h6 className="section-title">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography className="section-text">
            Sumaia is a full-stack web developer in training and have the
            necessary education, training and enthusiasm to make a difference in
            a working environment. Sumaia was a marketing graduate but retrained
            herself in web development, and thus poses a combined skill from
            both disciplines for the digital world.
          </Typography>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section"></Grid>
    </>
  );
};
