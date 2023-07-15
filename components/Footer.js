import React from 'react'
import { Stack, Paper, Typography, Box } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link"

const Footer = () => {
  return (
    <>
        <Stack 
            sx={{
                
                width:"100vw", 
                alignItems:"center",
                justifyContent:"center",
                padding: {xs: "20px", sm:"50px"},
                margin: "0px 0 0 0",
                boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.40)",
                backgroundColor: " #02198B",
                color: "white",
            }}
        >
            <Stack 
                direction= {{xs: "column", sm: "row"}}
                spacing={10}
                width="100%"
            >
                <Stack 
                    mt={{xs: "30px", sm: "0"}}
                    ml={{xs: "0px", sm: "10px"}} 
                    textAlign={{xs: "center", sm: "start"}}
                    justifyContent={{xs: "space-between", sm: "flex"}}
                    spacing={{ xs: 3 }}
                >
                    <Link href="/pension">Pension</Link>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/plans">Plans</Link>
                    <Link href="/quote">Quotes</Link>
                    <Link href="/blog">Blog</Link>
                </Stack>

                <Stack 
                    ml={{xs: "0px", sm: "10px"}} 
                    textAlign={{xs: "center", sm: "start"}}
                >
                    <Typography variant="paragraph">Tel. 769-4505</Typography>

                    <Typography variant="paragraph">e-mail: magray@maritimefinancial.com</Typography>
                </Stack>
                
            </Stack>

            
            <Stack 
                borderTop="2px solid white" 
                width="100%" 
                direction={"row"} 
                justifyContent={'center'}
                paddingTop="30px"
                marginTop="30px"
                spacing={5}
            >
                <Box 
                    width="50px" 
                    height="50px" 
                    border="2px solid white" 
                    borderRadius="50%" 
                    padding="10px"
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                >
                    <Link href="facebook.com">
                        <FacebookIcon />
                    </Link>
                </Box>

                <Box
                    width="50px" 
                    height="50px" 
                    border="2px solid white" 
                    borderRadius="50%" 
                    padding="10px"
                    display="flex"
                    justifyContent={"center"}
                    alignItems="center"
                >
                    <Link href="facebook.com">
                        <InstagramIcon />
                    </Link>
                </Box>

            </Stack>
        </Stack>
    </>
  )
}

export default Footer