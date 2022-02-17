import { Container, Grid } from "@mui/material";

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
          <Projects />
          <Resume />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};
