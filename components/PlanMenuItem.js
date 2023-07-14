import React from 'react'
import { Stack, Typography, Button, CssBaseline, Box } from '@mui/material';
import Image from "next/image"
import Link from "next/link"

const PlanMenuItem = ( { icon, name, href }) => {
  return (
    <Link href={href}>
        <Stack 
            direction={{xs: "column", sm: "row" }}
            alignItems="center" 
            sx={{padding: "10px 45px 10px 40px", mt:"15px"}}
            border="1px solid lightgrey" 
            borderRadius="15px"
            width={{xs: "87vw", sm: "400px"}}
            color="black"
            boxShadow="2px 4px 7px hsla(0,0%,51%,.749)"
        >
            <Box marginLeft={{xs: "18px", sm: "0"}}>
                <Image width={75} alt="" src={icon}/>
            </Box>
            <Typography minWidth={{xs:"100%", sm:"max-content"}} textAlign={{xs: "center", sm: "left" }} ml="20px" variant="h5">{ name }</Typography>                
        </Stack>
    </Link>
  )
}

export default PlanMenuItem