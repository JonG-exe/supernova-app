import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Head from "next/head"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useRef } from 'react'
import emailjs from "@emailjs/browser"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Supernova Financial
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {

  /**
     * Send email from submited form
     */
    
  const form = useRef();

  function sendEmail(e) {
      e.preventDefault();

      alert("Form sent sucessfully. Thanks for reaching out!")

      emailjs.sendForm('service_u8b7kar', 'template_oq6nh1q', form.current, 'eiClv0JnXOsyGQdOk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  }

  return (
    <>
      <Head>
          <meta charset="utf-8" />
          <meta name="description" content="" />
          <title>Financial Quotes | Supernova Financial Solutions</title>
          <link rel="canonical" href="https://supernova-financial.com/plans" />
      </Head>

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box p="20px">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              
              }}
            >
              {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar> */}
              <Typography component="h1" variant="h5">
                Get A Quote
              </Typography>
              <Box component="form" noValidate ref={form} onSubmit={sendEmail} sx={{ mt: 3, width:"700px", maxWidth:"90vw"}}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                    />
                  </Grid>  
                    
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                      <span>Gender: </span>

                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </RadioGroup>
                  </Grid> 

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Plan</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"age"}
                        
                        label="Plan"
                        // onChange={handleChange}
                      >
                        <MenuItem value={"Home & Car Insurance"}>Home & Car Insurance</MenuItem>
                        <MenuItem value={"Life & Critical Illness"}>Life & Critical Illness</MenuItem>
                        <MenuItem value={"Pension"}>Pension</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Occupation"
                      name="occupation"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Employment Address"
                      name="employment-address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Home Address"
                      name="home-address"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Contact Number"
                      name="Contact Number"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Age"
                      name="age"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Income"
                      name="income"
                    />
                  </Grid>
                  
                  {/* <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid> */}
                  <Grid item xs={12} >
                    <TextareaAutosize 
                      style={{
                        margin: "7% 0 0 0",
                        minHeight: "250px",
                        width: "100%",
                        resize: "none",
                        borderRadius: "2px",
                        border: "1px solid lightgrey"
                      }}
                    />
                  </Grid>
                  
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5, mb: 5 }} />
        </Container>
      </ThemeProvider>
    </>

  );
}