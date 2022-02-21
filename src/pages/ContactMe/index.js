import { Button, Grid, TextField } from "@mui/material";
//import { CustomButton } from "../../components/Button/index";
import "./ContactMe.css";

export const ContactMe = () => {
  return (
    <Grid container className="section">
      <Grid item lg={7}>
        <Grid container>
          <Grid item pb={6}>
            <h6 className="section-title">Contact Me</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField fullWidth name="name" label="Full Name*" />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField fullWidth name="email" label="Email Address*" />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  name="message"
                  label="Message*"
                />
                <Button
                  className="btn"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 5, mb: 2 }}
                >
                  Submit
                </Button>

                {/* <Grid item xs={12}>
                  <CustomButton variant="text" />
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
