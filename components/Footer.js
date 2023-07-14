import React from 'react'
import { Stack, Paper, Typography, Box } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link"

const Footer = () => {
  return (
    <>
        <Stack sx={{
            width:"100vw", alignItems:"center", justifyContent:"center",
            padding: "50px",
            margin: "0px 0 0 0",
            boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.40)",
            backgroundColor: " #02198B",
            color: "white",
            }}
        >
            <Stack 
                direction="row"
                spacing={10}
                width="100%"
            >
                <Stack ml="10px">
                    <Typography variant="h5">Pension</Typography>
                    <Typography variant="h5">Contact Us</Typography>
                    <Typography variant="h5">Plans</Typography>
                    <Typography variant="h5">Quotes</Typography>
                    <Typography variant="h5">Blog</Typography>
                </Stack>

                <Stack mr="10px">
                    <Typography variant="h5">Tel. 769-4505</Typography>
                    <Typography variant="h5">e-mail: magray@maritimefinancial.com</Typography>
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