import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button, Stack, Typography } from "@mui/material"

const Blog = ( { href, postImage, title, description }) => {
  return (
    <>
        <Link href={ href }>
            <Stack 
                direction={{md: "row"}}
                alignItems={"center"}
                sx={{
                    color: "black",
                    mb: "40px",
                    width: "max-content",
                    p: {xs: "16px 8px", sm: "16px 32px"},
                    border: "1px solid lightgrey",
                    borderRadius: "10px",
                    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)",
                    maxWidth: {xs: "90vw", md: "850px"}
                }}
            >

                <Image width={300}src={postImage} alt="" />

                <Stack ml="30px" spacing={2} justifyContent={"center"} alignItems="flex-start" >
                    <Typography variant="h4">{ title }</Typography>
                    <Typography variant="body1" >{ description }</Typography>

                    <Button variant="contained" href={ href }>Read More...</Button>
                </Stack>

            </Stack>
        </Link>
    </>
  )
}

export default Blog