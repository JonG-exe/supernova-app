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

  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Get near-instant pre-approval for your financial and insurance needs in Trinidad. Secure your future with ease on our platform. Get a quote today." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Insurance & Financial Quotes | Supernova Financial Solutions</title>
          <link rel="canonical" href="https://www.supernova-financial.com/quote" />
      </Head>

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf5BIpWCxuzolbXmhygOqjO4tAQtIYV5GpJ7HRi2y39MBEVxg/viewform?embedded=true" width="100%" height="1865" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </Container>
      </ThemeProvider>
    </>

  );
}