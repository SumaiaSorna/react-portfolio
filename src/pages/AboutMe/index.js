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
              Full Stack Web Developer with a background in Digital Marketing.
              Hardworking, patient, enthusiastic and a team player who likes to
              play with clean codes and user-friendly application. Interested to
              work on complex projects to share ideas for creative solutions and
              to improve problem-solving skills. Certified graduate of the
              University of Birmingham coding Bootcamp, March 2022.
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
