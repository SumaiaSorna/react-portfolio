import { Button, Grid, TextField, Box } from "@mui/material";
import { useState } from "react";
import "./ContactForm.css";

export const ContactForm = () => {
  const [fullNameInput, setFullNameInput] = useState("");
  const [emailAddressInput, setEmailAddressInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [fullNameError, setFullNameError] = useState(false);
  const [emailAddressError, setEmailAddressError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullNameInput) {
      setFullNameError(true);
    }

    if (
      !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(emailAddressInput)
    ) {
      setEmailAddressError(true);
    }

    if (!messageInput) {
      setMessageError(true);
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <Grid container className="contact-section">
        <Grid item lg={7}>
          <Grid container>
            <Grid item pb={6}>
              <h6 className="section-title">Contact Me</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="name"
                    error={fullNameError}
                    label={
                      fullNameError ? "Enter your full name" : "Full Name*"
                    }
                    value={fullNameInput}
                    onChange={(event) => {
                      setFullNameInput(event.currentTarget.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={12}>
                  <TextField
                    fullWidth
                    name="email"
                    error={emailAddressError}
                    label={
                      emailAddressError
                        ? "Enter a valid email address"
                        : "Email Address*"
                    }
                    value={emailAddressInput}
                    onChange={(event) => {
                      setEmailAddressInput(event.currentTarget.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    error={messageError}
                    name="message"
                    label={messageError ? "Enter your message" : "Message*"}
                    value={messageInput}
                    onChange={(event) => {
                      setMessageInput(event.currentTarget.value);
                    }}
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
