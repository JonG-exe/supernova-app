import { useRef, useEffect, React } from 'react'
import Image from "next/image"
import { Box, Container, Typography, Stack } from '@mui/material'
import Head from 'next/head'
import "../styles/blog.css"

const LifeInsurance = ( { Text, title, mainImage, canonical } ) => {

  const articleRef = useRef(null)
  const heading = useRef(null)

  useEffect(() => {
    articleRef.current.innerHTML=Text.HTML
    heading.current.innerHTML=Text.h1
  })

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="description" content="" />
        <title>{ title } | Supernova Financial Solutions</title>
        <link rel="canonical" href={"https://supernova-financial.com/" + {canonical}} />
      </Head>

      <Container sx={{mt: "50px", mb:"100px", }}>

        <div ref={heading}></div>

        <Box className="test" display="flex" justifyContent={"center"} width="100%">
          <Image className="blog-hero-image" src={ mainImage.img } alt={ mainImage.alt }/>
        </Box>

        <Box m>
          <article ref={articleRef}></article>
        </Box>
      </Container>
    </>
  )
}

export default LifeInsurance