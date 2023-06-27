import React from 'react'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import "../styles/index.css"

const Index = () => {
  return (
        <main>
            <Stack style={{maxWidth: "300px"}}>
                <Typography variant='h3'>
                    Supernova Financial Solutions
                </Typography>

                <Typography textAlign="justify">
                    My goals align with your financial needs.
                    I work with you to curate your most economical
                    life solutions.
                </Typography>

                <Stack justifyContent="space-between" direction="space-around">
                    <Button href="/services" variant="contained">Get In Touch</Button>
                    <Button href="/services" variant="contained">Services</Button>
                </Stack>
                
            </Stack>

            <Stack style={{maxWidth: "300px"}}>
                <div className="main_sec main_sec_2">
                    <img className="Sharon" src="images/Sharon_Gray.png"/>

                    <a href="/services#section_2"><img className="icon car-icon" src="images/icons/new_icon-car.png"/> </a>
                    <a href="/services#section_2"><img className="icon home-icon" src="images/icons/new_icon-home.png"/> </a>
                    <a href="/services#section_3"><img className="icon medical-icon" src="images/icons/new_icon-medical.png"/> </a>
                    <a href="/services#section_4"><img className="icon person-icon" src="images/icons/new_icon-person.png"/> </a>
                </div> 
                
            </Stack>
            

            {/* <div className="main_sec main_sec_1">
                <h1>Supernova <br /> Financial Solutions</h1>

                <p>
                    My goals align with your financial needs.
                    I work with you to curate your most economical
                    life solutions.
                </p>

                <div className="mainButtonContainer">

                    <a href="/contact" className="CTA CTA_1">
                        Get In Touch
                    </a>

                    <a href="/services" className="CTA CTA_2">
                        Services
                    </a>
                </div>
            </div>
            
            <div className="main_sec main_sec_2">
                <img className="Sharon" src="images/Sharon_Gray.png"/>

                <a href="/services#section_2"><img className="icon car-icon" src="images/icons/new_icon-car.png"/> </a>
                <a href="/services#section_2"><img className="icon home-icon" src="images/icons/new_icon-home.png"/> </a>
                <a href="/services#section_3"><img className="icon medical-icon" src="images/icons/new_icon-medical.png"/> </a>
                <a href="/services#section_4"><img className="icon person-icon" src="images/icons/new_icon-person.png"/> </a>
            </div> */}
        </main>
    
  )
}

export default Index