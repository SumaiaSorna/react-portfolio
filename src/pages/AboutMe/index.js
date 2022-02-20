import React from "react";
import { Grid, Typography, Paper, TextField } from "@mui/material";
import "./AboutMe.css";

const profileData = require("../../utils/profileData.json");
console.log(profileData);

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
        <Grid xs={12}>
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
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={0}>
                <Typography variant="h6">{skill.title}</Typography>
                {skill.description.map((element) => (
                  <Typography variant="h6">{element}</Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Contact Me */}
      <Grid container className="section">
        {/* contact form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item pb={6}>
              <span></span>
              <h6 className="section-title">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="Email" />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth name="message" label="Message" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* contact info */}
        <Grid item xs={12} lg={5}></Grid>
      </Grid>
    </div>
  );
};
