import { useState, React } from 'react'
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/images/supernova-financial-logo.png" 
import { Modal, Typography, Button, AppBar, Toolbar, Box, Stack } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ModalItem from "./ModalItem"

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
        <Toolbar 
          sx={{
            justifyContent: {
              xs: "space-between",
              sm: "space-around"
            },
            height:"80px", 
            backgroundColor: "blue", 
            backgroundImage: "linear-gradient(110deg,#006fe3 50%,#0068d4)"}} 
          alignItems="center"
        >
          
          <Box mr={{xs: "none", sm: "auto"}} ml={{ xs: "none", sm: "20px"}}>
            <Link href="/">
              <Stack 
                direction="row" 
                spacing={2} 
                alignItems="center" 
                justifyContent={"center"} 
                sx={{ marginRight:"50px",}}
              >

                <Image width={70} src={Logo} alt="" />
                <Typography display={{xs: "none", md: "inline-block"}} variant="h6">Supernova Financial</Typography>

              </Stack>
            </Link>
          </Box>


          <Stack direction={"row"} display={{ xs: "none", sm: "flex",}}>

            <Link href="https://wa.me/18687667824">
              <Stack alignItems="center" justifyContent={"center"} sx={{ marginRight:"50px",}}>
                <WhatsAppIcon sx={{fontSize: "35px", mb: "2px"}}  />
                <span>WhatsApp</span>
              </Stack>
            </Link>

            <Link href="/plans">
              <Stack alignItems="center" justifyContent={"center"} sx={{ marginRight:"50px",}}>
                <SupportIcon 
                  sx={{fontSize: "35px", mb: "2px"}}  />
                <span>Plans</span>
              </Stack>
            </Link>

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
            <Stack sx={{padding: "30px", width: "90vw", height: "80vh", backgroundColor: "white", borderRadius: "5px", border: "4px solid darkblue"}} alignItems="center">

              <Stack 
                height="100%" 
                width="100%" 
                justifyContent="space-around"
              >

                <Link onClick={handleClose} style={{color: "black"}} href="/">
                  <Stack direction="row" spacing={4} alignItems="center">
                    <HomeIcon sx={{
                      fontSize: "3em", 
                      color: "black"}}
                    />
                      <Typography variant="h5">Home</Typography>
                  </Stack>
                </Link>

                <Link href="/https://wa.me/18687667824">
                  <Stack direction="row" spacing={4} alignItems="center" color="black">
                    <WhatsAppIcon sx={{
                      fontSize: "3em", 
                      color: "black"}}
                    />
                    <Typography variant="h5">WhatsApp</Typography>
                  </Stack>
                </Link>

                <Link onClick={handleClose} style={{color: "black"}} href="/plans">
                  <Stack direction="row" spacing={4} alignItems="center">
                    <SupportIcon sx={{fontSize: "3em", color: "black"}} />
                      <Typography variant="h5">Plans</Typography>
                  </Stack>
                </Link>


                <Link onClick={handleClose} style={{color: "black"}} href="/contact">
                  <Stack direction="row" spacing={4} alignItems="center">
                    <ContactMailIcon sx={{fontSize: "3em", color: "black"}} />
                      <Typography variant="h5">Contact</Typography>
                  </Stack>
                </Link>


                <Link onClick={handleClose} style={{color: "black"}} href="/quote">
                  <Stack direction="row" spacing={4} alignItems="center">
                    <RequestQuoteIcon sx={{fontSize: "3em", color: "black"}} />
                      <Typography variant="h5">Quotes</Typography>
                  </Stack>
                </Link>

                <Link onClick={handleClose} style={{color: "black"}} href="/blogs">
                  <Stack direction="row" spacing={4} alignItems="center">
                    <BookIcon sx={{fontSize: "3em", color: "black"}} />
                      <Typography variant="h5">Blog</Typography>
                  </Stack>
                </Link>


              </Stack>
            </Stack>
          </Modal>

        </Toolbar>
      </AppBar>
    </>
  )
}
