import React from "react";
import { Container, Grid } from "@mui/material";

import { Profile } from "./components/Profile";
import { Header } from "./components/Header/";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects/Projects";
import { AboutMe } from "./pages/AboutMe/index";
import { PageNotFound } from "./pages/PageNotFound/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <Container className={"top-60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router>
            <Routes>
              <Route exact={true} path="/projects" element={<Projects />} />
              <Route exact={true} path="/" element={<AboutMe />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
