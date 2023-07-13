import React from 'react'
import Image from "next/image"
import MajorMedical from "../../public/images/major-medical-hero.jpg"
import { Box, Container, Typography, Stack } from '@mui/material'
import Head from 'next/head'

const LifeInsurance = () => {
  return (
    <>
      <Head>
        <title>Major Medical | Supernova Financial</title>
      </Head>

      <Container sx={{mt: "50px", mb:"100px"}}>
        <article>
          <Stack spacing={2}>

          <Stack alignSelf="center" spacing={1}>
            <Typography 
              fontSize={{
                xs: "2.5em",
                sm: "4em"
            }}
              component="h1" 
              variant="h2"
            >Understanding Major Medical</Typography>
            <Typography variant='h5' sx={{color:"grey"}}>11th July, 2023</Typography>
          </Stack>

            <Box alignSelf="center" width="350px" height="350px" maxWidth="90vw" >
              <Image maxWidth="100%" src={MajorMedical} />
            </Box>


            <Typography variant="subtitle1" alignSelf="flex-start"><b>Available from ages 20-60 yrs</b></Typography>

            <Typography variant="body1">Want to enjoy preferred health care at private 24 hr medical hospitals and don’t want to pay-out-of pocket or can’t afford to? Then owning AdMed’s unique package will be right for you. It’s a comprehensive package of benefits that include:</Typography> <br />

            <Typography variant="body1"><b>Medical Coverage</b> – to nurse you back to good health</Typography>

            <ul>
                <li>Surgical benefit up to $700,000</li>
                <li>Hospital Diagnostics benefit e.g. MRI, X-ray, CT Scan</li>
                <li> Accident and Emergency benefit</li>
            </ul>

            <Typography variant="body1">
              Whole Life – (Cash Value life insurance to age 100 years)
              This cash value life insurance plan is permanent coverage which provides security for a lifetime.
              The cash value built up in the plan enables you to have access to a loan facility where you can borrow
              against its increasing value over time in force. You can also use the cash value as collateral for future
              loans if you choose. Upon your untimely passing, your beneficiaries receive the sum insured (insured
              value minus any loans).
            </Typography> <br />

            <Typography variant="body1"><b>Death Benefit</b> – in case you die too soon and don’t want to burden your loved ones with funeral expenses.</Typography>

            <Typography variant="body1">Accelerated Death Benefit on diagnosis of a Critical Illness</Typography>

            <ul>
                <li>Lump sum payment can be used to pay off debts/bills</li>
                <li>Buy a wheelchair</li>
                <li>Pay for convalescence care or a nurse at home</li>
            </ul>

            <Typography variant="body1"><b>AdMed Card</b></Typography>

            <Typography variant="body1">United Healthcare Global ID Card (concierge services)</Typography>

            <Typography variant="subtitle1" alignSelf="flex-start"><b>Why Major Medical?</b></Typography>

            <Typography variant="body1">Most health plans do not cover 100% of health care costs, especially the large bills. These can cripple an individual’s savings goals and set you back for years. Being prepared to handle these costs is where AdMed covers up to $2M in Life and Critical Illness coverage and $700,000 Surgical benefit. Even if you have surgery done at a public hospital the lump sum is still paid to you. We don’t need any original bills for this benefit, just proof it was done.</Typography>
            

            </Stack>
        </article>
      </Container>
    </>
  )
}

export default LifeInsurance