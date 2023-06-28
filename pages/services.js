import React from 'react'
import Head from "next/head"
import Image from "next/image"
import "../styles/services.css"
import "../styles/left_Page_Breathe.css"

// Image Imports
import Menu from "../public/images/menu.png"
import AestheticVertical from "../public/images/page_asthetic_vertical.png"
import RepeatGrid from "../public/images/repeat_grid.png"
import HorizontalGrid from "../public/images/horizontal_grid.png"
import CarIcon from "../public/images/icons/new_icon-car.png"
import MedicalIcon from "../public/images/icons/new_icon-medical.png"
import HomeIcon from "../public/images/icons/new_icon-home.png"
import PersonIcon from "../public/images/icons/new_icon-person.png"
import Family from "../public/images/family.png"
import CircularHome from "../public/images/circular_home.png"
import Mercedes from "../public/images/Mercedes.png"
import Tree from "../public/images/tree.png"
import Pension from "../public/images/pension.png"
import HealthMain from "../public/images/health_main_img.png"


export default function Services () {
  return (
    <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        
        {/* <div className="menu">
            <Image alt="" src={Menu} />
        </div> */}

        <section id="section_1">

            <div className="box box_1"></div>
            <div className="box box_2"></div>
            <div className="box box_3"></div>
            <div className="transparent_box"></div>

            <Image alt="" className="circle_grid_vertical" src={AestheticVertical}></Image>
            {/* <Image alt="" height={200} className="circle_grid_horizontal" src={HorizontalGrid}></Image> */}
            <Image alt="" className="circle_grid_horizontal" src={RepeatGrid}></Image>

    
            <div className="container">
                <div className="section-one section-main">
                    <div className="insurance_box">

                        <a href="#section_2" className="slide_btn">
                            <div className="insurance_btn btn_1">
                                <Image alt="" className="btn_image" src={CarIcon}/>
                                <h3>Car Insurance</h3>                
                            </div>
                        </a >

                        <a href="#section_3" className="slide_btn">
                            <div className="insurance_btn btn_2">
                                <Image alt="" className="btn_image"src={MedicalIcon}/>
                                <h3>Health</h3>
                            </div>
                        </a >

                        <a href="#section_4" className="slide_btn">
                            <div className="insurance_btn btn_3">
                                <Image alt="" className="btn_image"src={HomeIcon}/>
                                <h3>Home & Life</h3>
                            </div>
                        </a >

                        <a href="#section_4" className="slide_btn">
                            <div className="insurance_btn btn_4">
                                <Image alt="" className="btn_image" src={PersonIcon}/>
                                <h3>Pension</h3>
                            </div>
                        </a >
                    </div>
                </div>

                <div className="section-two ">
                    <Image alt="" className="section-image family-image" src={Family}/>
                </div>

            </div>

        </section>


        <div id="section_2" className="wrapper" >
            <section>
                <div className="container container-reverse">
                    <div className="section-one">

                        <h2>Home & <br/> Car Insurance</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry&aposs standard dummy text ever since the
                            1500s. 
                            <br/><br/>
                            When an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book. It has survived not only five centuries. 
                        </p>

                        <a className="get-quote" href="#">Get A Quote</a>
                
                    </div>

                    <div className="section-two section-home ">
                        <Image alt="" className="home-image" src={CircularHome}/>
                        <Image alt="" className="car-image" src={Mercedes}/>
                        <Image alt="" className="tree tree-one" src={Tree}/>
                        <Image alt="" className="tree tree-two" src={Tree}/>
                    </div>
                </div>
            </section>
        </div>

        <div id="section_3" className="wrapper" >
            <section>
                <div className="container">
                    <div className="section-one ">
                        <h2>Health <br/> Insurance</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry&aposs standard dummy text ever since the
                            1500s. 
                            <br/><br/>
                            When an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book. It has survived not only five centuries. 
                        </p>
        
                        <a className="CTA get-quote" href="#">Get A Quote</a>
                    </div>

                    <div className="section-two section-health">
                        <Image alt="" className="health-image" src={HealthMain}/>

                        <div className="rect_sec_3 blue_rect_sec_3"></div>
                        <div className="rect_sec_3 transparent_rect_sec_3"></div>
                    </div>
                </div>
            </section>
        </div>

        <div id="section_4" className="wrapper" >
            <section>
                <div className="container container-reverse">
                    <div className="section-one ">
                        <h2>Pension</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry&aposs standard dummy text ever since the
                            1500s. 
                            <br/><br/>
                            When an unknown printer took a galley of
                            type and scrambled it to make a type specimen
                            book. It has survived not only five centuries. 
                        </p>
        
                        <a className="CTA get-quote" href="#">Get A Quote</a>
                    </div>

                    <div className="section-two section-health">
                        <Image alt="" className="health-image" src={Pension}/>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
