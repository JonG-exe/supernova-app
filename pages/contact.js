import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Head from "next/head"
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function SignUp() {

  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="" />
          <title>Contact Supernova Financial | Supernova Financial Solutions</title>
          <link rel="canonical" href="https://www.supernova-financial.com/contact/" />
      </Head>

        <Container component="main" maxWidth="lg">
          <CssBaseline />
          
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeOW04BvPuFv_eDKxONno74z72HuppYbc11rDU5KUzaF0dUcw/viewform?embedded=true" width="100%" height="675" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </Container>
    </>

  );
}