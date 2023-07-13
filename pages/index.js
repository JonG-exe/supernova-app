import Link from "next/link"
import { Stack, Typography, Button, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material"
import Image from "next/image"
import HeroImg from "../public/images/supernova-financial-hero.png"
import Head from "next/head"


export default function muiIndex () {

    const supernovaTheme = createTheme({
        components: {

            MuiButton: {
                styleOverrides: {
                    root: {
                        backgroundImage: "linear-gradient(180deg,#00ff6d ,#00cea9 ,#0cf)",
                        backgroundColor: "none",
                        transition: "all 0.35s",
                        boxShadow: "5px 5px 6px 0 rgba(0,0,0,.2)",
                        height: "7vh",
                        borderRadius: "0",
                        minHeight: "50px",
                    }
                },
            },

        }
    })

    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="description" content="" />
                <title>Insurance Agency In Trinidad | Supernova Financial Solutions</title>
                <link rel="canonical" href="https://supernova-financial.com" />
            </Head>

            <ThemeProvider theme={supernovaTheme}>
                <Box sx={{boxSizing: "border-box", padding: "10px", backgroundImage:
                "linear-gradient(110deg,#006fe3,#017dfe 35%, 50%,#0068d4)"}} width="100vw" minHeight="700px" height="100vh"  backgroundColor="blue"  display="flex" justifyContent={"center"} alignItems={"center"}>
                    <Stack width="100%" height="100%" backgroundColor="white" justifyContent={"center"}> 
                        <CssBaseline />
                        
                        <Stack padding={{xs: "10px", sm: "50px"}} direction={{xs: "column-reverse", md: "row"}} justifyContent={"center"} alignItems={{xs: "center"}} >
                            <Stack mr={{md: "50px"}} width={{xs: "100%", md:"50%"}} maxWidth={{md: "700px"}} spacing={4} justifyContent={"center"} alignItems={{xs: "center", md: "flex-start"}}>
                                <Typography width="100%" component={"h1"} variant={{xs: "h2", sm: "h1"}}>Supernova Financial Solutions</Typography>
                                <Typography variant="body1" fontSize={{xs: "20px", md: "24px"}} maxWidth="xs">
                                    Giving you the piece of mind you need to secure you through lifes unpredictable twists and turns.
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <Button href="/plans" variant='contained'>Plans</Button>
                                    <Button href="/contact" variant="outlined">Get In Touch</Button>
                                </Stack>
                                
                            </Stack>

                            <Box mt="25px" width="40%" height="100%" maxWidth={{xs: "280px" , md: "600px"}} minWidth="280px" display="flex" justifyContent={"center"} alignItems={"center"}>
                                {/* <Image style={{width:"100%", height:"100%"}} src={Mauricia} alt="" /> */}

                                <Link href="/plans">
                                    <Image style={{width:"100%", height:"100%"}} src={HeroImg} alt="" />
                                </Link>
                                

                                {/* <Box 
                                    sx={{
                                        backgroundColor: "blue",
                                        width: "350px",
                                        height: "350px",
                                        borderRadius: "16px"
                                    }}
                                >
                                    <Typography variant="h4">July 2023</Typography>
                                    <Typography variant="h4">
                                        Find A Policy That’s Right For You
                                    </Typography>

                                    <Stack direction="row">
                                        <Typography variant="h4">View Curated Policies</Typography>
                                        <Typography variant="h4">Policies</Typography>
                                    </Stack>
                                    
                                </Box> */}
                            </Box>

                        </Stack>
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    )

}