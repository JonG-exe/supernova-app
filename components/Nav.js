import { useState, React } from 'react'
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/images/logo.png" 
import { Modal, Typography, Button, AppBar, Toolbar, Box, Stack } from "@mui/material"

// Icons
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SupportIcon from '@mui/icons-material/Support';
import BookIcon from '@mui/icons-material/Book';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav () {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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


        <Button onClick={handleOpen} sx={{color: "white", display: { xs: "flex", sm: "none" } }}  >
          <Stack  alignItems="center" justifyContent={"center"} >
            <MenuIcon  sx={{fontSize: "35px", mb: "2px"}}  />
            <span>Menu</span>
          </Stack>
        </Button>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{display: "flex", justifyContent:"center", alignItems:"center"}}
        >
          <Box sx={{padding: "30px", width: "90vw", height: "80vh", backgroundColor: "white", borderRadius: "20px", border: "10px solid darkblue"}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Navigation
            </Typography>

            <Stack>
              <Stack>
                <Image src={HomeIcon} alt="" />
                <Link onClick={handleClose} style={{color: "black"}} href="/">Home</Link>
              </Stack>
              <Stack>
                <Image src={ContactMailIcon} alt="" />
                <Link onClick={handleClose} style={{color: "black"}} href="/contact">Plans</Link>
              </Stack>
              <Stack>
                <Image src={RequestQuoteIcon} alt="" />
                <Link onClick={handleClose} style={{color: "black"}} href="/quote">Contact Us</Link>
              </Stack>
              <Stack>
                <Image src={SupportIcon} alt="" />
                <Link onClick={handleClose} style={{color: "black"}} href="/plans">Quotes</Link>
              </Stack>
              <Stack>
                <Image src={BookIcon} alt="" />
                <Link onClick={handleClose} style={{color: "black"}} href="/blogs">Blog</Link>
              </Stack>


            </Stack>
          </Box>
        </Modal>

      </Toolbar>
      </AppBar>
    </>
  )
}
