import { Stack, Typography, Button, CssBaseline, Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function MuiService ( { title, id, description, img, moreInfo }) {

    return (
        <>
            <Box 
                id={id} 
                sx={{boxSizing: "border-box", padding: "10px", 
                backgroundImage: "linear-gradient(110deg,#006fe3 50%,#0068d4)" }} 
                width="100vw" 
                height={{xs: "100%", sm:"100vh"}} 
                minHeight="700px" 
                display="flex" 
                justifyContent={"center"} 
                alignItems={"center"}
            >
                <Stack width="100%" height="100%" backgroundColor="white" justifyContent={"center"}> 
                    <CssBaseline />
                    
                    <Stack padding={{xs: "10px", sm: "50px"}} direction={{xs: "column-reverse", md: "row"}} justifyContent={"center"} alignItems={{xs: "center"}} >

                        <Stack 
                            padding="0 15px"
                            mr={{md: "50px"}} maxWidth={{md: "800px"}} spacing={4} justifyContent={"center"} alignItems={{xs: "center", md: "flex-start"}}
                        >

                            <Typography textAlign={{xs: "center", md: "left"}} width="100%" variant="h2" >{ title }</Typography>
                            <Typography variant="body1" textAlign="justify" fontSize={{xs: "16px", md: "24px"}} maxWidth="600px">
                                { description }
                            </Typography>

                            <Stack direction={{xs: "column", sm: "row"}} spacing={2}>
                                <Button href="/quote"textAlign="center"  variant='green'>Get A Quote</Button>

                                <Button href={moreInfo} textAlign="center" variant="outlined">More Info...</Button>
                            </Stack>
                            
                        </Stack>

                        <Box 
                            mb="30px" 
                            width="50%" 
                            maxWidth={{xs: "280px", 
                            md: "600px"}} 
                            minWidth={{xs: "85%", sm:"350px"}} 
                            display="flex" 
                            justifyContent={"center"} 
                            alignItems={"center"}
                        >
                            <Image alt="" style={{width:"100%", height:"100%"}} src={img}/>
                        </Box>
                    </Stack>
                </Stack>
            </Box>
        </>
    )

}