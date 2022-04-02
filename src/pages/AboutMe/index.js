import React from "react";
import { Grid, Typography, Paper, TextField, Divider } from "@mui/material";
import "./AboutMe.css";

const profileData = require("../../utils/profileData.json");

export const AboutMe = () => {
  return (
    <div>
      {/* AboutMe */}
      <Grid container className="section">
        <Grid item>
          <span></span>
          <h6 className="section-title">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Typography className="section-text">
              Sumaia is a full-stack web developer in training and have the
              necessary education, training and enthusiasm to make a difference
              in a working environment. Sumaia was a marketing graduate but
              retrained herself in web development, and thus poses a combined
              skill from both disciplines for the digital world.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section">
        <Grid item xs={12}>
          <span></span>
          <h6 className="section-title">Skills</h6>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          spacing={1}
          className="skills-title"
        >
          {profileData.map((skill) => (
            <Grid key={skill.title} item xs={12} sm={6} md={3}>
              <Paper elevation={0}>
                <Typography variant="h6">{skill.title}</Typography>
                <Divider />
                {skill.description.map((element) => (
                  <Typography key={element}>{element}</Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
