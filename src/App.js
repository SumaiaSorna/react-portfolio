import React from "react";
import { Container, Grid } from "@mui/material";

import { Profile } from "./components/Profile";
import { Header } from "./components/Header/";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects";
import { AboutMe } from "./pages/AboutMe/index";
import { ContactMe } from "./pages/ContactMe/index";

import { PageNotFound } from "./pages/PageNotFound/index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <Container className={"top-60"}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3} sx={{ m: 2 }}>
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "white" }} sx={{ m: 2 }}>
          <Router>
            <Header />
            <div className="main-content container-shadow">
              <Routes>
                <Route exact={true} path="/projects" element={<Projects />} />
                <Route exact={true} path="/about" element={<AboutMe />} />
                <Route exact={true} path="/contact" element={<ContactMe />} />
                <Route exact={true} path="/" element={<AboutMe />} />

                <Route path="/*" element={<PageNotFound />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
