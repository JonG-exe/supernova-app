import React from 'react'
import "../styles/contact.css"

const Contact = () => {
  return (
    <>
        <div className="menu">
            <img src="images/menu.png" />
        </div>

        <div id="page_design">
            <div className="left_page_design">
                <div className="box box_1"></div>
                <div className="box box_2"></div>
                <div className="box box_3"></div>
                <div className="transparent_box"></div>
        
                <img className="circle_grid_vertical" src="images/page_asthetic_vertical.png"></img>
                <img className="circle_grid_horizontal" src="images/page_asthetic_horizontal.png"></img>
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