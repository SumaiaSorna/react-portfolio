import { Grid, TextField } from "@mui/material";

export const ContactMe = () => {
  return (
    <Grid container className="section">
      <Grid item xs={12} lg={7}>
        <Grid container>
          <Grid item pb={6}>
            <span></span>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={5}></Grid>
    </Grid>
  );
};
