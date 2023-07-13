import React from 'react'
import BlogLink from "../../components/BlogLink"
import { Typography, Container, Stack } from '@mui/material'
import Life from "../../public/images/what-is-life-insurance.jpg"
import MajorMedical from "../../public/images/major-medical-hero.jpg"

const BlogIndex = () => {
  return (
    <>
        <Container>

            <Typography 
                mt="50px"
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
                    href={"/blogs/major-medical"}
                    postImage={MajorMedical}
                    title={"Major Medical"}
                    description={"Want to enjoy preferred health care at private 24 hr medical hospitals and don’t want to pay-out-of pocket or can’t afford to?..."}
                />

            </Stack>

            
        </Container>
    </>
  )
}

export default BlogIndex