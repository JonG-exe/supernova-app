import { Stack, Typography, Button, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function MuiService ( { title, description, img}) {

    const supernovaTheme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    contained: {
                        backgroundImage: "linear-gradient(180deg,#00ff6d ,#00cea9 ,#0cf)",
                        backgroundColor: "none",
                        transition: "all 0.35s",
                        boxShadow: "5px 5px 6px 0 rgba(0,0,0,.2)",
                        height: "7vh",
                        borderRadius: "0",
                        fontSize: "1.1em"
                    }
                },
            },
        }
    })

    return (
        <>
            <ThemeProvider theme={supernovaTheme}>
                <Box sx={{boxSizing: "border-box", padding: "10px", backgroundImage: "linear-gradient(110deg,#006fe3 50%,#0068d4)" }} width="100vw" height="100vh" minHeight="100%" display="flex" justifyContent={"center"} alignItems={"center"}>
                    <Stack width="100%" height="100%" backgroundColor="white" justifyContent={"center"}> 
                        <CssBaseline />
                        
                        <Stack padding={{xs: "10px", sm: "50px"}} direction={{xs: "column-reverse", md: "row"}} justifyContent={"center"} alignItems={{xs: "center"}} >
                            <Stack mr={{md: "50px"}} maxWidth={{md: "800px"}} spacing={4} justifyContent={"center"} alignItems={{xs: "center", md: "flex-start"}}>

                                <Typography width="100%" component={"h1"} variant={{xs: "h2", sm: "h1"}}>{ title }</Typography>
                                <Typography variant="body1" fontSize={{xs: "20px", md: "24px"}} maxWidth="600px">
                                    { description }
                                </Typography>

                                <Stack direction="row" spacing={2}>
                                    <Button href="/quote" variant='contained'>Get A Quote</Button>
                                    <Button variant="outlined">Read More...</Button>
                                </Stack>
                                
                            </Stack>

                            <Box width="50%" maxWidth={{xs: "280px", md: "600px"}} minWidth="280px" display="flex" justifyContent={"center"} alignItems={"center"}>
                                <Image alt="" style={{width:"100%", height:"100%"}} src={img}/>
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </ThemeProvider>
        </>
    )

}