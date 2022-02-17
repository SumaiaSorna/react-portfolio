import React from "react";
import { Container, Grid } from "@mui/material";

import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects";
import { AboutMe } from "./pages/AboutMe";

import { Routes, Route } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "blue" }}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          {/* <Routes>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <AboutMe />
            </Route>
          </Routes>
          <Footer /> */}
        </Grid>
      </Grid>
    </Container>
  );
};
