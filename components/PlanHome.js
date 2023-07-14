import { Stack, Typography, Button, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import PlanMenuItem from "./PlanMenuItem"

// Image Imports
import CarIcon from "../public/images/icons/new_icon-car.png"
import MedicalIcon from "../public/images/icons/new_icon-medical.png"
import HomeIcon from "../public/images/icons/new_icon-home.png"
import PersonIcon from "../public/images/icons/new_icon-person.png"
import InvestmentsIcon from "../public/images/icons/investments-icon.png"
import LifeCriticalIllnessIcon from "../public/images/icons/life-and-critical-illness-icon.png"
import LoansIcon from "../public/images/icons/loans-icon.png"

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
                               
                                <Stack direction="column" spacing={2} mr={{xs: "0", md:"150px"}} alignItems={{xs: "center"}}>

                                    {/* <PlanMenuItem 
                                        icon={CarIcon} 
                                        name={"Home & Auto"}
                                        href="#home-and-auto"
                                    /> */}

                                    <PlanMenuItem 
                                        icon={LifeCriticalIllnessIcon} 
                                        name={"Life & Critical Illness"}
                                        href="#life-and-critical-illness"
                                    />

                                    <PlanMenuItem 
                                        icon={MedicalIcon} 
                                        name={"Major Medical"}
                                        href="#major-medical"
                                    />

                                    <PlanMenuItem 
                                        icon={PersonIcon} 
                                        name={"Pension"}
                                        href="#pension"
                                    />

                                    {/* <PlanMenuItem 
                                        icon={LoansIcon} 
                                        name={"Loans"}
                                        href="#loans"
                                    /> */}

                                    <PlanMenuItem 
                                        icon={InvestmentsIcon} 
                                        name={"Financing"}
                                        href="#financing"
                                    />

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