import { Stack, Typography, Button, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material"
import Image from "next/image"

// Image Imports
import CarIcon from "../public/images/icons/new_icon-car.png"
import MedicalIcon from "../public/images/icons/new_icon-medical.png"
import HomeIcon from "../public/images/icons/new_icon-home.png"
import PersonIcon from "../public/images/icons/new_icon-person.png"

export default function MuiService ( { title, img}) {

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
                        borderRadius: "0"
                    }
                },
            },
        }
    })

    return (
        <>
            <ThemeProvider theme={supernovaTheme}>
                <Box sx={{boxSizing: "border-box", padding: "10px", backgroundImage: "linear-gradient(110deg,#006fe3 50%,#0068d4)"}} width="100vw"  minHeight="100%" display="flex" justifyContent={"center"} alignItems={"center"}>
                    <Stack width="100%" height="100%" minHeight="100vh" backgroundColor="white" justifyContent={"center"}> 
                        <CssBaseline />
                        
                        <Stack padding={{xs: "10px", sm: "50px"}} direction={{xs: "column-reverse", md: "row"}} justifyContent={"center"} alignItems={{xs: "center"}} >
                            <Stack mr={{md: "50px"}} maxWidth={{md: "800px"}} spacing={4} justifyContent={"center"} alignItems={{xs: "center", md: "flex-start"}}>

                                <Typography width="100%" component={"h1"} variant={{xs: "h2", sm: "h1"}}>{ title }</Typography>
                               
                                <Stack direction="row" spacing={2}>
                                    <Box mr={{md:"150px"}} className="insurance_box">

                                            <Stack 
                                                direction="row" 
                                                alignItems="center"
                                                sx={{padding: "10px 45px 10px 40px", mt:"15px"}}
                                                border="1px solid lightgrey" 
                                                borderRadius="15px"
                                                width="350px"
                                                minWidth="100%"
                                                boxShadow="2px 4px 7px hsla(0,0%,51%,.749)"
                                            >
                                                <Image width={75} alt="" src={CarIcon}/>
                                                <Typography ml="20px" variant="h5">Home & Auto</Typography>                
                                            </Stack>

                                            <Stack 
                                                direction="row" 
                                                alignItems="center"
                                                sx={{padding: "10px 45px 10px 40px", mt:"15px"}}
                                                border="1px solid lightgrey" 
                                                borderRadius="15px"
                                                width="350px"
                                                minWidth="max-content"
                                                boxShadow="2px 4px 7px hsla(0,0%,51%,.749)"
                                            >
                                                <Image width={75} alt="" src={MedicalIcon}/>
                                                <Typography ml="20px" variant="h5">Life & Critical Illness</Typography>                
                                            </Stack>

                                            <Stack 
                                                direction="row" 
                                                alignItems="center"
                                                sx={{padding: "10px 45px 10px 40px", mt:"15px"}}
                                                border="1px solid lightgrey" 
                                                borderRadius="15px"
                                                width="350px"
                                                minWidth="100%"
                                                boxShadow="2px 4px 7px hsla(0,0%,51%,.749)"
                                            >
                                                <Image width={75} alt="" src={MedicalIcon}/>
                                                <Typography ml="20px" variant="h5">Major Medical</Typography>                
                                            </Stack>

                                            <Stack
                                                direction="row" 
                                                alignItems="center"
                                                sx={{padding: "10px 45px 10px 40px", mt:"15px", mb:"15px"}}
                                                border="1px solid lightgrey" 
                                                borderRadius="15px"
                                                width="350px"
                                                minWidth="100%"
                                                boxShadow="2px 4px 7px hsla(0,0%,51%,.749)"
                                            >
                                                <Image width={75} alt="" src={PersonIcon}/>
                                                <Typography ml="20px" variant="h5">Pension</Typography>                
                                            </Stack>

                                            <Stack
                                                direction="row" 
                                                alignItems="center"
                                                sx={{padding: "10px 45px 10px 40px", mt:"15px", mb:"15px"}}
                                                border="1px solid lightgrey" 
                                                borderRadius="15px"
                                                width="350px"
                                                minWidth="100%"
                                                boxShadow="2px 4px 7px hsla(0,0%,51%,.749)"
                                            >
                                                <Image width={75} alt="" src={PersonIcon}/>
                                                <Typography ml="20px" variant="h5">Loans</Typography>                
                                            </Stack>

                                            <Stack
                                                direction="row" 
                                                alignItems="center"
                                                sx={{padding: "10px 45px 10px 40px", mt:"15px", mb:"15px"}}
                                                border="1px solid lightgrey" 
                                                borderRadius="15px"
                                                width="350px"
                                                minWidth="100%"
                                                boxShadow="2px 4px 7px hsla(0,0%,51%,.749)"
                                            >
                                                <Image width={75} alt="" src={PersonIcon}/>
                                                <Typography ml="20px" variant="h5">Investments</Typography>                
                                            </Stack>


                                    </Box>
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