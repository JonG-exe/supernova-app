import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/images/logo.png" 
import { Button, AppBar, Toolbar, Box, Stack } from "@mui/material"
import Menu from "./Menu"

// Icons
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SupportIcon from '@mui/icons-material/Support';
import BookIcon from '@mui/icons-material/Book';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav () {

  function toggleMenu() {
    console.log("toggled")
  }

  return (
    <>
      <AppBar position="relative">
      <Toolbar sx={{justifyContent: "space-around", height:"80px", backgroundColor: "blue", backgroundImage: "linear-gradient(110deg,#006fe3 50%,#0068d4)"}} alignItems="center">
        
        <Box mr={{xs: "none", sm: "auto"}} ml={{ xs: "none", sm: "20px"}}>
          <Link href="/">
            <Stack alignItems="center" justifyContent={"center"} sx={{ marginRight:"50px",}}>
              <HomeIcon  sx={{fontSize: "35px", mb: "2px"}}  />
              <span>Home</span>
            </Stack>
          </Link>
        </Box>

        <Link href="/plans">
          <Stack alignItems="center" justifyContent={"center"} sx={{ marginRight:"50px",}}>
            <SupportIcon  sx={{fontSize: "35px", mb: "2px"}}  />
            <span>Plans</span>
          </Stack>
        </Link>

        <Stack direction={"row"} display={{ xs: "none", sm: "flex",}}>
          <Link href="/contact">
            <Stack alignItems="center" justifyContent={"center"} sx={{ marginRight:"50px",}}>
              <ContactMailIcon  sx={{fontSize: "35px", mb: "2px"}}  />
              <span>Contact Us</span>
            </Stack>
          </Link>

          <Link href="/quote">
            <Stack alignItems="center" justifyContent={"center"} sx={{ marginRight:"50px",}}>
              <RequestQuoteIcon  sx={{fontSize: "35px", mb: "2px"}}  />
              <span>Quotes</span>
            </Stack>
          </Link>

          
          <Link href="/blogs">
            <Stack display={{ xs: "none", sm: "flex",}} alignItems="center" justifyContent={"center"} sx={{ marginRight:"50px",}}>
              <BookIcon  sx={{fontSize: "35px", mb: "2px"}}  />
              <span>Blog</span>
            </Stack>
          </Link>
        </Stack>


        <Button sx={{color: "white", display: { xs: "flex", sm: "none" } }} onClick={toggleMenu} >
          <Stack alignItems="center" justifyContent={"center"} >
            <MenuIcon  sx={{fontSize: "35px", mb: "2px"}}  />
            <span>Menu</span>
          </Stack>
        </Button>
        

      </Toolbar>
      </AppBar>
    </>
  )
}
