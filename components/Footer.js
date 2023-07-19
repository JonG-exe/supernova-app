import React from 'react'
import { Stack, Paper, Typography, Box } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
                    <Typography fontSize="1.25em" color="grey" sx={{textDecoration: "underline"}} textAlign={{xs: "center", sm: "start"}}>Links</Typography>
                    <Link href="/contact">Contact Us</Link>
                    <Link href="/plans">Plans</Link>
                    <Link href="/quote">Quotes</Link>
                    <Link href="/blogs">Blog</Link>
                </Stack>

                <Stack 
                    ml={{xs: "0px", sm: "10px"}} 
                    textAlign={{xs: "center", sm: "start"}}
                    spacing={"24px"}
                >
                    <Typography fontSize="1.25em" color="grey" sx={{textDecoration: "underline"}} textAlign={{xs: "center", sm: "start"}}>Contact Info.</Typography>

                    <Stack direction="row" justifyContent={{xs: "center", sm: "flex-start"}}>
                        <LocalPhoneIcon sx={{marginRight: "15px"}}/>
                        <Typography variant="paragraph">Tel. 769-4505</Typography>
                    </Stack>

                    <Stack direction={{xs: "column", sm: "row"}} alignItems={{xs: "center", sm: "flex-start"}} justifyContent={{xs: "center", sm: "flex-start"}}>
                        <Typography minWidth="max-content" variant="paragraph" display="flex" alignItems="center" >
                            <EmailIcon sx={{marginRight: "15px"}}/>e-mail: 
                        </Typography>
                        <Typography variant="paragraph" ml="10px">magray@maritimefinancial.com</Typography>
                    </Stack>

                    <Stack direction={{xs: "column", sm: "row"}} alignItems={{xs: "center", sm: "flex-start"}} justifyContent={"center"}>
                        <Typography minWidth="max-content" variant="paragraph" display="flex" alignItems="center" >
                            <BusinessIcon sx={{marginRight: "15px", fontSize: "1.75em"}}/>Address: 
                        </Typography>
                        <Typography maxWidth="300px" alignSelf="center" variant="paragraph" ml="10px">Ground floor Maritime Centre, 29 Tenth St, Barataria, Trinidad and Tobago, W.I. <br /> <br />
                        Ofc phone: 868-607-MARI Ext 2280
                        </Typography>
                        
                    </Stack>
                        
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

                <Link title="WhatsApp" href="https://wa.me/18687667824" target="_blank">
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
                            <WhatsAppIcon />
                    </Box>
                </Link>

                <Link href="https://www.facebook.com/profile.php?id=100085664509656" target="_blank" title="Facebook">
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
                            <FacebookIcon />
                    </Box>
                </Link>


                <Link href="https://www.instagram.com/supernova_financial/" target="_blank" title="Instagram">
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
                            <InstagramIcon />
                    </Box>
                </Link>

            </Stack>
        </Stack>
    </>
  )
}

export default Footer