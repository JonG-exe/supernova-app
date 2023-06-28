import React from 'react'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Image from "next/image"
import Link from "next/link"
import "../styles/index.css"
import Sharon from "../public/images/Sharon_Gray.png"
import CarIcon from "../public/images/icons/new_icon-car.png"
import HomeIcon from "../public/images/icons/new_icon-home.png"
import MedicalIcon from "../public/images/icons/new_icon-medical.png"
import PersonIcon from "../public/images/icons/new_icon-person.png"


const Index = () => {
  return (
        <main>
            {/* <Stack style={{maxWidth: "300px"}}>
                <Typography variant='h3'>
                    Supernova Financial Solutions
                </Typography>

                <Typography textAlign="justify">
                    My goals align with your financial needs.
                    I work with you to curate your most economical
                    life solutions.
                </Typography>

                <Stack justifyContent="space-between" direction="space-around">
                    <ButtoLink href="/services" variant="contained">Get In Touch</ButtoLink>
                    <ButtoLink href="/services" variant="contained">Services</ButtoLink>
                </Stack>
                
            </Stack>

            <Stack style={{maxWidth: "300px"}}>
                <div className="main_sec main_sec_2">
                    <Image alt="" className="Sharon" src={Sharon}/>

                    <Link href="/services#section_2"><Image alt="" className="icon car-icon" src={CarIcon}/> </Link>
                    <Link href="/services#section_2"><Image alt="" className="icon home-icon" src={HomeIcon}/> </Link>
                    <Link href="/services#section_3"><Image alt="" className="icon medical-icon" src={MedicalIcon}/> </Link>
                    <Link href="/services#section_4"><Image alt="" className="icon person-icon" src={PersonIcon}/> </Link>
                </div> 
                
            </Stack> */}
            

            <div className="main_sec main_sec_1">
                <h1>Supernova <br /> Financial Solutions</h1>

                <p>
                    My goals align with your financial needs.
                    I work with you to curate your most economical
                    life solutions.
                </p>

                <div className="mainButtonContainer">

                    <Link href="/contact" className="CTA CTA_1">
                        Get In Touch
                    </Link>

                    <Link href="/services" className="CTA CTA_2">
                        Services
                    </Link>
                </div>
            </div>
            
            <div className="main_sec main_sec_2">
                <Image alt="" className="Sharon" src={Sharon}/>

                <Link href="/services#section_2"><Image alt="" className="icon car-icon" src={CarIcon}/> </Link>
                <Link href="/services#section_2"><Image alt="" className="icon home-icon" src={HomeIcon}/> </Link>
                <Link href="/services#section_3"><Image alt="" className="icon medical-icon" src={MedicalIcon}/> </Link>
                <Link href="/services#section_4"><Image alt="" className="icon person-icon" src={PersonIcon}/> </Link>
            </div>
        </main>
    
  )
}

export default Index