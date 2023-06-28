import React from 'react'
import "../styles/contact.css"
import Image from "next/image"

// Image Imports
import Menu from "../public/images/menu.png"
import AestheticHorizontal from "../public/images/page_asthetic_horizontal.png"
import AestheticVertical from "../public/images/page_asthetic_vertical.png"

const Contact = () => {
  return (
    <>
        <div className="menu">
            <Image alt="" src={Menu} />
        </div>

        <div id="page_design">
            <div className="left_page_design">
                <div className="box box_1"></div>
                <div className="box box_2"></div>
                <div className="box box_3"></div>
                <div className="transparent_box"></div>
        
                <Image alt="" className="circle_grid_horizontal" src={AestheticHorizontal}></Image>
                <Image alt="" className="circle_grid_vertical" src={AestheticVertical}></Image>
            </div>
        </div>

        <div className="form">

            <div className="form_main_area">

                <form action="/contact" method="POST">

                    <div className="main_inputs">
                        <input name="firstName" type="text" placeholder="First Name" />
                        <input name="lastName" type="text" placeholder="Last Name" />
                        <input name="email" type="text" placeholder="Email" />
                        <input name="phone" type="text" placeholder="Phone" />

                        <select required>
                            <option value="">Service</option>
                            <option value="car insurance">Car Insurance</option>
                            <option value="medical">Medical</option>
                            <option value="home_and_life">Home & Life</option>
                            <option value="pension">Pension</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <textarea></textarea>

                    <button className="send">Send</button>
                    
                </form>
            </div>

            <div className="form_contact_info">

                <div id="contact_info">
                    <h1>Contact Information</h1>
                    <h3># 19 Armonk Drive,<br/> Homestead Gardens,<br/> Santa Cruz</h3>
                    <h3>1 (868) 766-7824</h3>
                    <h3>magray@gmail.com</h3>
                </div>

            </div>
        </div>
    </>
  )
}

export default Contact