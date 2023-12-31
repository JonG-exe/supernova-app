import React from 'react'
import Head from "next/head"
import BlogLink from "../../components/BlogLink"
import { Box, Typography, Container, Stack } from '@mui/material'
import Life from "../../public/images/what-is-life-insurance.jpg"
import MajorMedicalHero from "../../public/images/major-medical-hero.jpg"
import FinancingHero from "../../public/images/financing-hero.jpg"
import Retirement from "../../public/images/retirement-on-the-beach.jpg"
import Financing from "../../public/images/financing-illustration.jpg"


const BlogIndex = () => {
  return (
    <>

        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Discover how strategic financial planning and robust insurance coverage can pave the way to a secure future by diving into our insightful and curated blog." />
          <title>Insurance and Financing Blog | Supernova Financial Solutions</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://www.supernova-financial.com/blogs" />
        </Head>
      
        <Box width="100vw" height="100%" minHeight="100vh">
            <Container>

                <Typography 
                    mt="50px"
                    mb="50px"
                    fontSize={{
                        xs: "2.5em",
                        sm: "4em"
                    }}
                    variant="h1" 
                    textAlign={'center'}
                >
                    <span>Understanding Insurance Plans</span>
                </Typography>

                <Stack alignItems={"center"}>

                    <BlogLink 
                        href={"/blogs/life-and-critical-illness"}
                        postImage={Life}
                        title={"Life and Critical Illness"}
                        description={"Life insurance is a social contract where the unfortunate few are supported by the fortunate many. Its ‘magic dollars’ paid due to the fact your premiums paid into his pool of money..."}
                    />

                    <BlogLink 
                        href={"/blogs/major-medical-insurance"}
                        postImage={MajorMedicalHero}
                        title={"Major Medical"}
                        description={"Want to enjoy preferred health care at private 24 hr medical hospitals and don’t want to pay-out-of pocket or can’t afford to?..."}
                    />

                    <BlogLink 
                        href={"/blogs/triflex-life-insurance-investment"}
                        postImage={FinancingHero}
                        title={"Triflex - Life Insurance Investment"}
                        description={"Investing is made simple when you purchase Triflex. It comprises 3 investment funds with the benefit to deposit lump sums into the plan and gain superior returns."}
                    />

                    <BlogLink 
                        href={"/blogs/pension"}
                        postImage={Retirement}
                        title={"Pension"}
                        description={"Retirement planning is something most people ignore or put off to their own hurts until too late.  Starting early guarantees you will put in enough to have fun and do what you choose to do in your ‘golden’ years."}
                    />

                    <BlogLink 
                        href={"/blogs/financing"}
                        postImage={Financing}
                        title={"Financing"}
                        description={"The secret to expanding the 'borders of your habitation', living a bigger, fuller life lies in your ability to access the tools to achieve your objectives.."}
                    />
                    

                </Stack>

                
            </Container>
        </Box>
    </>
  )
}

export default BlogIndex