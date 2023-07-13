import React from 'react'
import Image from "next/image"
import InsuranceHero from "../../public/images/family.png"
import { Box, Container, Typography, Stack } from '@mui/material'
import Head from 'next/head'

const LifeInsurance = () => {
  return (
    <>
      <Head>
        <title>Life and Critical Illness | Supernova Financial</title>
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
              variant="h2">Understanding Life and Critical Illness</Typography>
            <Typography variant='h5' sx={{color:"grey"}}>11th July, 2023</Typography>
          </Stack>


            <Box alignSelf="center">
              <Image src={InsuranceHero} alt=""/>
            </Box>
            

            <Typography variant="subtitle1" alignSelf="flex-start"><b>Available for ages 0 - 69 years</b></Typography>

            <Typography variant="body1">Life insurance is a social contract where the unfortunate few are supported by the fortunate many. It{'s'} ‘magic dollars’ paid due to the fact that your premiums paid into this pool of money, collected by an insurance company from other citizens like yourself, will pay future income you have not earned yet, in the event of death of disability.</Typography> <br />

            <Typography variant="body1">
              Whole Life – (Cash Value life insurance to age 100 years)
              This cash value life insurance plan is permanent coverage which provides security for a lifetime.
              The cash value built up in the plan enables you to have access to a loan facility where you can borrow
              against its increasing value over time in force. You can also use the cash value as collateral for future
              loans if you choose. Upon your untimely passing, your beneficiaries receive the sum insured (insured
              value minus any loans).
            </Typography> <br />

            <Typography variant="body1">
            For example, if you are insured for $1,000,000 and have a loan of $20,000 outstanding on the policy
              balance this is what will be paid, $1,000,000 - $20,000 = $980,000.
              This $980,000 is paid to your named beneficiary or estate, if no one is named. Its always better to
              named beneficiaries to avoid probate/legal fees to determine who is entitled to your belongings
              (estate).
            </Typography> <br />

            <Typography variant="body1">
              Once premiums are up to date, life insurance guarantees that once you aren’t around to provide
              food, education tuition and books, extra-curricular activities, shelter, entertainment and transport etc,
              the money left behind through life insurance delivers needed comfort while your family is mourning
              your loss. Dreams and aspirations you have for the family can continue.
            </Typography> <br />


            <Typography variant="h3"><br />Cash value benefits can be use for:</Typography> <br />

            <ul>
              <li>- Emergency expenses</li>
              <li>- Down payment for your dream home or paying off a mortgage,</li>
              <li>- Your dream get away (vacation)</li>
              <li>- Loan collateral while you are alive</li>
              <li>- Cover funeral bills, executor and probate fees</li>
            </ul>

            <Typography variant="h3"><br />Term to 85 yrs (Temporary Life Coverage)</Typography> <br />

            <Typography variant="body1"><br />Term life is like renting insurance for a period of time e.g. 10, 20, term to 65, 85 yrs. It is
            designed to afford you the temporary life coverage you need in the event of your untimely passing –
dying too soon. It is cheaper, more affordable coverage than whole life or universal life (unit linked)
insurance, both of which are cash value builders. Term life is best suited for mortgages or business
coverage. Term coverage gives the added assurance debts and income replacement needs are met.
It can be converted to cash value at any time during the life of the policy, once in force at the time of
conversion.</Typography> <br />


            <Typography variant="body1"><br /><b>Key Person Insurance</b>Term life is like renting insurance for a period of time e.g. 10, 20, term to 65, 85 yrs. It is
            designed to afford you the temporary life coverage you need in the event of your untimely passing –
dying too soon. It is cheaper, more affordable coverage than whole life or universal life (unit linked)
insurance, both of which are cash value builders. Term life is best suited for mortgages or business
coverage. Term coverage gives the added assurance debts and income replacement needs are met.
It can be converted to cash value at any time during the life of the policy, once in force at the time of
conversion.</Typography> <br />

            <Typography variant="h3"><br />Riders</Typography> <br />

            <Typography variant="body1"><br />To provide you with extended benefits riders give extra cheap coverage for small premiums. The 
following can be added for additional comfort….
Accidental Death
Accidental Indemnity Rider (Monthly Disability Income replacement)
Dread Disease Accelerated Rider
Level Term
Mortgage Protection Plan
Retrenchment
Waiver of premium on Death or Disability of the Insured</Typography> <br />

            



            </Stack>
        </article>
      </Container>
    </>
  )
}

export default LifeInsurance